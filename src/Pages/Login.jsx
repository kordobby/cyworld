import React, { useEffect, useState } from "react";

// 로그인 페이지
import styled from "styled-components";
import CyLogo from '../Public/Images/CyLogo.png';
import Ad from '../Public/Images/ad.png';
import flex from '../Components/GlobalStyled/flex';
/* Router setup */
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useInput from "../Hooks/useInput";
import { loginDB } from "../redux/modules/userReducer";

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
          <img className = 'join__ad-img'src = {Ad} alt = ""/>
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
  ${flex({justify : 'center'})};
  width: 100%;
  height: 100vh;
  position : ${props => props.greeting ? 'absolute' : 'static'};
  display : ${props => props.greeting ? 'flex' : 'hidden'};
  z-index : 2;
  background-color: ${props => props.theme.bgColor};
  `;

export const LoginWrap = styled.div`
  ${flex({direction : 'column', justify : 'center'})}
  width : calc(100vh - 55vh);
  /* background-color : ${props => props.main ? 'var(--input-grey)' : 'white'}; */
  background-color: ${props => props.theme.bgColor2};
`
const LoginLogo = styled.div`
  width : calc(100vh - 60vh);
  height : 254px;
  padding-bottom: 45px;
  background-color: ${props => props.theme.bgColor2};
  box-sizing : border-box;
  ${flex({align : 'flex-end', })}
`

const LogoImage = styled.img`
width : calc(100vh - 60vh);
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
  &::placeholder {
    color : var(--input-text);
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
  color : var(--black);
  padding : 0px 15px;
  cursor : pointer;
  &:hover {
    background-color: var(--orange);
    color : white;
  }
`

const LoginOptions = styled.div`
  height : 60px;
  color : var(--black);
  width : calc(100vh - 60vh);
  background-color: ${props => props.theme.bgColor2};
  display : flex;
  justify-content: space-between;
  padding-top : 15px;
  font-size: 15px;
  box-sizing: border-box;
`

const Advertisement = styled.div`
  width : calc(100vh - 60vh);  
  height : 225px;
  background-color: ${props => props.theme.bgColor2};
  & > .join__ad-img {
    width : calc(100vh - 60vh);
    margin-right : 3px;
  }
`

const LoginFooter = styled.div`
  width : 311px;

  display : flex;
  flex-direction: column;
  font-size : 14px;
  color : var(--black);
  margin-bottom : 91px;
`
export default Login;