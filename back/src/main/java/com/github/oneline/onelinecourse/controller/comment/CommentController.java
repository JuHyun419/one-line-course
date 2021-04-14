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
            @RequestBody CommentCreateRequest request) {
        return ResponseEntity.ok(
                new CommentResponse(
                        commentService.createComment(request.toEntity()))
        );
    }

    @PatchMapping("/{commentId}")
    public ResponseEntity<Void> updateComment(@RequestBody CommentUpdateRequest request,
                                              @PathVariable Long commentId) {
        commentService.updateComment(request.toEntity(), commentId);

        return ResponseEntity.ok()
                .build();
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long commentId) {
        commentService.deleteComment(commentId);

        return ResponseEntity.noContent()
                .build();
    }

    @GetMapping("/lectures/{lectureId}")
    public ResponseEntity<List<CommentResponse>> getComments(@PathVariable Long lectureId) {

        return null;
    }
}
