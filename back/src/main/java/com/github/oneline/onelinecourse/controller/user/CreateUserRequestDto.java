package com.github.oneline.onelinecourse.controller.user;

import com.github.oneline.onelinecourse.model.user.User;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateUserRequestDto {
    @ApiModelProperty(value = "유저 ID", required = true)
    private String id;

    @ApiModelProperty(value = "유저 email", required = true)
    private String email;

    @ApiModelProperty(value = "유저 name", required = true)
    private String name;

    @ApiModelProperty(value = "유저의 이미지 url", required = true)
    private String imageUrl;

    @ApiModelProperty(value = "로그인한 플랫폼", required = true)
    private String platform;

    // DTO -> Entity 변환
    public User toEntity() {
        return User.builder()
                .id(id)
                .email(email)
                .name(name)
                .imageUrl(imageUrl)
                .platform(platform)
                .build();
    }

}
