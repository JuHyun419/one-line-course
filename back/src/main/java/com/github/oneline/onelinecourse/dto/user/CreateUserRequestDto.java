package com.github.oneline.onelinecourse.dto.user;

import com.github.oneline.onelinecourse.model.user.Users;
import lombok.Builder;

public class CreateUserRequestDto {
    private String id;
    private String email;
    private String name;
    private String image_url;
    private String platform;

    @Builder
    public CreateUserRequestDto(String id, String email, String name, String image_url, String platform) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.image_url = image_url;
        this.platform = platform;
    }

    // DTO -> Entity 변환
    public Users toEntity() {
        return Users.builder()
                .id(id)
                .email(email)
                .name(name)
                .image_url(image_url)
                .platform(platform)
                .build();
    }

}
