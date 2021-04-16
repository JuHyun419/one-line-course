package com.github.oneline.onelinecourse.dto.user;

import com.github.oneline.onelinecourse.model.user.Users;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.beans.BeanUtils;

@Getter
@Setter
@ToString
public class ResponseUserDto {
    private String id;
    private String email;
    private String name;
    private String image_url;
    private String platform;

    @Builder
    public ResponseUserDto(String id, String email, String name, String image_url, String platform) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.image_url = image_url;
        this.platform = platform;
    }

    // Entity -> DTO ??????
    public ResponseUserDto(Users users) {
        // 객체를 쉽고 간결하게 복사
        // copyProperties(원본 객체, 복사 객체)
        BeanUtils.copyProperties(users, this);
    }

}
