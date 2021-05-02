package com.github.oneline.onelinecourse.controller.comment;

import com.github.oneline.onelinecourse.repository.comment.CommentRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CommentControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private CommentRepository commentRepository;

    @DisplayName("조회 데이터가 없는 강의 댓글을 조회한다.")
    @Test
    void getNoDataLectureComment() {
        // given
        final int notExistsLectureId = 99999;
        final String url = "http://localhost:" + port + "/comments/lectures/" + notExistsLectureId;

        // when
        ResponseEntity<List> responseEntity = testRestTemplate.getForEntity(url, List.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);
        assertThat(responseEntity.getBody()).isNull();
    }

    @DisplayName("조회 데이터가 없는 유저 댓글을 조회한다.")
    @Test
    void getNoDataUserComment() {
        // given
        final String noExistsUserId = RandomStringUtils.randomAlphanumeric(100);
        final String url = "http://localhost:" + port + "/comments/users/" + noExistsUserId;

        // when
        ResponseEntity<List> responseEntity = testRestTemplate.getForEntity(url, List.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);
        assertThat(responseEntity.getBody()).isNull();
    }

}