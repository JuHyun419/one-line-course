package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.model.comment.Comments;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
public class CommentUpdateRequest {
    private String content;

    public Comments toEntity() {
        return Comments.builder()
                .content(content)
                .build();
    }
}
