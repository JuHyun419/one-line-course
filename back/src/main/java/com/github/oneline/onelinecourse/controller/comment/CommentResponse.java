package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.model.comment.Comment;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.beans.BeanUtils;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class CommentResponse {

    private Long id;
    private String content;
    private LocalDateTime createdAt;

    public CommentResponse(Comment source) {
        BeanUtils.copyProperties(source, this);
    }
}
