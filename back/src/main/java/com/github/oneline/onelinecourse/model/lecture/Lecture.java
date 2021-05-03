package com.github.oneline.onelinecourse.model.lecture;

import com.github.oneline.onelinecourse.model.comment.Comment;
import lombok.*;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import javax.persistence.*;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Entity
@Table(name = "Lectures")
public class Lecture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column @Lob
    private String imageUrl;

    @Column(length = 200)
    private String title;

    @Column
    private int price;

    @Column
    private int salePrice;

    @Column
    private float rating;

    @Column(length = 100)
    private String instructor;

    @Column(length = 500)
    private String url;

    @Column
    private int viewCount;

    @Column(length = 20)
    private String platform;

    @Column
    private int sessionCount;

    @Column(length = 20)
    private String currency;

    @Column @Lob
    private String description;

    @Column(length = 100)
    private String skills;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "lecture")
    private List<Comment> comments;

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.SHORT_PREFIX_STYLE)
                .append("id", id)
                .append("imageUrl", imageUrl)
                .append("title", title)
                .append("price", price)
                .append("salePrice", salePrice)
                .append("rating", rating)
                .append("instructor", instructor)
                .append("url", url)
                .append("viewCount", viewCount)
                .append("platform", platform)
                .append("sessionCount", sessionCount)
                .append("currency", currency)
                .append("description", description)
                .append("skills", skills)
                .toString();
    }
}
