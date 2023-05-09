import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwSame, setPwSame] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [pwSameValid, setPwSameValid] = useState(false);
  const [allow, setAllow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailValid && pwValid && pwSameValid) {
      setAllow(true);
    } else {
      setAllow(false);
    }
  }, [emailValid, pwValid, pwSameValid]);

  const handleEmail = e => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = e => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handlePwSame = e => {
    setPwSame(e.target.value);
    if (e.target.value === pw) {
      setPwSameValid(true);
    } else {
      setPwSameValid(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!allow) {
      alert('폼을 다시 확인해주세요');
      return;
    } else if (allow) {
      createUserWithEmailAndPassword(auth, email, pw)
        .then(userCredential => {
          alert('회원가입이 완료되었습니다.');
          navigate('/');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('이미 가입된 이메일 주소입니다.');
          } else {
            alert('회원가입에 실패했습니다.');
          }
        });
    }
  };

  return (
    <div className="register-container">
      <h1 className="title">회원가입</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-input-wrap">
          <div className="register-title"> 이메일을 입력하세요 </div>
          <input
            className="register-input"
            type="text"
            placeholder="숫자,영문,특수문자 포함된 이메일"
            value={email}
            onChange={handleEmail}
          />
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
            {emailValid && email.length > 0 && (
              <div>사용가능한 이메일입니다.</div>
            )}
          </div>
        </div>

        <div className="register-input-wrap">
          <div className="register-title"> 비밀번호를 입력하세요 </div>
          <input
            className="register-input"
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={handlePw}
          />
          <div className="error-message-wrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
            {pwValid && pw.length > 0 && <div>사용가능한 비밀번호입니다.</div>}
          </div>
        </div>
        <div className="register-input-wrap">
          <div className="register-title"> 비밀번호 재확인 </div>
          <input
            className="register-input"
            type="password"
            placeholder="비밀번호 재확인"
            onChange={handlePwSame}
            value={pwSame}
          />
          <div className="error-message-wrap">
            {!pwSameValid && pw.length > 0 && (
              <div>비밀번호와 일치하지 않습니다.</div>
            )}
            {pwSameValid && pw.length > 0 && <div>비밀번호와 일치합니다.</div>}
          </div>
        </div>
      </form>
      <button className="register-button" type="button" onClick={handleSubmit}>
        가입하기
      </button>
    </div>
  );
}

export default Register;
