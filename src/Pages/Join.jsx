import React, { useEffect, useState } from "react";

/* import Styles */
import { BodyBox, LoginWrap, InputStyle, UserButton } from "./Login";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

/* Redux-settings */
import { useDispatch, useSelector } from "react-redux";
import { signUpDB, checkIdDB } from '../redux/modules/userReducer';
import { useNavigate } from "react-router-dom";

const Join = () => {

  const [ id, setId ] = useState('');
  const [ pw, setPw ] = useState('');
  const [ pw2, setPw2 ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ checkPw, setCheckPw ] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUpReq = useSelector((state) => state.userReducer);
  console.log(signUpReq.error);

  const num = pw.search(/[0-9]/g);
  const eng = pw.search(/[a-z]/ig);
  const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  useEffect(() => {
    if ( pw.length < 8 || pw.length > 12) {
      setCheckPw(false);
    } else if ( pw.search(/\s/) != -1 ) {
      setCheckPw(false);
    } else if ( num < 0 || eng < 0 || spe < 0 ) {
      setCheckPw(false);
    } else if ( pw === null ) {
      setCheckPw(false)
    }else {
      setCheckPw(true);
    }
  }, [pw])

  /* SignUp Function */
  const signUpHandler = () => {
    /* 훅으로 돌릴 수 있을까? */
    // if ( !signUpReq.idCheck) {
    //   alert ('아이디 중복검사를 해주세요!');
    //   return ;
    // } else if ( pw !== pw2 ){
    //   alert('패스워드가 일치하지 않습니다!');
    //   return ;
    // } else if ( id === "" || pw === "" || pw2 === "" || userName === "" ) {
    //   alert ('회원가입 양식은 빈칸없이 작성해주세요!')
    // } else {
    //   dispatch(signUpDB({
    //     email : id,
    //     password : pw,
    //     confirmPassword : pw2,
    //     userName : userName
    //   }));
    //   ( signUpReq.error === null ) ? navigate('/login') : navigate('/signup');
    // }
    dispatch(signUpDB({
      email : id,
      password : pw,
      confirmPassword : pw2,
      userName
    }))
  } 

  const checkIdHandler = () => {
    dispatch(checkIdDB({
      email : id
    }))
  }
  
  return (
    <BodyBox>
      <LoginWrap>
        <JoinWrap>
          <JoinTitle>
            <span>회원가입</span>
          </JoinTitle>
          <IdBox>
            <SignUpTitles>이메일 아이디 입력</SignUpTitles>
            <SignUpNotice>아이디로 사용할 이메일 주소를 입력해주세요.</SignUpNotice>
            <InputStyle
              placeholder="이메일 아이디"
              type = "email"
              onChange = {(event) => { setId(event.target.value); }}
              />
            <CheckNotice>사용할 수 있는 ID 입니다.</CheckNotice>
            <IdCheckBtn><FontAwesomeIcon icon = {faCheck}/></IdCheckBtn>
          </IdBox>
          <IdBox style = {{height : '205px'}}>
            <SignUpTitles>비밀번호 입력</SignUpTitles>
            <SignUpNotice>비밀번호는 6 - 12자리, 영문+숫자 조합하여 설정해주세요.</SignUpNotice>
            <InputStyle
              placeholder="비밀번호를 입력해주세요."
              type = "password"
              onChange = {(event) => {setPw(event.target.value); }}
              />
            <CheckNotice>안전한 비밀번호입니다.</CheckNotice>
            <InputStyle
              placeholder="비밀번호를 다시 입력해주세요."
              type = "password"
              onChange = {(event) => {setPw2(event.target.value); }}/>
            <CheckNotice>비밀번호가 일치합니다.</CheckNotice>
          </IdBox>
          <IdBox style = {{height : '102px', marginBottom : '96px'}}>
            <SignUpTitles>이름 입력</SignUpTitles>
            <SignUpNotice>실명을 작성해주세요.</SignUpNotice>
            <InputStyle
              type = "text"
              onChange={(event) => {setUserName(event.target.value); }}/>
          </IdBox>
          <div>
             <UserButton>다음</UserButton>
          </div>
        </JoinWrap>
      </LoginWrap>
    </BodyBox>
  );
}

const JoinWrap = styled.div`
  width : 311px;
  height : 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

const JoinTitle = styled.div`
  color : var(--orange);
  height : 103px;
  display : flex;
  align-items: flex-end;
  font-size : 33px;
  margin-bottom: 32px;
`
const SignUpTitles = styled.span`
  color : var(--orange);
  font-size: 18px;
`

const CheckNotice = styled.span`
  color : var(--notice-green);
  font-size: 11px;
`

const SignUpNotice = styled.span`
  color : var(--black);
  font-size: 11px;
`

const IdBox = styled.div`
  height : 118px;  // 146
  display : flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width : 100%;
  margin-bottom: 28px;
  position: relative;
`

const IdCheckBtn = styled.button`
  width : 40px;
  height: 40px;
  border-radius: 24px;
  background-color: var(--orange);
  border : none;
  position: absolute;
  right : 5px;
  bottom : 26px;
  color : white;
  font-size: 20px;
  display : flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--notice-green);
  }
`
export default Join;