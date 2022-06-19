import React, { useEffect, useState } from "react";

// 로그인 페이지
import styled from "styled-components";
import AdLight from '../Public/Images/login_ad_light.png';
import AdDark from '../Public/Images/login_ad_dark.png';
import flex from '../Components/GlobalStyled/flex';
/* Router setup */
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useInput from "../Hooks/useInput";
import { loginDB } from "../redux/modules/userReducer";
import LoignLogo from '../Public/Images/basic-logo.png';
import LoginDark from '../Public/Images/dark-logo3.png';

const Login = ( { mode } ) => {

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

  const noServiceHandler = () => {
    alert('이 서비스는 아직 준비중입니다!');
  }

  return (
    <BodyBox>
      <LoginWrap>
        <LoginLogo>
          { !mode ? 
            (<img className = "login__logo" src = {LoignLogo} alt = ""/>)
          : (<img className = "login__logo" src = {LoginDark} alt = ""/>)
          }
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
          <span className = "login__options" onClick = {noServiceHandler} >아이디찾기</span>
          <span className = "login__options" onClick = {noServiceHandler} >비밀번호 재설정</span>
          <span className = "login__options" onClick = {()=> navigate('/signup')} >회원가입</span>
        </LoginOptions>
        <Advertisement onClick = {() => alert('광고문의는 항해99로...!')}>
        { !mode ? 
            (<img className = 'join__ad-img'src = {AdLight} alt = ""/>)
          : (<img className = 'join__ad-img'src = {AdDark} alt = ""/>)
          }
        </Advertisement>
        <LoginFooter>
          <div className = "footer__service" onClick = {noServiceHandler} style = {{ width : '100%', display : 'flex', justifyContent : 'space-between'}}>
            <span className = "footer__service--each">이용약관</span>
            <span className = "footer__service--each">개인정보처리방침</span>
            <span className = "footer__service--each">고객센터</span>
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
  ${flex({justify : 'center'})};
  width: 100%;
  position : ${props => props.greeting ? 'absolute' : 'static'};
  display : ${props => props.greeting ? 'flex' : 'hidden'};
  z-index : 2;
  background-color: ${props => props.theme.bgColor};
  `;

export const LoginWrap = styled.div`
  ${flex({direction : 'column', justify : 'center'})}
  width : calc(100vh - 53vh);
  /* background-color : ${props => props.main ? 'var(--input-grey)' : 'white'}; */
  background-color: ${props => props.theme.bgColor};
`
const LoginLogo = styled.div`
  width : calc(100vh - 53vh);
  height : 254px;
  padding-bottom: 45px;
  background-color: ${props => props.theme.bgColor};
  box-sizing : border-box;
  ${flex({align : 'flex-end', justify : 'center'})}
  & > .login__logo {
    width : calc(100vh - 60vh);
  }
`

const UserInputBox = styled.div`
  width : calc(100vh - 60vh);
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;
`

export const InputStyle = styled.input`
  background-color: ${props => props.theme.inputColor};
  border : none;
  height : 52px;
  width : calc(100vh - 60vh);
  border-radius: 8px;
  box-sizing: border-box;
  padding-top : 5px;
  padding-left: calc(100vh - 98vh);
  margin-bottom : ${props => props.join ? '5px' : '0'};
  &::placeholder {
    color: ${props => props.theme.inputText};
    font-size: 18px;  // ????????????????
  }
`;


export const ButtonBox = styled.div`
  width : 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const UserButton = styled.button`
  background-color: ${props => props.theme.btnColor};
  border : none;
  height : 50px;
  width : calc(100vh - 60vh);
  border-radius: 10px;
  box-sizing: border-box;
  font-size : 18px;
  color : ${props => props.theme.btnText};
  padding : 0px 15px;
  cursor : pointer;
  &:hover {
    background-color: ${props => props.disabled ? 'var(--input-grey)' : 'var(--notice-green)'};
    color : white;
  }
`

const LoginOptions = styled.div`
  height : 60px;
  color: ${props => props.theme.textColor};
  width : calc(100vh - 60vh);
  background-color: ${props => props.theme.bgColor};
  display : flex;
  justify-content: space-between;
  padding-top : 15px;
  font-size: 15px;
  box-sizing: border-box;
  & > .login__options{
    cursor : pointer;
  }
`

const Advertisement = styled.div`
  width : calc(100vh - 55vh);  
  height : 225px;
  background-color: ${props => props.theme.bgColor};
  cursor : pointer;
  & > .join__ad-img {
    width : calc(100vh - 55vh);
    margin-right : 3px;
  }
`

const LoginFooter = styled.div`
  width : 311px;
  margin-top : 88px;
  display : flex;
  flex-direction: column;
  font-size : 14px;
  color: ${props => props.theme.textColor};
  margin-bottom : 91px;
  & > .footer__service {
    width : 100%;
    display : flex;
    justify-content : space-between;
    & > .footer__service--each {
      cursor : pointer;
    }
  }
`
export default Login;