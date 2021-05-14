package com.github.oneline.onelinecourse.controller.lecture;

import com.github.oneline.onelinecourse.model.lecture.Lecture;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.springframework.beans.BeanUtils;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LectureResponse {

    @ApiModelProperty(value = "PK", required = true)
    private Long id;

    @ApiModelProperty(value = "썸네일 링크", required = true)
    private String imageUrl;

    @ApiModelProperty(value = "강의 제목", required = true)
    private String title;

    @ApiModelProperty(value = "강의 원가", required = true)
    private int price;

    @ApiModelProperty(value = "강의 할인가", required = true)
    private int salePrice;

    @ApiModelProperty(value = "강의 평점", required = true)
    private float rating;

    @ApiModelProperty(value = "강의자", required = true)
    private String instructor;

    @ApiModelProperty(value = "강의 링크", required = true)
    private String url;

    @ApiModelProperty(value = "수강자 수", required = true)
    private int viewCount;

    @ApiModelProperty(value = "강의 플랫폼", required = true)
    private String platform;

    @ApiModelProperty(value = "강의 세션 갯수", required = true)
    private int sessionCount;

    @ApiModelProperty(value = "원화", required = true)
    private String currency;

    @ApiModelProperty(value = "강의 부가 설명")
    private String description;

    @ApiModelProperty(value = "강의 언어 & 기술 스택", required = true)
    private String skills;

    public LectureResponse(Lecture source) {
        BeanUtils.copyProperties(source, this);
    }

}
