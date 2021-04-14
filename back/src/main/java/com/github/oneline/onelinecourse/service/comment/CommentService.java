package com.github.oneline.onelinecourse.service.comment;

import com.github.oneline.onelinecourse.controller.comment.CommentResponse;
import com.github.oneline.onelinecourse.model.comment.Comments;
import com.github.oneline.onelinecourse.repository.comment.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.xml.stream.events.Comment;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkNotNull;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;

    public Comments createComment(Comments requestComment) {
        checkNotNull(requestComment.getUserId(), "userId must be provided");
        checkNotNull(requestComment.getLectureId(), "lectureId must be provided");

        return commentRepository.findByUserIdAndLectureId(
                        requestComment.getUserId(), requestComment.getLectureId())
                .orElseGet(() -> commentRepository.save(requestComment));
    }

    public void updateComment(Comments requestComment, Long commentId) {
        checkArgument(commentId > 0, "commentId must be positive number");

        final Comments comments = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException(commentId + "번에 해당하는 댓글이 존재하지 않습니다."));

        comments.updateContent(requestComment.getContent());
    }

    public void deleteComment(Long commentId) {
        checkArgument(commentId > 0, "commentId must be positive number");

        final Comments comments = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException(commentId + "번에 해당하는 댓글이 존재하지 않습니다."));

        commentRepository.delete(comments);
    }

}
