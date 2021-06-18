package com.github.oneline.onelinecourse.service.comment;

import com.github.oneline.onelinecourse.controller.comment.CommentCreateRequest;
import com.github.oneline.onelinecourse.model.comment.Comment;
import com.github.oneline.onelinecourse.model.lecture.Lecture;
import com.github.oneline.onelinecourse.model.user.User;
import com.github.oneline.onelinecourse.repository.comment.CommentRepository;
import com.github.oneline.onelinecourse.repository.lecture.LectureRepository;
import com.github.oneline.onelinecourse.repository.user.UserRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.ConstraintViolationException;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@ActiveProfiles("prod")
@Transactional
@SpringBootTest
class CommentServiceTest {

    @Autowired
    private CommentService commentService;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LectureRepository lectureRepository;

    private User testUser;

    private Lecture testLecture;

    private final String randomUserId = RandomStringUtils.randomAlphanumeric(30);

    @BeforeEach
    void setup() {
        testUser = User.builder()
                .id(randomUserId)
                .email("a@a.com")
                .name("jh")
                .imageUrl("https://example.com/image1.jpg")
                .platform("Google")
                .build();

        testLecture = Lecture.builder()
                .imageUrl("https://example.com/asdsadf")
                .title("스프링 강의")
                .price(50000)
                .salePrice(30000)
                .rating(4.5f)
                .instructor("강의자")
                .url("https://inflearn.com/it")
                .viewCount(500)
                .platform("Inflearn")
                .sessionCount(42)
                .currency("W")
                .description("이 강의는 스프링 강의입니다.")
                .skills("Java,Spring,Back End")
                .build();

        userRepository.save(testUser);
        lectureRepository.save(testLecture);
    }


    @DisplayName("강의 댓글을 작성한다.")
    @Test
    void createComment() {
        // given
        final CommentCreateRequest request = CommentCreateRequest.builder()
                .content("댓글댓글")
                .lectureId(testLecture.getId())
                .userId(testUser.getId())
                .build();

        // when
        commentService.createComment(request.toEntity(), request.getUserId(), request.getLectureId());
        final Comment newComment =
                commentRepository.findByUserIdAndLectureId(request.getUserId(), request.getLectureId())
                .orElseGet(Comment::new);

        // then
        assertThat(newComment.getLecture()).isEqualTo(testLecture);
        assertThat(newComment.getUser().getId()).isEqualTo(randomUserId);
        assertThat(newComment.getContent()).isEqualTo(request.getContent());
    }

    @DisplayName("[예외] 댓글 내용은 1000자를 넘어서는 안된다.")
    @Test
    void commentIsTooLong() {
        // given
        final String tooLongComment = RandomStringUtils.randomAlphanumeric(1010);

        // when
        final CommentCreateRequest request = CommentCreateRequest.builder()
                .content(tooLongComment)
                .lectureId(testLecture.getId())
                .userId(testUser.getId())
                .build();

        // then
        assertThatThrownBy(() -> commentService.createComment(request.toEntity(), request.getUserId(), request.getLectureId()))
                .isInstanceOf(ConstraintViolationException.class)
                .hasMessageContaining("1000자");
    }

    @DisplayName("강의 댓글을 수정한다.")
    @Test
    void updateComment() {
        // given
        final Comment comment = Comment.builder()
                .content("comment")
                .build();

        // when
        final String update = "comment update";
        comment.updateContent(update);

        // then
        assertThat(comment.getContent()).isEqualTo(update);
    }

    @DisplayName("강의 댓글을 삭제한다.")
    @Test
    void deleteComment() {
        // given
        final Comment comment = new Comment("댓글", testLecture, testUser);
        commentRepository.save(comment);
        final Long newCommentId = comment.getId();

        // when
        commentService.deleteComment(newCommentId);
        final Comment newComment = commentRepository.findById(newCommentId).orElse(null);

        // then
        assertThat(newComment).isNull();
    }

}