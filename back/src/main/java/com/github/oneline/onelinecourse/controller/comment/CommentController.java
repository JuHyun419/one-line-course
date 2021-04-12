package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.service.comment.CommentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/comments")
@RestController
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public ResponseEntity<CommentResponse> createComment(
            CommentCreateRequest request/*, Users user*/, @RequestBody String lectureIds) {
        Long lectureId = Long.valueOf(lectureIds);

        final CommentResponse comment = commentService.createComment(
                request.toEntity()/*, user.getId()*/, lectureId
        );
        return ResponseEntity.ok(comment);
    }

    @PatchMapping("/{commentId}")
    public ResponseEntity<Void> updateComment(@PathVariable Long commentId) {

        return ResponseEntity.ok()
                .build();
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long commentId/*, User user*/) {
        commentService.deleteComment(commentId/*, user*/);

        return ResponseEntity.noContent()
                .build();
    }

    @GetMapping("/lectures/{lectureId}")
    public ResponseEntity<List<CommentResponse>> getComments(@PathVariable Long lectureId) {

        return null;
    }
}
