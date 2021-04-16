package com.github.oneline.onelinecourse.repository.user;

import com.github.oneline.onelinecourse.model.user.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// Dao라고 불리는 DB Layer 접근자

// JpaRepository<Entity 클래스, PK 타입>을 상속하면 기본적인 CRUD 메소드가 자동으로 생성
public interface UserRepository extends JpaRepository<Users, String> {

    // email을 통해 최초 로그인인지 검토
   Optional<Users> findByEmail(String email);
}
