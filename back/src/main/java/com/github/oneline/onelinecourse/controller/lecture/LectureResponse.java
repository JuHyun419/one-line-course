package com.github.oneline.onelinecourse.controller.lecture;

import com.github.oneline.onelinecourse.model.lecture.Lecture;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.beans.BeanUtils;

@Getter
@Setter
@ToString
public class LectureResponse {

    private Long id;
    private String imageUrl;
    private String title;
    private int price;
    private int salePrice;
    private float rating;
    private String instructor;
    private String url;
    private int viewCount;
    private String platform;
    private int sessionCount;
    private String currency;
    private String description;
    private String skills;

    public LectureResponse(Lecture source) {
        BeanUtils.copyProperties(source, this);
    }

}
