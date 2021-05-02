package com.github.oneline.onelinecourse.repository.bookmark;


import com.github.oneline.onelinecourse.model.bookmark.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    List<Bookmark> findAllByUserId(String userId);
}
