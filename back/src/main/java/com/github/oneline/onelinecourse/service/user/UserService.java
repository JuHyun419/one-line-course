package com.github.oneline.onelinecourse.service.user;

import com.github.oneline.onelinecourse.model.user.User;
import com.github.oneline.onelinecourse.repository.user.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// 트랜잭션, 도메인 기능 간의 순서를 보장하는 Service
@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 처음 로그인인지 확인
    @Transactional(readOnly = true)
    public User searchUser(String userId) {
        return userRepository.findById(userId)
                .orElse(null);
    }

    // 처음이라서 등록 필요
    @Transactional
    public User createUser(User user) {
        return userRepository.save(user);
    }
}
