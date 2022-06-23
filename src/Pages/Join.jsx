/* React Settings */
import React from "react";
import { useNavigate } from "react-router-dom";

/* import Styles */
  // Components
  import { BodyBox, LoginWrap, InputStyle, UserButton } from '../Components/UserComponents/UserStyled';
  import { JoinWrap, JoinTitle, IdBox, SignUpTitles, SignUpNotice, CheckNotice, IdCheckBtn } from "../Components/UserComponents/UserStyled";
  // Icons
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faCheck } from "@fortawesome/free-solid-svg-icons";
  // Imgs for Theme
  import SignUpLogo from '../Public/Images/basic-logo.png';
  import SignUpDark from '../Public/Images/dark-logo3.png';

/* Redux-settings */
import { useDispatch, useSelector } from "react-redux";
import { checkIdDB } from '../redux/modules/userReducer';

/* Hooks */
import { emailCheck, passwordCheck } from "../Hooks/useCheck";
import useInput from "../Hooks/useInput";

/* SeverReq Components */
import apis from "../Shared/api/apis";
import { useMutation } from "react-query";

const Join = ( {themeMode} ) => {

  const [ id, setId ] = useInput('');
  const [ pw, setPw ] = useInput('');
  const [ pw2, setPw2 ] = useInput('');
  const [ userName, setUserName ] = useInput('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { idCheck } = useSelector((state) => state.userReducer);

  /* Server Request */
  // #1. ID 중복 확인

  const idCheckDisabled = () => {
    if ( emailCheck(id) === true ) return true;
    if ( id === "" ) return true;
    if ( idCheck === true ) return false;  
    else return false;
  }

  const checkIdHandler = () => { dispatch(checkIdDB({ email : id })) }

  const reg = /[\s]/g;

  // #3. 조건에 따른 버튼 비활성화
  const disabledHandler = () => {
    if ( emailCheck(id) === true ) return true;
    else if ( userName.length < 3 ) return true;
    else if ( pw !== pw2 ) return true;
    else if ( idCheck === false ) return true;
    else if ( passwordCheck(pw) === false ) return true;
    else if ( !reg.test(userName) === false ) return true;
    else if ( isNaN(userName) === false ) return true;
    else if ( id === "" || pw === "" || pw2 === "" || userName === "") return true;
    else return false;
  }

  const joinTester = async(userData) => {
    const userJoinReq = await apis.join(userData);
    return userJoinReq;
  }
  const { mutate } = useMutation(joinTester, {
    onSuccess : () => {
      navigate('/greetings');
      alert('가입환영!');
    },
    onError : (error) => {
      navigate('/error');
      alert('회원가입에 실패했습니다.');
    }
  })

  const signUpHandler = ( ) => {
    mutate({
      email : id,
      password : pw,
      confirmPassword : pw2,
      userName
    })
  } 

  return (
    <>
      <BodyBox>
        <LoginWrap>
          <JoinWrap>

            {/* Header Logo Part */}
            { !themeMode ?
             (<img onClick = {() => {navigate('/home')}} src = {SignUpLogo} style = {{cursor : 'pointer'}}alt = "" />)
             :
             (<img onClick = {() => {navigate('/home')}} src = {SignUpDark} style = {{cursor : 'pointer'}}alt = "" />)
            }
            <JoinTitle>
              <span>회원가입</span>
            </JoinTitle>

            {/* Main - ID Input Form */}
            <IdBox>
              <SignUpTitles className = "email__title">이메일 아이디 입력</SignUpTitles>
              <SignUpNotice className = "email__title">비밀번호 찾기에도 이용되니 사용하시는 이메일을 작성해주세요!</SignUpNotice>
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

            {/* Main - PW Input Form */}
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

            {/* Main - Name Input Form */}
            <IdBox>
              <SignUpTitles>이름 입력</SignUpTitles>
              <SignUpNotice>이름은 3글자 이상 5글자 이하만 가능합니다.</SignUpNotice>
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

            {/* Footer - Submit Btn */}
            <div style = {{marginTop : '97px', marginBottom : '78px'}}>
              <UserButton onClick = {signUpHandler} disabled = {disabledHandler()}>다음</UserButton>
            </div>
          </JoinWrap>
        </LoginWrap>
      </BodyBox>
    </>
  );
}

export default Join;