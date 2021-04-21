package com.github.oneline.onelinecourse.service.bookmark;

import com.github.oneline.onelinecourse.model.bookmark.Bookmark;
import com.github.oneline.onelinecourse.repository.bookmark.BookmarkRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookmarkService {

    private final BookmarkRepository bookmarkRepository;

    public BookmarkService(BookmarkRepository bookmarkRepository) {
        this.bookmarkRepository = bookmarkRepository;
    }

    // 북마크 등록
    public Bookmark createBookmark(String userId) {
        return null;
    }

    // 북마크 해제
    public void deleteBookmark(String userId) {

    }

}
