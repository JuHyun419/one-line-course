package com.github.oneline.onelinecourse.service.user;

import com.github.oneline.onelinecourse.model.user.User;
import com.github.oneline.onelinecourse.repository.user.UserRepository;
import org.springframework.stereotype.Service;

// 트랜잭션, 도메인 기능 간의 순서를 보장하는 Service
@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 처음 로그인인지 확인
    public void signIn(User user) {
        return;
    }

    // 처음이라서 등록 필요
    public User save(User user) {
        return UserRepository.save(user);
    }

}
