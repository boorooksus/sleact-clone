## 1강

### useCallback

함수의 불필요한 리렌더링 방지
마지막 대괄호에는 외부 변수들을 넣어둔다.
(불변이 보장된 변수는 외부 변수라도 굳이 안넣어도 됨.
예를 들어 useState의 'setPassword')

```javascript
const onChangePassword = useCallback(
  (e) => {
    setPassword(e.target.value);
    setMismatchError(passwordCheck !== e.target.value);
  },
  [passwordCheck, setPassword]
);
```

### preventDefault

form의 onSubmit함수에 넣어서 새로고침 방지

```javascript
const onSubmit = useCallback(
  (e) => {
    e.preventDefault();

    // ...
  },
  [email, nickname, password, mismatchError]
);
```

## 2강

### 커스텀 훅

함수 패턴이 겹치는 경우 훅을 커스텀으로 만들어서 사용
hooks 폴더에 useInput 커스텀 훅 만듦
useInput: useState와 useCallback 기능을 합침
SignUp의 useState자리를 useInput으로 대체해서 사용

ps. password, passwordCheck는 다른 state들과 onChange 함수와 다르기 때문에 커스텀 훅 사용 안하거나 아래처럼 해당 함수는 빈칸으로 두고, 따로 정의

```javascript
// 기본 useInput 사용 변수
const [email, onChangeEmail, setEmail] = useInput("");

// 차이점이 있는 변수의 useInput 사용
const [password, , setPassword] = useInput("");
// ...
const onChangePassword = useCallback();
// ...
```

## 4강

### react-router-dom Link

a href태그 대신 Link to 사용하면 좋음.
이렇게하면 새로고침 안하고 화면 바뀜.

### 프론트엔드에서 로그인 정보 지우기(로그아웃)

개발자도구 -> Application에서 session/cookie 정보 지우기
express에서는 보통 'connect.sid'으로 되어있음

## 5강

### swr 사용

강의에서 로그인 상태 저장하기 위해 사용.
get/post 요청하는 방식으로 사용(보통은 get 사용)

```
npm i swr --save
```

```javascript
const { data, error,revalidate } = useSWR('백엔드 주소', fetcher 함수);
```

`useSWR`에 주소와, 주소를 처리하는 fetcher함수 구현해서 인자로 전달
`useSWR`은 첫 번째 인자를 두 번째 인자 함수의 인자로 전달
revalidate: data나 error 값이 업데이트되면 리렌더링 시킴

```javascript
const fetcher = (url: string) => axios.get(url).then((response) => response.data);
```

fetcher함수는 위의 백엔드 주소를 인자로 전달 받음.
주소 받아서 axios get 요청 처리

swr 장점 - 로딩 상태인지 알 수 있음
data가 존재하지 않으면 로딩 상태

### swr 설정 추가

백엔드, 프론트엔드 도메인 다르면 서로 쿠키 전달이 안됨
-> fetcher 함수에 설정 추가해서 해결

```javascript
const fetcher = (url: string) => axios.get(url, { withCredentials: true }).then((response) => response.data);
```

withCredentials 옵션은 get 요청일땐 두 번째 인자로, post 요청일땐 세 번째 인자로 넣어줌

위 설정 넣으면 쿠키 생성됨
