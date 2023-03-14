import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="picWrap">
        <div className="transition-pic">
          <img className="phone-pic img1" src="../images/feedpic1.png"></img>
          <img
            className="phone-pic img2"
            src="../images/black-heart-profile.jpeg"
          ></img>
          <img className="phone-pic img3" src="../images/cat.jpg"></img>
        </div>
        {/* <img className="" src=""></img>
<img className="" src=""></img> */}
      </div>

      <div className="loginWrap">
        <div className="loginContainer">
          <h1 className="title">hyestagram</h1>
          <form className="loginForm">
            <input
              className="userId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            ></input>
            <input
              className="userPw"
              type="password"
              placeholder="비밀번호"
            ></input>
          </form>
          <button className="loginButton" type="submit">
            로그인
          </button>
        </div>
        <div className="findPassword">
          <a className="findPwLink" href="#!">
            비밀번호를 잊으셨나요?
          </a>
        </div>
        <div className="register">
          <span className="">계정이 없으신가요? </span>
          <a className="registerLink" href="#!">
            가입하기
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
