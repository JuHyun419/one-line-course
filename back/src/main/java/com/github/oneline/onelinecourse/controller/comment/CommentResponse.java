package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.model.comment.Comment;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.springframework.beans.BeanUtils;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentResponse {

    @ApiModelProperty(value = "PK", required = true)
    private Long id;

    @ApiModelProperty(value = "유저 ID", required = true)
    private String userId;

    @ApiModelProperty(value = "댓글 내용", required = true)
    private String content;

    @ApiModelProperty(value = "댓글 작성일시", required = true)
    private LocalDateTime createdAt;

    public CommentResponse(Comment source) {
        BeanUtils.copyProperties(source, this);
        this.userId = source.getUser().getId();
    }
}
