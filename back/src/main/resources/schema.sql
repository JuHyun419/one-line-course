CREATE TABLE Lectures (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image_url       VARCHAR(500)    NOT NULL,
    title           VARCHAR(100)    NOT NULL,
    price           INT             NOT NULL,
    sale_price      INT             NOT NULL,
    rating          FLOAT           NOT NULL DEFAULT 0,
    instructor      VARCHAR(100)    NOT NULL,
    url             VARCHAR(500)    NOT NULL,
    view_count      INT             NOT NULL,
    platform        VARCHAR(20)     NOT NULL,
    session_count   INT             NOT NULL,
    currency        VARCHAR(10)     NOT NULL,
    description     VARCHAR(2000),
    skills          VARCHAR(100)    NOT NULL
)default character set utf8mb4 collate utf8mb4_general_ci;


CREATE TABLE Bookmarks (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id    VARCHAR(200)  NOT NULL,
    lecture_id BIGINT        NOT NULL,
    created_at datetime      NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    FOREIGN KEY (user_id) REFERENCES Users (id),
    FOREIGN KEY (lecture_id) REFERENCES Lectures (id)
)default character set utf8mb4 collate utf8mb4_general_ci;


CREATE TABLE Users (
    id          VARCHAR(200)   NOT NULL,
    email       VARCHAR(50)    NOT NULL,
    name        VARCHAR(20)    NOT NULL,
    image_url   VARCHAR(500),
    platform    VARCHAR(20)    NOT NULL,
    PRIMARY KEY (id)
)default character set utf8mb4 collate utf8mb4_general_ci;


CREATE TABLE Comments (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id    VARCHAR(200)  NOT NULL,
    lecture_id BIGINT        NOT NULL,
    created_at datetime      NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated_at datetime,
    FOREIGN KEY (user_id) REFERENCES Users (id),
    FOREIGN KEY (lecture_id) REFERENCES Lectures (id)
)default character set utf8mb4 collate utf8mb4_general_ci;