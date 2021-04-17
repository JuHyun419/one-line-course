package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.service.comment.CommentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

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
                        commentService.createComment(
                                request.toEntity(), request.getUserId(), request.getLectureId()))
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
    public ResponseEntity<List<CommentResponse>> getLectureComments(@PathVariable Long lectureId) {
        return ResponseEntity.ok(
                commentService.findAllLectureComments(lectureId)
                        .stream()
                        .map(CommentResponse::new)
                        .collect(Collectors.toList())
        );
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<CommentResponse>> getUserComments(@PathVariable Long userId) {
        return ResponseEntity.ok(
                commentService.findAllUserComments(userId)
                        .stream()
                        .map(CommentResponse::new)
                        .collect(Collectors.toList())
        );
    }
}
