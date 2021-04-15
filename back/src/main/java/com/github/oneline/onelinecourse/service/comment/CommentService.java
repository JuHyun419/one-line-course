package com.github.oneline.onelinecourse.service.comment;

import com.github.oneline.onelinecourse.model.comment.Comments;
import com.github.oneline.onelinecourse.repository.comment.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkNotNull;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;

    public Comments createComment(final Comments requestComment) {
        checkNotNull(requestComment.getUserId(), "userId must be provided");
        checkNotNull(requestComment.getLectureId(), "lectureId must be provided");

        return commentRepository.findByUserIdAndLectureId(
                        requestComment.getUserId(), requestComment.getLectureId())
                .orElseGet(() -> commentRepository.save(requestComment));
    }

    public void updateComment(final Comments requestComment, final Long commentId) {
        checkArgument(commentId > 0, "commentId must be positive number");

        final Comments comments = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException(commentId + "번에 해당하는 댓글이 존재하지 않습니다."));

        comments.updateContent(requestComment.getContent());
    }

    public void deleteComment(final Long commentId) {
        checkArgument(commentId > 0, "commentId must be positive number");

        final Comments comments = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException(commentId + "번에 해당하는 댓글이 존재하지 않습니다."));

        commentRepository.delete(comments);
    }

    public List<Comments> findAllLectureComments(final Long lectureId) {
        checkArgument(lectureId > 0, "lectureId must be positive number");

        return commentRepository.findAllByLectureId(lectureId);
    }

    public List<Comments> findAllUserComments(final Long userId) {
        checkArgument(userId > 0, "userId must be positive number");

        return commentRepository.findAllByUserId(userId);
    }
}
