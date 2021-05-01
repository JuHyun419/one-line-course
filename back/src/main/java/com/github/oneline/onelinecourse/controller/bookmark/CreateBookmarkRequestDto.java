package com.github.oneline.onelinecourse.controller.bookmark;

import com.github.oneline.onelinecourse.model.bookmark.Bookmark;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class CreateBookmarkRequestDto {

    @ApiModelProperty(value = "유저 ID", required = true)
    private String userId;

    @ApiModelProperty(value = "강의 ID", required = true)
    private Long lectureId;

    // DTO -> Entity 변환
    public Bookmark toEntity() {
        return Bookmark.builder().build();
    }

}
