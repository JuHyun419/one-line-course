package com.github.oneline.onelinecourse.controller.bookmark;

import com.github.oneline.onelinecourse.model.bookmark.Bookmark;
import com.github.oneline.onelinecourse.model.lecture.Lecture;
import com.github.oneline.onelinecourse.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class CreateBookmarkRequestDto {
    private Long id;
    private LocalDateTime createdAt;
    private String userId;
    private Long lectureId;

    // DTO -> Entity 변환
    public Bookmark toEntity() {
        return Bookmark.builder()
                .userId(userId)
                .lectureId(lectureId)
                .build();
    }

}
