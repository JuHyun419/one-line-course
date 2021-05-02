package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.service.comment.CommentService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static com.github.oneline.onelinecourse.util.StatusCode.getStatusCode;

@RequiredArgsConstructor
@RequestMapping("/comments")
@RestController
public class CommentController {

    private final CommentService commentService;

    @PostMapping
    @ApiOperation(value = "댓글 등록")
    public ResponseEntity<CommentResponse> createComment(
            @RequestBody CommentCreateRequest request) {
        return ResponseEntity.ok(
                new CommentResponse(
                        commentService.createComment(
                                request.toEntity(), request.getUserId(), request.getLectureId()))
        );
    }

    @PatchMapping("/{commentId}")
    @ApiOperation(value = "댓글 수정")
    public ResponseEntity<Void> updateComment(
            @RequestBody CommentUpdateRequest request,
            @PathVariable @ApiParam(value = "댓글 ID", example = "1") Long commentId) {
        commentService.updateComment(request.toEntity(), commentId);
        return ResponseEntity.ok()
                .build();
    }

    @DeleteMapping("/{commentId}")
    @ApiOperation(value = "댓글 삭제")
    public ResponseEntity<Void> deleteComment(
            @PathVariable @ApiParam(value = "댓글 ID", example = "1") Long commentId) {
        commentService.deleteComment(commentId);
        return ResponseEntity.noContent()
                .build();
    }

    @GetMapping("/lectures/{lectureId}")
    @ApiOperation(value = "강의 댓글 전체 조회")
    public ResponseEntity<List<CommentResponse>> getLectureComments(
            @PathVariable @ApiParam(value = "강의 ID", example = "1") Long lectureId) {

        List<CommentResponse> response = commentService.findAllLectureComments(lectureId)
                .stream()
                .map(CommentResponse::new)
                .collect(Collectors.toList());

        return new ResponseEntity<>(response, getStatusCode(response));
    }

    @GetMapping("/users/{userId}")
    @ApiOperation(value = "유저 댓글 전체 조회")
    public ResponseEntity<List<CommentResponse>> getUserComments(
            @PathVariable @ApiParam(value = "유저 ID", example = "00002182919823455812") String userId) {

        List<CommentResponse> response = commentService.findAllUserComments(userId)
                .stream()
                .map(CommentResponse::new)
                .collect(Collectors.toList());

        return new ResponseEntity<>(response, getStatusCode(response));
    }
}
