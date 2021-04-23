package com.github.oneline.onelinecourse.service.bookmark;

import com.github.oneline.onelinecourse.model.bookmark.Bookmark;
import com.github.oneline.onelinecourse.model.lecture.Lecture;
import com.github.oneline.onelinecourse.model.user.User;
import com.github.oneline.onelinecourse.repository.bookmark.BookmarkRepository;
import com.github.oneline.onelinecourse.repository.lecture.LectureRepository;
import com.github.oneline.onelinecourse.repository.user.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookmarkService {

    private final BookmarkRepository bookmarkRepository;

    private final UserRepository userRepository;

    private final LectureRepository lectureRepository;

    public BookmarkService(BookmarkRepository bookmarkRepository, UserRepository userRepository, LectureRepository lectureRepository) {
        this.bookmarkRepository = bookmarkRepository;
        this.userRepository = userRepository;
        this.lectureRepository = lectureRepository;
    }

    // 북마크 등록
    public Bookmark createBookmark(/*Bookmark bookmark ,*/ String userId, Long lectureId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("userId: " + userId + "의 유저가 존재하지 않습니다."));
        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(() -> new IllegalArgumentException("lectureId: " + lectureId + "의 강의가 존재하지 않습니다."));
        Bookmark bookmarkEntity = Bookmark.builder()
                .user(user)
                .lecture(lecture)
                .build();
        return bookmarkRepository.save(bookmarkEntity);
    }

    // 북마크 검색
    public List<Bookmark> findAllUserBookmark(String userId) {
        return bookmarkRepository.findAllUserBookmarks(userId);
    }

    // 북마크 해제
    public void deleteBookmark(Long bookmarkId) {
        bookmarkRepository.deleteById(bookmarkId);
    }

//    public void deleteBookmark(Long bookmarkId) {
//        Bookmark bookmark = bookmarkRepository.findById(bookmarkId)
//                .orElseThrow(() -> new IllegalArgumentException(bookmarkId + "번에 해당하는 북마크가 존재하지 않습니다."));
//        bookmarkRepository.delete(bookmark);
//    }

}
