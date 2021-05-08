package com.github.oneline.onelinecourse.service.comment;

import com.github.oneline.onelinecourse.common.error.exception.BookmarkNotFoundException;
import com.github.oneline.onelinecourse.common.error.exception.CommentNotFoundException;
import com.github.oneline.onelinecourse.common.error.exception.UserNotFoundException;
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
                .orElseThrow(UserNotFoundException::new);

        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(BookmarkNotFoundException::new);

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
                .orElseThrow(CommentNotFoundException::new);

        comment.updateContent(requestComment.getContent());
        comment.updateDate();
    }

    @Transactional
    public void deleteComment(final Long commentId) {
        checkArgument(commentId > 0, "commentId must be positive number");

        final Comment comment = commentRepository.findById(commentId)
                .orElseThrow(CommentNotFoundException::new);

        commentRepository.delete(comment);
    }

    @Transactional(readOnly = true)
    public List<Comment> findAllLectureComments(final Long lectureId) {
        checkArgument(lectureId > 0, "lectureId must be positive number");

        return commentRepository.findAllByLectureIdOrderByCreatedAtDesc(lectureId);
    }

    @Transactional(readOnly = true)
    public List<Comment> findAllUserComments(final String userId) {
        checkNotNull(userId, "userId must be provided");

        return commentRepository.findAllByUserIdOrderByCreatedAtDesc(userId);
    }
}
