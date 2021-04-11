package com.github.oneline.onelinecourse.model.lecture;

import com.github.oneline.onelinecourse.model.comment.Comments;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import javax.persistence.*;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Lectures {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column @Lob
    private String imageUrl;

    @Column
    private String title;

    @Column
    private int price;

    @Column
    private int salePrice;

    @Column
    private float rating;

    @Column
    private String instructor;

    @Column
    private String url;

    @Column
    private int viewCount;

    @Column
    private String platform;

    @Column
    private int sessionCount;

    @Column
    private String currency;

    @Column @Lob
    private String description;

    @Column
    private String skills;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "lecture")
    private List<Comments> comments;

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
