package com.github.oneline.onelinecourse.controller.bookmark;

import com.github.oneline.onelinecourse.service.bookmark.BookmarkService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bookmarks")
public class BookmarkController {

    private final BookmarkService bookmarkService;

    public BookmarkController(BookmarkService bookmarkService) {
        this.bookmarkService = bookmarkService;
    }

    @PostMapping("/user/{userid}")
    public ResponseEntity<BookmarkResponseDto> createBookmark(
            @RequestBody CreateBookmarkRequestDto createBookmarkRequestDto,
            @PathVariable("userid") String userId) {
        return ResponseEntity.ok(
                new BookmarkResponseDto(bookmarkService.createBookmark(
                        createBookmarkRequestDto.toEntity(), createBookmarkRequestDto.getUserId(), createBookmarkRequestDto.getLectureId()
                ))
        );
    }

    @DeleteMapping("/{bookmarkid}")
    public ResponseEntity<BookmarkResponseDto> deleteBookmark(@PathVariable("bookmarkid") Long bookmarkId) {
        bookmarkService.deleteBookmark(bookmarkId);
        return ResponseEntity.noContent()   // body에 응답 내용이 없을 경우
                .build();
    }

}
