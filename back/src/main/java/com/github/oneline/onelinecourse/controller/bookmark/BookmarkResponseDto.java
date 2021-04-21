package com.github.oneline.onelinecourse.controller.bookmark;

import com.github.oneline.onelinecourse.model.bookmark.Bookmark;
import com.github.oneline.onelinecourse.model.comment.Comment;
import com.github.oneline.onelinecourse.model.lecture.Lecture;
import com.github.oneline.onelinecourse.model.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.beans.BeanUtils;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class BookmarkResponseDto {
    private Long id;
    private LocalDateTime createdAt;
    private User user;
    private Lecture lecture;

    @Builder
    public BookmarkResponseDto(Long id, LocalDateTime createdAt, User user, Lecture lecture) {
        this.id = id;
        this.createdAt = createdAt;
        this.user = user;
        this.lecture = lecture;
    }

    public BookmarkResponseDto(Bookmark bookmark) {
        BeanUtils.copyProperties(bookmark, this);
    }
}
