package com.github.oneline.onelinecourse.repository.comment;

import com.github.oneline.onelinecourse.model.comment.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comments, Long> {

    Optional<Comments> findByIdAndUserId(Long commentId/*, Long userId*/);
}
