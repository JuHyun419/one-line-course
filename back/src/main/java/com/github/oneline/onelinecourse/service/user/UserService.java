package com.github.oneline.onelinecourse.service.user;

import com.github.oneline.onelinecourse.model.user.Users;
import com.github.oneline.onelinecourse.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // 처음 로그인인지 확인
    public void signIn(Users users) {

    }

    // 처음이라서 등록 필요
    public void signUp(Users users) {

    }

}
