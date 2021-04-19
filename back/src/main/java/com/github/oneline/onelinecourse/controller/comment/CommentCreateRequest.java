package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.model.comment.Comment;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Builder
public class CommentCreateRequest {

    private String content;
    private Long lectureId;
    private String userId;

    public Comment toEntity() {
        return Comment.builder()
                .content(content)
                .build();
    }
}
