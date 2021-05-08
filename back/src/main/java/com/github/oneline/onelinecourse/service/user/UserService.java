package com.github.oneline.onelinecourse.service.user;

import com.github.oneline.onelinecourse.model.user.User;
import com.github.oneline.onelinecourse.repository.user.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional(readOnly = true)
    public User searchUser(String userId) {
        return userRepository.findById(userId)
                .orElse(null);
    }

    @Transactional
    public User createUser(User user) {
        return userRepository.save(user);
    }
}
