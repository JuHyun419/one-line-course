package com.github.oneline.onelinecourse.controller.bookmark;

import com.github.oneline.onelinecourse.service.bookmark.BookmarkService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/bookmarks")
public class BookmarkController {

    private final BookmarkService bookmarkService;

    public BookmarkController(BookmarkService bookmarkService) {
        this.bookmarkService = bookmarkService;
    }

    @PostMapping("")
    public ResponseEntity<ResponseBookmarkDto> createBookmark(
            @RequestBody CreateBookmarkRequestDto createBookmarkRequestDto) {
        return ResponseEntity.ok(
                new ResponseBookmarkDto(bookmarkService.createBookmark(
                        createBookmarkRequestDto.toEntity(), createBookmarkRequestDto.getUserId(), createBookmarkRequestDto.getLectureId()
                ))
        );
    }

    @DeleteMapping("/{bookmarkId}")
    public ResponseEntity<ResponseBookmarkDto> deleteBookmark(@PathVariable("bookmarkId") Long bookmarkId) {
        bookmarkService.deleteBookmark(bookmarkId);
        return ResponseEntity.noContent()   // body에 응답 내용이 없을 경우
                .build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<ResponseBookmarkDto>> getUserBookmark(@PathVariable("userId") String userId) {
        return ResponseEntity.ok(
                bookmarkService.findAllUserBookmark(userId)
                .stream()
                .map(ResponseBookmarkDto::new)
                .collect(Collectors.toList())
        );
    }
}
