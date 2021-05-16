package com.github.oneline.onelinecourse.service.bookmark;

import com.github.oneline.onelinecourse.common.error.exception.BookmarkNotFoundException;
import com.github.oneline.onelinecourse.common.error.exception.LectureNotFoundException;
import com.github.oneline.onelinecourse.common.error.exception.UserNotFoundException;
import com.github.oneline.onelinecourse.model.bookmark.Bookmark;
import com.github.oneline.onelinecourse.model.lecture.Lecture;
import com.github.oneline.onelinecourse.model.user.User;
import com.github.oneline.onelinecourse.repository.bookmark.BookmarkRepository;
import com.github.oneline.onelinecourse.repository.lecture.LectureRepository;
import com.github.oneline.onelinecourse.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.google.common.base.Preconditions.checkNotNull;

@Service
@RequiredArgsConstructor
public class BookmarkService {

    private final BookmarkRepository bookmarkRepository;

    private final UserRepository userRepository;

    private final LectureRepository lectureRepository;

    @Transactional
    public Bookmark createBookmark(String userId, Long lectureId) {
        checkNotNull(userId, "userId must be provided");
        checkNotNull(lectureId, "lectureId must be provided");

        User user = userRepository.findById(userId)
                .orElseThrow(UserNotFoundException::new);
        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(LectureNotFoundException::new);

        Bookmark newBookmark = Bookmark.builder()
                .user(user)
                .lecture(lecture)
                .build();
        return bookmarkRepository.save(newBookmark);
    }

    // 사용자가 등록한 북마크 검색
    @Transactional(readOnly = true)
    public List<Bookmark> findAllUserBookmark(final String userId) {
        checkNotNull(userId, "userId must be provided");
        return bookmarkRepository.findAllByUserId(userId);
    }

    // 북마크 해제
    @Transactional
    public void deleteBookmark(Long bookmarkId) {
        checkNotNull(bookmarkId, "bookmarkId must be provided");

        Bookmark bookmark = bookmarkRepository.findById(bookmarkId)
                .orElseThrow(BookmarkNotFoundException::new);

        bookmarkRepository.delete(bookmark);
    }

    @Transactional
    public void deleteAll() {
        bookmarkRepository.deleteAll();
    }
}
