import React, { useEffect, useState } from "react";

import styled from "styled-components";
import CyLogo from '../../Public/Images/CyLogo.png';
import Ad from '../../Public/Images/ad.png';
import flex from '../../Components/GlobalStyled/flex';

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useInput from "../../Hooks/useInput";
import { loginDB } from "../../redux/modules/userReducer";

/*
import React, { useEffect, useState } from "react";


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ id, setId ] = useInput('');
  const [ pw, setPw ] = useInput('');

  const loginHandler = async() => {
    dispatch(loginDB({
      email : id,
      password : pw
    }))
  }

  return (
    <BodyBox>
      <LoginWrap>
        <LoginLogo>
          <LogoImage src = {CyLogo} alt = ""/>
        </LoginLogo>
        <UserInputBox>
          <InputStyle
            type = "email"
            onChange = {setId}
            placeholder = {"이메일 아이디"}/>
          <InputStyle
            type = "password"
            onChange = {setPw}
            placeholder = {"비밀번호"}/>
        </UserInputBox>
        <ButtonBox>
          <UserButton onClick = {loginHandler}>로그인</UserButton>
        </ButtonBox>
        <LoginOptions>
          <span>아이디찾기</span>
          <span>비밀번호 재설정</span>
          <span onClick = {()=> navigate('/signup')} style = {{cursor : 'pointer'}}>회원가입</span>
        </LoginOptions>
        <Advertisement>
        <img src = {Ad} style = {{ width : 'calc(100vh - 60vh)', marginRight : '3px'}} alt = ""/>
        </Advertisement>
        <LoginFooter>
          <div style = {{ width : '100%', display : 'flex', justifyContent : 'space-between'}}>
            <span>이용약관</span>
            <span>개인정보처리방침</span>
            <span>고객센터</span>
          </div>
          <div style = {{ marginTop : '5px', width : '100%', display : 'flex', justifyContent : 'center', fontSize : '10px'}}>
            <span>Copyright Cyworld Z Corp. All rights reserved</span>
          </div>
        </LoginFooter>
      </LoginWrap>
    </BodyBox>
  );
}


*/