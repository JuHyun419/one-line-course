package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.model.comment.Comments;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
public class CommentCreateRequest {

    private String content;
    private Long lectureId;
    private Long userId;

    public Comments toEntity() {
        Comments comments = Comments.builder()
                .content(content)
                .build();

        comments.updateUserId(userId);
        comments.updateLectureId(lectureId);

        return comments;
    }
}
