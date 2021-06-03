package com.github.oneline.onelinecourse.controller.user;

import com.github.oneline.onelinecourse.model.user.User;
import com.github.oneline.onelinecourse.service.user.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// API 요청을 받을 Controller
@RestController // Restuful 웹서비스의 컨트롤러, Json 형태로 객체 데이터를 반환
@RequestMapping("/users")   // 요청에 대해 어떤 Controller, 어떤 메소드가 처리할지 맵핑
public class UserController {

    private final UserService userService;

    public UserController(final UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{userId}")
    @ApiOperation(value = "유저 조회")
    public ResponseEntity<UserResponse> searchUser(
            @PathVariable @ApiParam(value = "유저 ID", example = "1df43fh1246") final String userId) {
        return ResponseEntity.ok(
                new UserResponse(userService.searchUser(userId))
        );
    }

    @PostMapping
    @ApiOperation(value = "최초 로그인 여부 확인 및 유저 등록")
    // HTTP 요청(Request) 또는 응답(Response)에 해당하는 HttpHeader와 HttpBody를 포함하는 클래스
    public ResponseEntity<UserResponse> createUser(
            @RequestBody final UserCreateRequest createUserRequestDto) { // @RequestBody : 클라이언트가 전송하는 Http 요청의 Body내용을 Java Object로 변환시켜주는 역할

        // 회원이 등록되어 있는지 체크
        final User user = userService.searchUser(createUserRequestDto.toEntity().getId());
        if(user != null) {  // 등록되어 있다면
            return ResponseEntity.ok(
                    new UserResponse(userService.searchUser(createUserRequestDto.toEntity().getId()))
            );
        }
        // 등록되어 있지 않다면(db에 저장)
        // 응답 헤더의 상태 코드 본문을 직접 다루기 위해 사용
        return ResponseEntity.ok(   // 200 ok 상태코드
                new UserResponse(userService.createUser(createUserRequestDto.toEntity()))
        );

    }
}
