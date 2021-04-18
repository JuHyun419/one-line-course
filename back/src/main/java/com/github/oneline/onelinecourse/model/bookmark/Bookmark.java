package com.github.oneline.onelinecourse.model.bookmark;

import lombok.*;
import javax.persistence.*;

@Getter
@ToString
@Entity // JPA에서 사용한 Entity class  선언
@Table(name = "Bookmarks")  // JPA에서 DB를 매칭할 테이블명
public class Bookmark {
    @Id // 기본키(PK)로 지정
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동으로 생성되도록 하기위해
    private Long id;

    @Column(length = 50, nullable = false)
    private Long user_id;

    @Column(length = 20, nullable = false)
    private Long lecture_id;

    @Column(length = 500, nullable = false)
    private String created_at;
}
