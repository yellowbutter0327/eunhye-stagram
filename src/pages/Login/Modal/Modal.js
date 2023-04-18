import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.scss';

const Modal = ({ modalClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="private-content">
          <p className="secrect"> 쉿 비밀이에요 !</p>
          <p>email : hye@star.com</p>
          <p>password : hye1234@@</p>
        </div>
        <span className="close" onClick={modalClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;
