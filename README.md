## 👨‍👨‍👧 원라인코스(One-Line Course)
  - 본인에게 적합한 개발 관련 온라인 강의를 통합해 검색할 수 있는 개인형 강의 추천 사이트

<br>

## 🤷‍♂️ 사용자
  - 인프런, 유튜브, 유데미 등의 온라인 강의 플랫폼에서 강의를 검색하고자 하는 유저
  - 비슷한 강의들을 검색 & 비교하여 본인에게 적합한 강의를 선택하고자 하는 유저

<br>

## 📆 기간
  - 2021.04 ~ 2021.04

<br>

## 📗 기술 스택
  - Front End - [`이윤상`](https://github.com/olcw78)
    - Typescript, React, SCSS
    
  - Back End - [`방소연`](https://github.com/bsy3764), [`이주현`](https://github.com/JuHyun419)
    - Java, Python(크롤링), SpringBoot, Spring Data JPA, Maven, AWS, MySQL

<br>

## ✏ 기획 & 설계
  - [`프로젝트 칸반(Kanban)`](https://github.com/JuHyun419/one-line-course/projects/1)

  - [`기능 명세서`](https://www.notion.so/16d5feb864d5481285a5ff3c2ae9c2c6)

  - [`UI 페이지 기획`](https://whimsical.com/EJVQx82R8nCTGsRbzWGyH8)

![image](https://user-images.githubusercontent.com/50076031/113499953-26c2ee00-9555-11eb-8556-05d918647848.png)

<br><br>

  - [`DB 설계`](https://www.notion.so/DB-1f0520006f2a4ca582e0cef0a34623ae)

![image](https://user-images.githubusercontent.com/50076031/114146978-2e1e3900-9953-11eb-94b8-94124732f00c.png)

<br>

  - [`DB 스키마`](https://github.com/JuHyun419/one-line-course/issues/8)

<br>

  - [`RESTful API 설계`](https://www.notion.so/API-5f3c607a8217420495aa60182f90a2c5)

<br>

  - [`Swagger API 문서`](http://15.165.229.191:8080/swagger-ui.html)

<br>

## 🐱‍💻 백엔드 역할 분담
  - 주현
    - [ ] 강의(Lecture)
    - [ ] 댓글(Comment)
    - [ ] 인프라(AWS) 설정
  - 소연
    - [ ] 북마크(Bookmark)
    - [ ] 유저(User)

<br>

## ✨ 프로젝트 실행 방법
### 데이터베이스 및 스키마 설정
  - 먼저 application.properties 파일에 본인의 DB의 설정을 입력해야 합니다.
    - url, username, password 를 설정합니다.
  - 스키마 설정은 로컬에 직접 설정 및 프로젝트 실행 시 자동으로 설정하는 두 가지 방법이 있습니다. (사진 참고)
    - src/main/resources 경로의 schema.sql 파일에 작성된 스키마를 직접 복사해서 로컬 DB에서 생성합니다.
    - application.properties 파일의 schema 주석 부분을 해제한 후 애플리케이션을 실행하면 스키마 설정이 됩니다.
<br>
  - application.properties, schema.sql 파일

![image](https://user-images.githubusercontent.com/50076031/115238733-f97f5e00-a158-11eb-9aac-9ebde3bbf699.png)

<br>

  - application.properties schema 주석 부분

![image](https://user-images.githubusercontent.com/50076031/115238802-1156e200-a159-11eb-9ef8-c8b57b43240f.png)

<br>

### 프로젝트 실행하기
  - 현재 API 서버인 스프링 부트 프로젝트 실행만 가능합니다.
  - back 폴더의 프로젝트를 받으셔서 실행하시면 됩니다.
<br>


## 🎵 [Git 커밋 메시지 규칙](https://github.com/JuHyun419/one-line-course/wiki/Git-%EC%BB%A4%EB%B0%8B-%EB%A9%94%EC%8B%9C%EC%A7%80-%EA%B7%9C%EC%B9%99)

<br>

## 💡 Issues
  - [`서로 다른 OS(Mac, Window)에서 함께 Git 작업할 시 발생하는 LF, CRLF 문제`](https://github.com/JuHyun419/one-line-course/issues/38)
  - [`MySQL 😢이모지(utf8mb4) 스키마 설정`](https://github.com/JuHyun419/one-line-course/issues/8)
  - [`Parcel 번들러 에서 ENV 파일 사용`](https://github.com/JuHyun419/one-line-course/issues/50)
  - [`MySQL referencing column and referenced column are incompatible`](https://github.com/JuHyun419/one-line-course/issues/8)
  - [`MySQL 8.0 대소문자 구분 문제(MySQL 5 버전으로 변경)`](https://zzang9ha.tistory.com/328)
  - [`Java의 LocalDateTime과 MySQL의 datetime 사이의 시차 문제(9시간)`](https://github.com/JuHyun419/one-line-course/issues/62)

<br>

## 📜 보완해야 할 부분(성능, 추가 기능, 코드 등등)
  - 검색 조건에 강의자(instructor) 추가
  - 환경 변수(application.properties) 관리(외부 노출 X)
  - 테스트 코드(통합 테스트, 단위 테스트) 추가
  - Exception Handling

<br><br>

### 🖥 References

#### RESTful API
  - https://sas-study.tistory.com/265
  - https://m.blog.naver.com/genycho/221309436556

<br>

#### Git
  - https://medium.com/hashbox/git-commit-%EB%A9%94%EC%84%B8%EC%A7%80-%EA%B7%9C%EC%B9%99-conventional-commits-71710f7f53c
  - https://meetup.toast.com/posts/106
  - https://javakong.tistory.com/217

<br>

#### AWS
  - https://aws.amazon.com/ko/getting-started/hands-on/create-mysql-db/
  - https://leveloper.tistory.com/18
  - https://twofootdog.tistory.com/41
  - https://miniminis.github.io/2019/10/13/spring/springboot-deploy/
