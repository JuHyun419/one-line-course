package com.github.oneline.onelinecourse.controller.bookmark;

import com.github.oneline.onelinecourse.service.bookmark.BookmarkService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
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

    @PostMapping
    @ApiOperation(value = "북마크 등록")
    public ResponseEntity<ResponseBookmarkDto> createBookmark(
            @RequestBody CreateBookmarkRequestDto createBookmarkRequestDto) {
        return ResponseEntity.ok(
                new ResponseBookmarkDto(bookmarkService.createBookmark(
                        createBookmarkRequestDto.getUserId(), createBookmarkRequestDto.getLectureId()
                ))
        );
    }

    @DeleteMapping("/{bookmarkId}")
    @ApiOperation(value = "북마크 삭제")
    public ResponseEntity<Void> deleteBookmark(
            @PathVariable @ApiParam(value = "북마크 ID", example = "1") Long bookmarkId) {
        bookmarkService.deleteBookmark(bookmarkId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/users/{userId}")
    @ApiOperation(value = "유저가 등록한 모든 북마크 가져오기")
    public ResponseEntity<List<ResponseBookmarkDto>> getUserBookmark(
            @PathVariable @ApiParam(value = "유저 ID", example = "0ae24sk3234") String userId) {
        return ResponseEntity.ok(
                bookmarkService.findAllUserBookmark(userId)
                .stream()
                .map(ResponseBookmarkDto::new)
                .collect(Collectors.toList())
        );
    }
}
