package com.github.oneline.onelinecourse.model.comment;

import com.github.oneline.onelinecourse.model.lecture.Lectures;
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
@Builder
@Entity
public class Comments {
    
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
    @JoinColumn(name = "lectures_id")
    private Lectures lectures;

    /*@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private Users users;*/

    public Comments(String content, Lectures lectures/*, Users users */) {
        this(null, content, null, null, lectures/*, users*/);
    }

    @Builder
    public Comments(Long id, String content, LocalDateTime createdAt,
                    LocalDateTime updatedAt, Lectures lectures/*, Users users*/) {
        checkNotNull(content, "content must be provided");
        checkNotNull(lectures, "lectures must be provided");
        /*checkNotNull(users, "users must be provided");*/

        this.id = id;
        this.content = content;
        this.createdAt = defaultIfNull(createdAt, LocalDateTime.now());
        this.updatedAt = defaultIfNull(updatedAt, LocalDateTime.now());
        this.lectures = lectures;
        /*this.users = users;*/
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.SHORT_PREFIX_STYLE)
                .append("id", id)
                .append("content", content)
                .append("lectures", lectures)
                /*.append("users", users)*/
                .toString();
    }
}
