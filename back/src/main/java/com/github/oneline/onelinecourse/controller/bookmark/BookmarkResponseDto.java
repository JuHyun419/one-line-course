package com.github.oneline.onelinecourse.controller.bookmark;

import com.github.oneline.onelinecourse.model.bookmark.Bookmark;
import com.github.oneline.onelinecourse.model.comment.Comment;
import com.github.oneline.onelinecourse.model.lecture.Lecture;
import com.github.oneline.onelinecourse.model.user.User;
import lombok.*;
import org.springframework.beans.BeanUtils;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class BookmarkResponseDto {
    private Long id;
    private LocalDateTime createdAt;
    private String userId;
    private Long lectureId;

    public BookmarkResponseDto(Bookmark bookmark) {
        BeanUtils.copyProperties(bookmark, this);
    }
}
