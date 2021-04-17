package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.model.comment.Comment;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
public class CommentCreateRequest {

    private String content;
    private Long lectureId;
    private Long userId;

    public Comment toEntity() {
        return Comment.builder()
                .content(content)
                .build();
    }
}
