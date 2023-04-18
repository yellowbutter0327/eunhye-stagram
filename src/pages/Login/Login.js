import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';
import Modal from './Modal/Modal.js';

const User = {
  email: 'hye@star.com',
  pw: 'hye1234@@',
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

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

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert('로그인에 성공했습니다.');
      navigate('/main');
    } else {
      alert('등록되지 않은 회원입니다.');
    }
  };

  const onClickFindPwLink = () => {
    setShowModal(true);
  };

  const modalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="login">
      <div className="picWrap">
        <div className="transition-pic">
          <img
            className="phone-pic img1"
            src="../images/login-main-pic.jpg"
          ></img>
          <img
            className="phone-pic img2"
            src="../images/login-main-pic2.jpg"
          ></img>
          <img
            className="phone-pic img3"
            src="../images/login-main-pic3.jpg"
          ></img>
        </div>
      </div>

      <div className="loginWrap">
        <div className="loginContainer">
          <h1 className="title">hyestagram</h1>
          <form className="loginForm" method="POST">
            <input
              className="userId"
              type="text"
              placeholder="숫자,영문,특수문자 포함된 이메일"
              value={email}
              onChange={handleEmail}
            ></input>
            <div className="errorMessageWrap">
              {!emailValid && email.length > 0 && (
                <div>올바른 이메일을 입력해주세요.</div>
              )}
            </div>
            <input
              className="userPw"
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={handlePw}
            ></input>
            <div className="errorMessageWrap">
              {!pwValid && pw.length > 0 && (
                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
              )}
            </div>
          </form>

          <button
            className={`loginButton ${notAllow ? '' : 'enabled-button'}`}
            onClick={onClickConfirmButton}
            disabled={notAllow}
            type="submit"
          >
            로그인
          </button>
        </div>
        <div className="findPassword">
          <a className="findPwLink" href="#!" onClick={onClickFindPwLink}>
            아이디 / 비밀번호를 잊으셨나요?
          </a>
        </div>
        {showModal && <Modal modalClose={modalClose}></Modal>}
      </div>
    </div>
  );
};

export default Login;
