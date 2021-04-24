package com.github.oneline.onelinecourse.repository.comment;

import com.github.oneline.onelinecourse.model.comment.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    Optional<Comment> findByUserIdAndLectureId(String userId, Long lectureId);

    List<Comment> findAllByLectureIdOrderByCreatedAtDesc(Long lectureId);

    List<Comment> findAllByUserIdOrderByCreatedAtDesc(String userId);

}
