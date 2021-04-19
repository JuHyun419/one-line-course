package com.github.oneline.onelinecourse.controller.user;

import com.github.oneline.onelinecourse.dto.user.CreateUserRequestDto;
import com.github.oneline.onelinecourse.dto.user.ResponseUserDto;
import com.github.oneline.onelinecourse.service.user.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// API 요청을 받을 Controller
@RestController // Restuful 웹서비스의 컨트롤러, Json 형태로 객체 데이터를 반환
@RequestMapping("/users")   // 요청에 대해 어떤 Controller, 어떤 메소드가 처리할지 맵핑
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {    // DI 의존성 주입....

        this.userService = userService;
    }

    // 회원 조회
    @GetMapping("/{userid}")    // GET 요청 방식의 API
    public ResponseUserDto searchUsers(@PathVariable("userid") String id) { // URL을 처리할 때는 @PathVariable을 사용

        return searchUsers(id);
    }

    // 회원 등록(최초 방문)
    @PostMapping("")    // POST 요청 방식의 API
    // ResponseEntity
    // HTTP 요청(Request) 또는 응답(Response)에 해당하는 HttpHeader와 HttpBody를 포함하는 클래스
    public ResponseEntity<ResponseUserDto> createUsers(@RequestBody CreateUserRequestDto createUserRequestDto ) { // @RequestBody : 클라이언트가 전송하는 Http 요청의 Body내용을 Java Object로 변환시켜주는 역할

        // 응답 헤더의 상태 코드 본문을 직접 다루기 위해 사용
        return ResponseEntity.ok(   // 200 ok 상태코드 설정
                new ResponseUserDto(userService.save(createUserRequestDto.toEntity()))
        );

    }
}
