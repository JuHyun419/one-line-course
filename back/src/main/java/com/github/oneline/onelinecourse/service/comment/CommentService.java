package com.github.oneline.onelinecourse.service.comment;

import com.github.oneline.onelinecourse.model.comment.Comment;
import com.github.oneline.onelinecourse.model.lecture.Lecture;
import com.github.oneline.onelinecourse.repository.comment.CommentRepository;
import com.github.oneline.onelinecourse.repository.lecture.LectureRepository;
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
    private final LectureRepository lectureRepository;

    public Comment createComment(final Comment comment, final Long userId, final Long lectureId) {
        checkNotNull(userId, "userId must be provided");
        checkNotNull(lectureId, "lectureId must be provided");

/*        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException(userId + "의 유저가 존재하지 않습니다."));*/

        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(() -> new IllegalArgumentException(lectureId + "의 강의가 존재하지 않습니다."));

        /*comment.addUser(user);*/
        comment.addLecture(lecture);

        return commentRepository.findByUserIdAndLectureId(userId, lectureId)
                .orElseGet(() -> commentRepository.save(comment));
    }

    @Transactional
    public void updateComment(final Comment requestComment, final Long commentId) {
        checkArgument(commentId > 0, "commentId must be positive number");

        final Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException(commentId + "번에 해당하는 댓글이 존재하지 않습니다."));

        comment.updateContent(requestComment.getContent());
    }

    @Transactional
    public void deleteComment(final Long commentId) {
        checkArgument(commentId > 0, "commentId must be positive number");

        final Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException(commentId + "번에 해당하는 댓글이 존재하지 않습니다."));

        commentRepository.delete(comment);
    }

    @Transactional(readOnly = true)
    public List<Comment> findAllLectureComments(final Long lectureId) {
        checkArgument(lectureId > 0, "lectureId must be positive number");

        return commentRepository.findAllByLectureId(lectureId);
    }

    // TODO: 유저 확인 로직 추가
    @Transactional(readOnly = true)
    public List<Comment> findAllUserComments(final Long userId) {
        checkArgument(userId > 0, "userId must be positive number");

        return commentRepository.findAllByUserId(userId);
    }
}
