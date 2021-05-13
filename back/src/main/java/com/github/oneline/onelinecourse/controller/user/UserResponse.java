package com.github.oneline.onelinecourse.controller.user;

import com.github.oneline.onelinecourse.model.user.User;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.springframework.beans.BeanUtils;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    @ApiModelProperty(value = "PK", required = true)
    private String id;

    @ApiModelProperty(value = "유저 email", required = true)
    private String email;

    @ApiModelProperty(value = "유저 name", required = true)
    private String name;

    @ApiModelProperty(value = "유저의 이미지 url", required = true)
    private String imageUrl;

    @ApiModelProperty(value = "로그인한 플랫폼", required = true)
    private String platform;

    // Entity -> DTO ??????
    public UserResponse(User user) {
        // 객체를 쉽고 간결하게 복사
        // copyProperties(원본 객체, 복사 객체)
        BeanUtils.copyProperties(user, this);
    }

}
