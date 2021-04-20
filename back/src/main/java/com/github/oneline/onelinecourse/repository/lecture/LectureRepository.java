package com.github.oneline.onelinecourse.repository.lecture;

import com.github.oneline.onelinecourse.model.lecture.Lecture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LectureRepository extends JpaRepository<Lecture, Long> {

}
