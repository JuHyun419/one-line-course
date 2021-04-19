package com.github.oneline.onelinecourse.service.comment;

import com.github.oneline.onelinecourse.model.comment.Comment;
import com.github.oneline.onelinecourse.model.lecture.Lecture;
import com.github.oneline.onelinecourse.model.user.User;
import com.github.oneline.onelinecourse.repository.comment.CommentRepository;
import com.github.oneline.onelinecourse.repository.lecture.LectureRepository;
import com.github.oneline.onelinecourse.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkNotNull;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;

    private final UserRepository userRepository;

    private final LectureRepository lectureRepository;

    public Comment createComment(final Comment comment, final String userId, final Long lectureId) {
        checkNotNull(userId, "userId must be provided");
        checkNotNull(lectureId, "lectureId must be provided");

        Comment newComment = convertToComment(comment, userId, lectureId);

        return commentRepository.save(newComment);
    }

    private Comment convertToComment(final Comment comment, final String userId, final Long lectureId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("userId: " + userId + "의 유저가 존재하지 않습니다"));
        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(() -> new IllegalArgumentException("lectureId: " + lectureId + "의 강의가 존재하지 않습니다"));

        return Comment.builder()
                .content(comment.getContent())
                .lecture(lecture)
                .user(user)
                .build();
    }

    @Transactional
    public void updateComment(final Comment requestComment, final Long commentId) {
        checkArgument(commentId > 0, "commentId must be positive number");

        final Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException("commentId: " + commentId + "번에 해당하는 댓글이 존재하지 않습니다"));

        comment.updateContent(requestComment.getContent());
    }

    @Transactional
    public void deleteComment(final Long commentId) {
        checkArgument(commentId > 0, "commentId must be positive number");

        final Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException(commentId + "번에 해당하는 댓글이 존재하지 않습니다"));

        commentRepository.delete(comment);
    }

    @Transactional(readOnly = true)
    public List<Comment> findAllLectureComments(final Long lectureId) {
        checkArgument(lectureId > 0, "lectureId must be positive number");

        return commentRepository.findAllByLectureId(lectureId);
    }

    // TODO: 유저 확인 로직 추가
    @Transactional(readOnly = true)
    public List<Comment> findAllUserComments(final String userId) {
        checkNotNull(userId, "userId must be provided");

        return commentRepository.findAllByUserId(userId);
    }
}
