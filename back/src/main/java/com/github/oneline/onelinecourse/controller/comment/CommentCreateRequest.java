package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.model.comment.Comments;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Setter
public class CommentCreateRequest {

    private String content;

    public Comments toEntity() {
        return Comments.builder()
                .content(content)
                .build();
    }
}
