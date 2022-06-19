/* React Settings */
import React from "react";
import { useNavigate } from "react-router-dom";

/* import Styles */
import styled from "styled-components";
import flex from "../Components/GlobalStyled/flex";
  // Components
  import { BodyBox, LoginWrap, InputStyle, UserButton } from "./Login";
  // Icons
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faCheck } from "@fortawesome/free-solid-svg-icons";
  // Imgs for Theme
  import SignUpLogo from '../Public/Images/basic-logo.png';
  import SignUpDark from '../Public/Images/dark-logo3.png';

/* Redux-settings */
import { useDispatch, useSelector } from "react-redux";
import { signUpDB, checkIdDB } from '../redux/modules/userReducer';

/* Hooks */
import { emailCheck, passwordCheck } from "../Hooks/useCheck";
import useInput from "../Hooks/useInput";

/* SeverReq Components */
import Greetings from "../Components/UserComponents/Greetings";
import Error from "../Components/Commom/Error";

const Join = ( {mode} ) => {

  const [ id, setId ] = useInput('');
  const [ pw, setPw ] = useInput('');
  const [ pw2, setPw2 ] = useInput('');
  const [ userName, setUserName ] = useInput('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { idCheck, error, success } = useSelector((state) => state.userReducer);

  /* Server Request */
  // #1. ID 중복 확인

  // 안먹히고있음. 이유는 모르겟다 도대체가
  const idCheckDisabled = () => {
    if ( emailCheck(id) === true ) return true;
    if ( id === "" ) return true;
    // if ( idCheck === true ) return false;  <= 서버 연결하고 살리기
    else return false;
  }

  console.log(idCheckDisabled());
  const checkIdHandler = () => { dispatch(checkIdDB({ email : id })) }

  // #2. 회원가입 요청
  const signUpHandler = ( ) => {
    dispatch(signUpDB({
      email : id,
      password : pw,
      confirmPassword : pw2,
      userName
    }))
  } 

  // #3. 조건에 따른 버튼 비활성화
  const disabledHandler = () => {
    if ( emailCheck(id) === false ) return true;
    else if ( pw !== pw2 ) return true;
    else if ( idCheck === false ) return true;
    else if ( passwordCheck(pw) === false ) return true;
    else if ( passwordCheck(pw2) === false ) return true;
    else if ( isNaN(userName) === false ) return true;
    else if ( id === "" || pw === "" || pw2 === "" || userName === "") return true;
    else return false;
  }

  return (
    <>
      { success === true ? <Greetings></Greetings> : <></>}
      { error !== null ? <Error></Error> : <></>}
      <BodyBox>
        <LoginWrap>
          <JoinWrap>

            {/* Title */}
            { !mode ?
             (<img onClick = {() => {navigate('/home')}} src = {SignUpLogo} style = {{cursor : 'pointer'}}alt = "" />)
             :
             (<img onClick = {() => {navigate('/home')}} src = {SignUpDark} style = {{cursor : 'pointer'}}alt = "" />)
            }
            <JoinTitle>
              <span>회원가입</span>
            </JoinTitle>

            {/* ID section */}
            <IdBox>
              <SignUpTitles className = "email__title">이메일 아이디 입력</SignUpTitles>
              <SignUpNotice className = "email__title">아이디로 사용할 이메일 주소를 입력해주세요.</SignUpNotice>
              <InputStyle
                join
                className = "email__title"
                placeholder="이메일 아이디"
                type = "email"
                onChange = {setId}
                />
                { (!emailCheck(id) && id !== "") ?
                  <CheckNotice>올바른 이메일 형식입니다!</CheckNotice>
                  :
                  <CheckNotice danger>올바르지 않은 이메일 형식입니다!</CheckNotice>
                }
                { (idCheck === true) ?
                  <CheckNotice>사용할 수 있는 ID 입니다.</CheckNotice>
                  :
                  <CheckNotice danger>이메일 중복확인이 필요합니다!</CheckNotice>
                }
              <IdCheckBtn onClick = {checkIdHandler} disabled = {idCheckDisabled()}><FontAwesomeIcon icon = {faCheck}/></IdCheckBtn>
            </IdBox>

            {/* PW section */}
            <IdBox>
              <SignUpTitles>비밀번호 입력</SignUpTitles>
              <SignUpNotice>비밀번호는 6 - 12자리, 영문+숫자 조합하여 설정해주세요.</SignUpNotice>
              <InputStyle
                join
                placeholder="비밀번호를 입력해주세요."
                type = "password"
                onChange = {setPw}
                maxLength = "12"
                />
                { ( !passwordCheck(pw) ) ? 
                  <CheckNotice password danger>비밀번호 양식을 지켜주세요!</CheckNotice>
                  :
                  <CheckNotice password>안전한 비밀번호입니다.</CheckNotice>
                }
              <InputStyle
                join
                placeholder="비밀번호를 다시 입력해주세요."
                type = "password"
                onChange = {setPw2}
                maxLength = "12"
                />
                { ( pw === pw2 ) && (pw !== "") ?
                <CheckNotice>비밀번호가 일치합니다.</CheckNotice>
                :
                <CheckNotice danger>비밀번호가 일치하지 않습니다.</CheckNotice>
                }
            </IdBox>
            <IdBox>
              <SignUpTitles>이름 입력</SignUpTitles>
              <SignUpNotice>실명을 작성해주세요.</SignUpNotice>
              <InputStyle
                join
                type = "text"
                onChange={setUserName}
                maxLength = "10"/>
              { !isNaN(userName) ?
              <CheckNotice>이름에 숫자는 들어갈 수 없어요!</CheckNotice>
              :
              <></>
              }
            </IdBox>
            <div style = {{marginTop : '97px', marginBottom : '78px'}}>
              <UserButton onClick = {signUpHandler} disabled = {disabledHandler()}>다음</UserButton>
            </div>
          </JoinWrap>
        </LoginWrap>
      </BodyBox>
    </>
  );
}

/* padding 맞춰주는 Box */
export const JoinWrap = styled.div`
  width : calc(100vh - 60vh);
  height : 100%;
  padding-top : 75px;
  ${flex({ direction : 'column', justify : 'flex-start'})}
  position: relative;
`;

const IdBox = styled.div`
  height : 100%;
  box-sizing : border-box;
${flex({align : 'flex-start', direction : 'column'})}
  margin-bottom: 28px;
  /* position: relative; */
`

export const JoinTitle = styled.div`
  height : 86px;
  width : calc(100vh - 60vh);
  ${flex({ align : 'flex-end', justify : 'flex-start'})}
  margin-bottom: 32px;
  font-size : 25px;
  color : var(--orange);
`
/* 섹션별 title */
const SignUpTitles = styled.span`
  margin-bottom: 7px;
  font-size: 18px;
  color : var(--orange);
`
const SignUpNotice = styled.span`
  margin-bottom: 7px;
  font-size: 11px;
  color: ${props => props.theme.textColor};
`
const CheckNotice = styled.span`
  margin : 5px 0 0 5px;
  margin-bottom: ${props => props.password ? '14px' : '0'};
  font-size: 11px;
  color : ${props => props.danger ? 'var(--notice-purple)' : 'var(--notice-green)'};
`

const IdCheckBtn = styled.button`
  width : 40px;
  height: 40px;
  ${flex({ align : 'center', justify : 'center'})}

  position: absolute;
  top : 310px;
  right : 5px;

  border : none;
  border-radius: 24px;

  background-color: ${props => props.disabled ? 'var(--input-text)' : 'var(--orange)'};
  color : white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.disabled ? 'var(--input-text)' : 'var(--notice-green)'};
  }
`
export default Join;