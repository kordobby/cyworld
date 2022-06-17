import React, { useEffect, useState } from "react";

// 로그인 페이지
import styled from "styled-components";
import CyLogo from '../Public/Images/CyLogo.png';
import Ad from '../Public/Images/ad.png';

/* Router setup */
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  return (
    <BodyBox>
      <LoginWrap>
        <LoginLogo>
          <LogoImage src = {CyLogo} alt = ""/>
        </LoginLogo>
        <UserInputBox>
          <InputStyle placeholder = {"이메일 아이디"}/>
          <InputStyle placeholder = {"비밀번호"}/>
        </UserInputBox>
        <ButtonBox>
          <UserButton>로그인</UserButton>
        </ButtonBox>
        <LoginOptions>
          <span>아이디찾기</span>
          <span>비밀번호 재설정</span>
          <span onClick = {()=> navigate('/signup')} style = {{cursor : 'pointer'}}>회원가입</span>
        </LoginOptions>
        <Advertisement>
        <img src = {Ad} style = {{ width : '311px', marginRight : '3px'}} alt = ""/>
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

/* 전역 Main-body */
export const BodyBox = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  justify-content: center;
`;

export const LoginWrap = styled.div`
  width : 360px;
  height : 844px;
  display : flex;
  flex-direction: column;
  align-items: center;
`
const LoginLogo = styled.div`
  width : 100%;
  height : 254px;
  box-sizing : border-box;
  padding-bottom: 45px;
  display : flex;
  align-items: flex-end;
`
const UserInputBox = styled.div`
  width : 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;
`

export const InputStyle = styled.input`
  background-color: var(--input-grey);
  border : none;
  height : 52px;
  width : 311px;
  border-radius: 10px;
  box-sizing: border-box;

  padding : 0px 15px;
  &::placeholder {
    color : var(--input-text);
    font-size: 18px;
  }
`;

const LogoImage = styled.img`
width : 390px;
height : 70px;
`

export const ButtonBox = styled.div`
  width : 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const UserButton = styled.button`
  background-color: #E5E5E5;
  border : none;
  height : 52px;
  width : 311px;
  border-radius: 10px;
  box-sizing: border-box;
  font-size : 18px;
  color : var(--black);
  padding : 0px 15px;
`

const LoginOptions = styled.div`
  height : 60px;
  width : 311px;
  background-color: white;
  display : flex;
  justify-content: space-between;
  padding-top : 15px;
  font-size: 15px;
  box-sizing: border-box;
`

const Advertisement = styled.div`
  height : 225px;
  background-color: white;
`

const LoginFooter = styled.div`
  width : 311px;
  display : flex;
  flex-direction: column;
  font-size : 14px;
`
export default Login;