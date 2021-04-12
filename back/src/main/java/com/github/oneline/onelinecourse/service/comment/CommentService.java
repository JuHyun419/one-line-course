package com.github.oneline.onelinecourse.service.comment;

import com.github.oneline.onelinecourse.controller.comment.CommentResponse;
import com.github.oneline.onelinecourse.model.comment.Comments;
import com.github.oneline.onelinecourse.repository.comment.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;

    public CommentResponse createComment(Comments toEntity/*, Long userId*/, Long lectureId) {

        return null;
    }

    public void updateComment(Long id, Comments comments) {

    }

    public void deleteComment(Long id/*, User user*/) {
        final Comments comment = commentRepository.findByIdAndUserId(id/*, user.getId()*/)
                .orElseThrow(() -> new IllegalArgumentException(id + "번에 해당하는 댓글이 존재하지 않습니다."));

        commentRepository.delete(comment);
    }

}
