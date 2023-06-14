import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
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

  const handleSubmit = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pw)
      .then(userCredential => {
        sessionStorage.setItem('uid', userCredential.user.uid);
        alert('안녕하세요 :)');
        navigate('/main');
        window.location.reload();
      })
      .catch(error => {
        alert('로그인에 실패하였습니다. 다시 시도해주세요.');
      });
  };

  return (
    <div className="login">
      <div className="pic-wrap">
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

      <div className="login-wrap">
        <div className="login-container">
          <h1 className="title">hyestagram</h1>
          <form className="login-form" method="POST">
            <input
              className="user-id"
              type="text"
              placeholder="숫자,영문,특수문자 포함된 이메일"
              value={email}
              onChange={handleEmail}
            ></input>
            <div className="error-message-wrap">
              {!emailValid && email.length > 0 && (
                <div>올바른 이메일을 입력해주세요.</div>
              )}
            </div>
            <input
              className="user-password"
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={handlePw}
            ></input>
            <div className="error-message-wrap">
              {!pwValid && pw.length > 0 && (
                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
              )}
            </div>
          </form>

          <button
            className={`login-button ${notAllow ? '' : 'enabled-button'}`}
            onClick={handleSubmit}
            disabled={notAllow}
            type="button"
          >
            로그인
          </button>
        </div>
        <div className="register-wrap">
          <Link to="./register" className="register-link">
            회원가입하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
