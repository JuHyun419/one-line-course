package com.github.oneline.onelinecourse.model.comment;

import com.github.oneline.onelinecourse.model.lecture.Lecture;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import javax.persistence.*;
import java.time.LocalDateTime;

import static com.google.common.base.Preconditions.checkNotNull;
import static org.apache.commons.lang3.ObjectUtils.defaultIfNull;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "Comments")
public class Comment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String content;

    @Column
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;

    /*@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private Users users;*/

    @Builder
    public Comment(String content, Lecture lecture/*, Users users */) {
        this(null, content, null, null, lecture/*, users*/);
    }

    public Comment(Long id, String content, LocalDateTime createdAt,
                   LocalDateTime updatedAt, Lecture lecture/*, Users users*/) {
        checkNotNull(content, "content must be provided");
        checkNotNull(lecture, "lectures must be provided");
        /*checkNotNull(users, "users must be provided");*/

        this.id = id;
        this.content = content;
        this.createdAt = defaultIfNull(createdAt, LocalDateTime.now());
        this.updatedAt = defaultIfNull(updatedAt, LocalDateTime.now());
        this.lecture = lecture;
        /*this.users = users;*/
    }

    public void addLecture(Lecture lecture) {
        this.lecture = lecture;
    }

    public void updateContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.SHORT_PREFIX_STYLE)
                .append("id", id)
                .append("content", content)
                .append("lectures", lecture)
                /*.append("users", users)*/
                .toString();
    }
}
