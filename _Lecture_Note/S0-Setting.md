### vite + react + typescript 세팅

npm init vite@latest front -- --template react-ts
cd front
npm i

## 1강

### 백엔드 세팅

샘플 코드에서 'back' 폴더 복붙
cd back
npm i
'.env' 파일 생성 후 작성
npx sequelize db:create (테이블 생성)
"npm run dev" 입력 후 db 연결 성공 확인 -> ctrl + c
npx sequelize db:seed:all (슬랙에 쓸 워크스페이스, 채널 기본적으로 만들어주기(빈 테이블에 가짜 데이터 넣는 과정))
"npm run dev" 입력 후 db 연결 성공 확인 -> ctrl + c

### DB 저장 구조

- MySql 구조
  데이터베이스 > 테이블 > 로우
- 슬랙 서비스
  워크스페이스 > 채널

### localhost:3095

미리 만들어둔 서버

## 3강

### eslint, prettier 세팅

npm i -D prettier eslint-plugin-prettier eslint-config-prettier

".prettierrc" 파일 생성

```json

```

".eslintrc" 파일 생성

```json

```

### 추가 설정

https://wonillism.tistory.com/271 참고

```
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

npm i -D vite-tsconfig-paths

npm i -D eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
```

## 6강

### 폴더 구조

pages: 서비스 페이지
components: 작은 컴포넌트
layouts: 공통 레이아웃

hooks:
utils:
typings:

vite.config.ts에서 path, \_\_dirname 오류 해결

```
npm i --save-dev @types/node
```
