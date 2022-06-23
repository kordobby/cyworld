import { BodyBox, LoginWrap, LoginLogo, UserInputBox, InputStyle, JoinTitle, UserButton, SignUpNotice, IdBox } from '../Components/UserComponents/UserStyled';
import LoignLogo from '../Public/Images/basic-logo.png';
import LoginDark from '../Public/Images/dark-logo3.png';
import { useNavigate } from 'react-router-dom';
import useInput from "../Hooks/useInput";
import styled from 'styled-components';
import flex from '../Components/GlobalStyled/flex';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import apis from '../Shared/api/apis';
import { useMutation } from 'react-query';
import axios from 'axios';
import { passwordCheck } from '../Hooks/useCheck';

const Help = ( {themeMode} ) => {

  const navigate = useNavigate();
  const [ id, setId ] = useInput('');
  const [ pw, setPw ] = useInput('');
  const [ checkCertiKey, setCheckCertiKey ] = useState(false);
  const [ passCertifi, setPassCertifi ] = useState(false);

  /* 버튼 비활성화 */
  const disabledHandler = () => {
    if ( passCertifi === false ) return true;
    else if ( checkCertiKey === false ) return true;
    else if ( passwordCheck(pw) === false ) return true;
    else if ( pw === "" ) return true;
    else return false;
  }

  /* 인증 비밀번호 보내기 */
  const sendEmail = async(userEmail) => {
    const sendEmailReq = await apis.sendMail(userEmail);
    return sendEmailReq;
  }

  const sendEmailReq = useMutation(sendEmail, {
    onSuccess : () => {
      alert('메일전송 완료! 메일을 확인해주세요!');
      setCheckCertiKey(true);
    },
    onError : (error) => {
      alert('에러발생!');
      navigate('/error');
    }
  })

  const sendMailHandler = ( ) => {
    sendEmailReq.mutate({
      email : id
    })
  } 

  /* 인증 번호 확인 */
  const checkCertifi = async(certifiKey) => {
    const checkReq = await apis.sendMail(certifiKey);
    return checkReq;
  }

  const checkKeyReq = useMutation(checkCertifi, {
    onSuccess : () => {
      alert('인증되었습니다!');
      setPassCertifi(true);
    },
    onError : (error) => {
      alert('에러발생!');
      navigate('/error');
    }
  })

  const checkKeyHandler = ( ) => {
    checkKeyReq.mutate({
      key : "12345" // 고쳐야함
    })
  } 
  
  /* 비밀번호 변경 */
  const changePw = async(pw) => {
    const changePwReq = await axios.post(`http://3.39.161.93:3000/api/send/changePassword/${id}`, pw)
    return changePwReq;
  }

  const changePasswordReq = useMutation(changePw, {
    onSuccess : () => {
      alert('비밀번호 변경이 완료되었습니다!');
      navigate('/login');
    },
    onError : (error) => {
      alert('에러발생!');
      navigate('/error');
    }
  })

  const changePwHandler = ( ) => {
    changePasswordReq.mutate({
      key : "12345" // 고쳐야함
    })
  } 

  return (
    <BodyBox style = {{ height : '100vh'}}>
      <LoginWrap>
        <LoginLogo onClick = {() => navigate('/home')} style = {{ cursor : 'pointer' }}>
          { !themeMode ? 
            (<img className = "login__logo" src = {LoignLogo} alt = ""/>)
          : (<img className = "login__logo" src = {LoginDark} alt = ""/>)
          }
        </LoginLogo>
        <JoinTitle style = {{display : 'flex', flexDirection :'column', alignItems : 'flex-start', justifyContent : 'flex-end', marginBottom : '0'}}>
            <span style = {{marginBottom : '8px'}}>비밀번호 찾기</span>
            <SignUpNotice className = "email__title">가입하신 이메일 아이디를 작성해주세요!</SignUpNotice>
        </JoinTitle>
        <UserInputBox>
          <InputStyle
          type = "email"
            onChange = {setId}
            placeholder = {"이메일"}>
          </InputStyle>
          <UserButton onClick = {sendMailHandler}>인증메일 보내기</UserButton>
        </UserInputBox>

        {/* 인증번호 확인하기 */}
        { checkCertiKey === true ? 
        <UserInputBox style = {{ position : 'relative', margin : '0'}}>
          <InputStyle
            style = {{ margin : '0' }}
            type = "number"
            onChange = {setId}
            placeholder = {"인증번호를 입력해주세요."}/>
          <HelpBtn onClick = {checkKeyHandler}><FontAwesomeIcon icon = {faCheck} /></HelpBtn>
        </UserInputBox>
        : <></> }
        {/* 비밀번호 변경하기 */}

        { passCertifi === true ? 
        <>
        <JoinTitle style = {{display : 'flex', flexDirection :'column', alignItems : 'flex-start', justifyContent : 'flex-end', margin : '0'}}>
            <span style = {{marginBottom : '8px'}}>비밀번호 변경</span>
            <SignUpNotice className = "email__title">변경하실 비밀번호를 작성해주세요!</SignUpNotice>
        </JoinTitle>
        <UserInputBox style = {{ position : 'relative' }}>
          <InputStyle
            style = {{ margin : '0' }}
            type = "password"
            onChange = {setPw}
            placeholder = {"인증번호를 입력해주세요."}/>
          <HelpBtn disabled = {disabledHandler()} onClick = {changePwHandler}><FontAwesomeIcon icon = {faCheck} /></HelpBtn>
        </UserInputBox> </>
        : <></> }
      </LoginWrap>
    </BodyBox>
  );
}

export default Help;

const HelpBtn = styled.div`
  width : 70px;
  height: 40px;
  ${flex({ align : 'center', justify : 'center'})}

  position: absolute;
  right : 7px;
  top : 6px;

  border : none;
  border-radius: 12px;

  background-color: ${props => props.disabled ? 'var(--input-text)' : 'var(--orange)'};
  color : white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.disabled ? 'var(--input-text)' : 'var(--notice-green)'};
  }
`