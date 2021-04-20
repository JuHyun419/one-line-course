package com.github.oneline.onelinecourse.controller.lecture;

import com.github.oneline.onelinecourse.service.lecture.LectureService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class LectureController {

    private final LectureService lectureService;

    public LectureController(LectureService lectureService) {
        this.lectureService = lectureService;
    }

    @GetMapping("/lectures")
    public ResponseEntity<List<LectureResponse>> getLectures() {
        return ResponseEntity.ok(
                lectureService.findAllLectures()
                        .stream()
                        .map(LectureResponse::new)
                        .collect(Collectors.toList())
        );
    }
}
