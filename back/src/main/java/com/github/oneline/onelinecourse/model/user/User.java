package com.github.oneline.onelinecourse.model.user;

import com.github.oneline.onelinecourse.model.bookmark.Bookmark;
import lombok.*;
import javax.persistence.*;
import java.util.List;

@Getter
@ToString
@Entity // JPA에서 사용한 Entity class 선언, 테이블과 링크될 클래스
@Table(name = "Users")  // JPA에서 DB를 매칭할 테이블명
public class User {
    @Id // 기본키(PK)로 지정
    @NonNull
    // @GeneratedValue : PK 생성 규칙
    private String id;

    @Column(length = 50, nullable = false)  // 테이블의 컬럼을 나타내며 선언하지 않더라고 해당 클래스의 필드는 모두 컬럼이 됨
    private String email;

    @Column(length = 20, nullable = false)
    private String name;

    @Column(length = 500, nullable = false)
    private String image_url;

    @Column(length = 20, nullable = false, unique = true)
    private String platform;

    @OneToMany(mappedBy="Bookmarks", fetch = FetchType.LAZY)
    private List<Bookmark> bookmarks;

//    @OneToMany(mappedBy="Comments", fetch = FetchType.LAZY)
//    private List<Comments> comments;

    @Builder    // 모든 필드에 대해서 매개변수를 받는 기본 생성자를 생성
    public User(String id, String email, String name, String image_url, String platform) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.image_url = image_url;
        this.platform = platform;
    }
}

// Access Token과 Refresh Token을 묶어서 사용자 토큰
// 액세스 토큰은 카카오 계정으로 성공적으로 로그인 했음을 증명하는 암호문 형태의 증서입니다.
// 그래서 이 액세스 토큰을 이용해서 많은 일들을 할 수 있어 ID와 비밀번호를 넘겨주는 것과 비슷(보안상 이유로 짧은 유효 기간)

// Access Token이 만료됐으나 Refresh token이 만료되지 않은 경우, Access Token을 갱신하여 유효하게 할 수 있음