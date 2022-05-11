import React from 'react';
import { useState, useCallback } from 'react';
import { Button, Header, Form, Label, Input, LinkContainer, Error } from './styles';

const SignUp = () => {
  //   //   const { data: userData } = useSWR('/api/users', fetcher);
  //   const [signUpError, setSignUpError] = useState(false);
  //   const [signUpSuccess, setSignUpSuccess] = useState(false);
  //   const [mismatchError, setMismatchError] = useState(false);
  //   //   const [email, onChangeEmail] = useInput('');
  //   //   const [nickname, onChangeNickname] = useInput('');
  //   //   const [password, , setPassword] = useInput('');
  //   //   const [passwordCheck, , setPasswordCheck] = useInput('');

  //   const onChangePassword = useCallback(
  //     (e) => {
  //       setPassword(e.target.value);
  //       setMismatchError(passwordCheck !== e.target.value);
  //     },
  //     [passwordCheck, setPassword],
  //   );

  //   const onChangePasswordCheck = useCallback(
  //     (e) => {
  //       setPasswordCheck(e.target.value);
  //       setMismatchError(password !== e.target.value);
  //     },
  //     [password, setPasswordCheck],
  //   );

  //   const onSubmit = useCallback(
  //     (e) => {
  //       e.preventDefault();
  //       if (!nickname || !nickname.trim()) {
  //         return;
  //       }
  //       if (!mismatchError) {
  //         setSignUpError(false);
  //         setSignUpSuccess(false);
  //         axios
  //           .post('/api/users', { email, nickname, password })
  //           .then(() => {
  //             setSignUpSuccess(true);
  //           })
  //           .catch((error) => {
  //             console.log(error.response?.data);
  //             setSignUpError(error.response?.data?.code === 403);
  //           });
  //       }
  //     },
  //     [email, nickname, password, mismatchError],
  //   );

  //   if (userData) {
  //     return <Redirect to="/workspace/sleact" />;
  //   }

  function temp() {
    console.log('hi');
  }

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={temp}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={'temp'} onChange={temp} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input type="password" id="password-check" name="password-check" onChange={temp} />
          </div>
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <a href="/login">로그인 하러가기</a>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
