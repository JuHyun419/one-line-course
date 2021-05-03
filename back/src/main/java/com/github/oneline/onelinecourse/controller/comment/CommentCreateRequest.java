package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.model.comment.Comment;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentCreateRequest {

    @ApiModelProperty(value = "댓글 내용", required = true)
    private String content;

    @ApiModelProperty(value = "강의 ID", required = true)
    private Long lectureId;

    @ApiModelProperty(value = "유저 ID", required = true)
    private String userId;

    public Comment toEntity() {
        return Comment.builder()
                .content(content)
                .build();
    }
}
