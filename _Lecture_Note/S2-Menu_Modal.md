## 1강

### gravatar

랜덤 썸네일 생성 패키지
동일한 유저에 대해 항상 같은 썸네일 생성해줌

### e.stopPropagation

상위 컴포넌트에 onClick 전달하는것을 멈춤
Modal 바깥 클릭하면 닫히는 기능 만들 때 설명.
원래 자식 컴포넌트 클릭하면 부모 컴포넌트에도 이벤트 전달해줌

## 2강

### children props

props로 children 넣으면 하위 컴포넌트들 가져오는 것 가능

## 4강

### swr 별명

':' 사용하면 별명 지정 가능

```javascript
const { data: userData, mutate: revalidateUser } = (useSWR < IUser) | (false > ("/api/users", fetcher));
```

위에서 `data: userData`로 작성하여 userData로 사용 가능

### input state 분리

input이 들어있으면 별도의 컴포넌트로 분리하는게 좋음
<- input에 입력할때마다 리렌더링 많이 발생

### sumbmit handler

Worksapce/index.tsx의 `onCreateWorkspace`

- e.preventDefault()
  submit에서는 꼭 써줘야함

- trim()

```javascript
// 나쁜 예
if (!newWorkspace) {
  return;
}

// 좋은 예
if (!newWorkspace || !newWorkspace.trim()) {
  return;
}
```

위 예시 처럼 검사하면 띄어쓰기 하나만 넣었을 때도 통과함
-> 아래 예시처럼 해야함

### react-toastify

에러 발생했을 때 에러 메시지 나오는 패키지

```
npm i react-toastify --save
```
