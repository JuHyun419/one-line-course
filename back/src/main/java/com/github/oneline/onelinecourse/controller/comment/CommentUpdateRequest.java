package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.model.comment.Comment;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
public class CommentUpdateRequest {
    private String content;

    public Comment toEntity() {
        return Comment.builder()
                .content(content)
                .build();
    }
}
