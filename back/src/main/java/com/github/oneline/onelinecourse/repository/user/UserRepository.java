package com.github.oneline.onelinecourse.repository.user;

import com.github.oneline.onelinecourse.model.user.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users, String> {

    // email을 통해 최초 로그인인지 검토토
   Optional<Users> findByEmail(String email);
}
