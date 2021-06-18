package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.common.error.exception.LectureNotFoundException;
import com.github.oneline.onelinecourse.common.error.exception.UserNotFoundException;
import com.github.oneline.onelinecourse.service.comment.CommentService;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Assertions.assertThatThrownBy;

@ActiveProfiles("prod")
@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CommentControllerTest {

    @Autowired
    private CommentService commentService;

    @DisplayName("존재하지 않는 강의로 댓글을 조회하면 예외를 반환한다.")
    @Test
    void non_Exist_Lecture_Throw_Exception() {
        // given
        final Long notExistsLectureId = 99999L;

        // when & then
        assertThatThrownBy(() -> commentService.findAllLectureComments(notExistsLectureId))
                .isInstanceOf(LectureNotFoundException.class)
                .hasMessageContaining("존재하지 않는 강의");
    }

    @DisplayName("존재하지 않는 유저로 댓글을 조회하면 예외를 반환한다.")
    @Test
    void non_Exist_User_Throw_Exception() {
        // given
        final String noExistsUserId = RandomStringUtils.randomAlphanumeric(100);

        // when & then
        assertThatThrownBy(() -> commentService.findAllUserComments(noExistsUserId))
                .isInstanceOf(UserNotFoundException.class)
                .hasMessageContaining("존재하지 않는 사용자");

    }

}