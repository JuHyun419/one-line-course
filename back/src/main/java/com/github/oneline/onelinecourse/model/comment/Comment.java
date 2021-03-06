package com.github.oneline.onelinecourse.model.comment;

import com.github.oneline.onelinecourse.model.lecture.Lecture;
import com.github.oneline.onelinecourse.model.user.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.Objects;

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

    @Length(max = 1000, message = "댓글은 1000자를 초과할 수 없습니다.")
    @NotBlank(message = "댓글 내용은 비어 있을 수 없습니다.")
    private String content;

    @Column
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public Comment(String content, Lecture lecture, User user) {
        this(null, content, null, null, lecture, user);
    }

    public Comment(Long id, String content, LocalDateTime createdAt,
                   LocalDateTime updatedAt, Lecture lecture, User user) {
        checkNotNull(content, "content must be provided");

        this.id = id;
        this.content = content;
        this.createdAt = defaultIfNull(createdAt, LocalDateTime.now());
        this.updatedAt = defaultIfNull(updatedAt, LocalDateTime.now());
        this.lecture = lecture;
        this.user = user;
    }

    public void updateContent(String content) {
        this.content = content;
    }

    public void updateDate() {
        this.updatedAt = LocalDateTime.now();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Comment comment = (Comment) o;
        return Objects.equals(id, comment.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.SHORT_PREFIX_STYLE)
                .append("id", id)
                .append("content", content)
                .append("lecture", lecture)
                .append("user", user)
                .toString();
    }
}
