package com.github.oneline.onelinecourse.model.user;

import com.github.oneline.onelinecourse.model.bookmark.Bookmark;
import com.github.oneline.onelinecourse.model.comment.Comment;
import lombok.*;
import javax.persistence.*;
import java.util.List;

@Getter
@NoArgsConstructor
@ToString(exclude = {"bookmarks", "comments"})
@Entity // JPA에서 사용한 Entity class 선언, 테이블과 링크될 클래스
@Table(name = "Users")  // JPA에서 DB를 매칭할 테이블명
public class User {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "email", length = 50, nullable = false)
    private String email;

    @Column(name = "name", length = 20, nullable = false)
    private String name;

    @Column(name = "image_url", length = 500, nullable = false)
    private String imageUrl;

    @Column(name = "platform", length = 20, nullable = false, unique = true)
    private String platform;

    @OneToMany(fetch = FetchType.LAZY, mappedBy="user")
    private List<Bookmark> bookmarks;

    @OneToMany(fetch = FetchType.LAZY, mappedBy="user")
    private List<Comment> comments;

    @Builder    // 모든 필드에 대해서 매개변수를 받는 기본 생성자를 생성
    public User(final String id, final String email, final String name, final String imageUrl, final String platform) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.imageUrl = imageUrl;
        this.platform = platform;
    }

    public User update(final String name, final String imageUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
        return this;
    }
}