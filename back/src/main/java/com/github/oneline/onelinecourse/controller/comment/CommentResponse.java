package com.github.oneline.onelinecourse.controller.comment;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class CommentResponse {

    private Long id;
    private String content;
    private LocalDateTime createdAt;
}
