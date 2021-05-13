package com.github.oneline.onelinecourse.controller.bookmark;

import com.github.oneline.onelinecourse.model.bookmark.Bookmark;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookmarkResponse {

    @ApiModelProperty(value = "PK", required = true)
    private Long id;

    @ApiModelProperty(value = "북마크 등록 일시", required = true)
    private LocalDateTime createdAt;

    @ApiModelProperty(value = "강의 ID", required = true)
    private Long lectureId;

    public BookmarkResponse(Bookmark bookmark) {
        this.id = bookmark.getId();
        this.createdAt = bookmark.getCreatedAt();
        this.lectureId = bookmark.getLecture().getId();
    }
}
