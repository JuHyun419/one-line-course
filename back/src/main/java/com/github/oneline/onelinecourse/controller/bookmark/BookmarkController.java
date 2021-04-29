package com.github.oneline.onelinecourse.controller.bookmark;

import com.github.oneline.onelinecourse.service.bookmark.BookmarkService;
import org.springframework.http.HttpStatus;
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

    // 북마크 등록
    @PostMapping
    public ResponseEntity<ResponseBookmarkDto> createBookmark(
            @RequestBody CreateBookmarkRequestDto createBookmarkRequestDto) {
        return ResponseEntity.ok(
                new ResponseBookmarkDto(bookmarkService.createBookmark(
                        createBookmarkRequestDto.getUserId(), createBookmarkRequestDto.getLectureId()
                ))
        );
    }

    // 북마크 해제
    @DeleteMapping("/{bookmarkId}")
    public ResponseEntity<Void> deleteBookmark(@PathVariable("bookmarkId") Long bookmarkId) {
        bookmarkService.deleteBookmark(bookmarkId);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    // 유저가 등록한 모든 북마크 가져오기
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
