package com.github.oneline.onelinecourse.controller.lecture;

import com.github.oneline.onelinecourse.service.lecture.LectureService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
public class LectureController {

    private final LectureService lectureService;

    @GetMapping("/lectures")
    @ApiOperation(value = "강의 전체 조회")
    public ResponseEntity<List<LectureResponse>> getLectures() {
        List<LectureResponse> response = lectureService.findAllLectures()
                .stream()
                .map(LectureResponse::new)
                .collect(Collectors.toList());

        HttpStatus statusCode = response.isEmpty()
                ? HttpStatus.NO_CONTENT
                : HttpStatus.OK;

        return new ResponseEntity<>(response, statusCode);
    }
}
