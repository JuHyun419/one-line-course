package com.github.oneline.onelinecourse.controller.bookmark;

import com.github.oneline.onelinecourse.model.bookmark.Bookmark;
import com.github.oneline.onelinecourse.model.lecture.Lecture;
import com.github.oneline.onelinecourse.model.user.User;
import lombok.Builder;

import java.time.LocalDateTime;

public class CreateBookmarkRequestDto {
    private Long id;
    private LocalDateTime createdAt;
    private User user;
    private Lecture lecture;

    @Builder
    public CreateBookmarkRequestDto(Long id, LocalDateTime createdAt, User user, Lecture lecture) {
        this.id = id;
        this.createdAt = createdAt;
        this.user = user;
        this.lecture = lecture;
    }

    public Bookmark toEntity() {
        return Bookmark.builder()
                .id(id)
                .createdAt(createdAt)
                .user(user)
                .lecture(lecture)
                .build();
    }
}
