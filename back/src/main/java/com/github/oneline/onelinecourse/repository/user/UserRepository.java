package com.github.oneline.onelinecourse.repository.user;

import com.github.oneline.onelinecourse.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

// Dao라고 불리는 DB Layer 접근자
@Repository
// JpaRepository<Entity 클래스, PK 타입>을 상속하면 기본적인 CRUD 메소드가 자동으로 생성
public interface UserRepository extends JpaRepository<User, String> {
    public List<User> findByUserId(String userId);
    public List<User> findByPlatform(String platform);
}
