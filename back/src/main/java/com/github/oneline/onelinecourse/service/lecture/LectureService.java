package com.github.oneline.onelinecourse.service.lecture;

import com.github.oneline.onelinecourse.model.lecture.Lecture;
import com.github.oneline.onelinecourse.repository.lecture.LectureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class LectureService {

    private final LectureRepository lectureRepository;

    @Transactional(readOnly = true)
    public List<Lecture> findAllLectures() {

        return lectureRepository.findAll();
    }
}
