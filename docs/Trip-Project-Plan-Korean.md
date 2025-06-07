# Trip Diary - 프로젝트 기획서

## 1. 프로젝트 개요

- 프로젝트명: Trip Diary
- 개발 목표
    - React 체화 및 프론트엔드 역량 강화
    - ExpressJS, MongoDB 등을 통한 백엔드 개발 이해 및 경험 축적
    - 여행의 전반적인 정보를 기록할 수 있는 웹 애플리케이션 개발

## 2. 목표 기능

- 회원가입 및 로그인 기능 (JWT 인증)
- 로그인 상태에 따른 접근 제어
- 여행 기록 생성 / 열람 / 수정 / 삭제 기능
- 여행 기록 리스트 페이지 구현
- 개별 여행 상세 페이지 구현

## 3. 기술 스택

- React
- JavaScript
- TailwindCSS
- MongoDB
- ExpressJS
- JWT
- Redux
- Axios

## 4. 유저 시나리오

### 비로그인 사용자

- 회원가입/로그인 페이지만 접근 가능

### 로그인 사용자

- 모든 서비스(여행 기록 페이지, 여행 기록 리스트, 회원가입/로그인, 회원정보 페이지) 접근 가능

## 5. URL 설계

- **/** - 로그인 화면 표시
- **/signUp** - 회원가입 화면 표시
- **/list** - 여행 페이지 리스트 표시
- **/trip/new** - 여행 페이지 생성 화면 표시
- **/trip/:id** - 개별 여행 페이지 표시

## 6. 개발 계획

1. 환경 세팅, 폴더 구조 정리
2. 회원가입/로그인 기능 구현
3. 여행 기록 CRUD 개발
4. Redux 적용
5. UI 구성
6. 최종 점검

## 7. MongoDB Schema 데이터 구조 설계

```javascript

// User Schema
{
    _id: ObjectId,
    email: String,
    password: String,
    createdAt: Date,
}

// Trip Schema
{
    userId: ObjectId,
    pageId: String
    title: String,
	location: String,
	startDate: Date,
	endDate: Date,
    content: String,
    createdAt: Date,
    updatedAt: Date,
}

```

## 8. 여담

이번 프로젝트는 첫 번째 풀스택 도전인 만큼, 여러 시행착오와 어려움이 따를 것으로 예상된다. TypeScript 대신 JavaScript를 선택한 이유는, 익숙한 언어를 통해 조금이라도 수월하게 접근하고자 했기 때문이다. 백엔드 개발 자체가 처음인 만큼 프론트엔드에서도 Redux와 Axios 등 다양한 기술을 적극적으로 활용해보며 경험을 쌓을 생각이다.