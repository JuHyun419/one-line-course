package com.github.oneline.onelinecourse.dto.user;

import com.github.oneline.onelinecourse.model.user.User;
import lombok.Builder;

public class CreateUserRequestDto {
    private String id;
    private String email;
    private String name;
    private String imageUrl;
    private String platform;

    @Builder
    public CreateUserRequestDto(String id, String email, String name, String imageUrl, String platform) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.imageUrl = imageUrl;
        this.platform = platform;
    }

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
