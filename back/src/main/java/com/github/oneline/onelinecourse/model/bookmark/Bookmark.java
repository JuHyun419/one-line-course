package com.github.oneline.onelinecourse.model.bookmark;

import com.github.oneline.onelinecourse.model.lecture.Lecture;
import com.github.oneline.onelinecourse.model.user.User;
import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;

import static org.apache.commons.lang3.ObjectUtils.defaultIfNull;

@Getter
@NoArgsConstructor
@Entity // JPA에서 사용한 Entity class  선언
@Table(name = "Bookmarks")  // JPA에서 DB를 매칭할 테이블명
public class Bookmark {

    @Id // 기본키(PK)로 지정
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동으로 생성되도록 하기위해
    private Long id;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;

    @Builder
    public Bookmark(User user, Lecture lecture){
        this(null, null, user, lecture);    // this()는 생성자
    }

    public Bookmark(Long id, LocalDateTime createdAt, User user, Lecture lecture) {
        this.id = id;   // this는 인스턴스 자신을 가르키는 참조 변수
        this.createdAt = defaultIfNull(createdAt, LocalDateTime.now());;
        this.user = user;
        this.lecture = lecture;
    }
}