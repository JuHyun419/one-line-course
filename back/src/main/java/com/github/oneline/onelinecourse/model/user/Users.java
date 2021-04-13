package com.github.oneline.onelinecourse.model.user;

import lombok.*;
import javax.persistence.*;

@Data   // get, set, toString 포함
@Entity // JPA에서 사용한 Entity class  선언
@Table(name = "Users")  // JPA에서 DB를 매칭할 테이블명
public class Users {
    @Id // 기본키(PK)로 지정
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동으로 생성되도록 하기위해
    private Long id;

    @Column(length = 50, nullable = false)
    private String token;

    @Column(length = 50, nullable = false)
    private String email;

    @Column(length = 20, nullable = false)
    private String name;

    @Column(length = 500, nullable = false)
    private String image_url;

    @Column(length = 20, nullable = false, unique = true)
    private String platform;

    @Builder    // 인자가 많을 경우 쉽고 안전하게 객체를 생성
    public Users(String email, String name, String image_url, String platform) {
        this.name = name;
        this.email = email;
        this.image_url = image_url;
        this.platform = platform;
    }
}
