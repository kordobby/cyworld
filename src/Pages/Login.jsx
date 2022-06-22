/* React Settings */
import React from "react";
import { useNavigate } from "react-router-dom";

/* import Styles */
  // Imgs for Theme
  import AdLight from '../Public/Images/login_ad_light.png';
  import AdDark from '../Public/Images/login_ad_dark.png';
  import LoignLogo from '../Public/Images/basic-logo.png';
  import LoginDark from '../Public/Images/dark-logo3.png';
  // Components
  import { BodyBox, LoginWrap, LoginLogo, UserInputBox, InputStyle, ButtonBox, UserButton, LoginOptions, Advertisement, LoginFooter } from "../Components/UserComponents/UserStyled";
/* Hooks */
import useInput from "../Hooks/useInput";
import { emailCheck } from "../Hooks/useCheck";

/* Redux setup */
import { useMutation } from "react-query";
import apis from "../Shared/api/apis";
import { setCookie } from "../Shared/Cookie";

const Login = ( { themeMode, setLoginState } ) => {

  const navigate = useNavigate();

  const [ id, setId ] = useInput('');
  const [ pw, setPw ] = useInput('');

  const loginTester = async(userData) => {
    const loginUserState = await apis.login(userData);
    return loginUserState;
  };

  const { mutate } = useMutation(loginTester,{
      onSuccess : (res) => {
        console.log(res);
        setCookie('token', res.data.token, {
          path : '/',
          expire : 'after60m'
        });
        setCookie('userId', res.data.userId, {
          path : '/',
          expire : 'after60m'
        });
        setCookie('userName', res.data.userName, {
          path : '/',
          expire : 'after60m'
        });
        navigate('/home');
        alert('어서오세요!');
        setLoginState(true);
      },
      onError : (error) => {
        navigate('/login');
        console.log(error);
        alert('아이디와 비밀번호를 다시 확인해주세요!');
        setLoginState(false);
      }
    });

  const loginHandler = async() => {
    if (emailCheck(id) === true) return alert('가입하신 e-mail ID로 작성해주세요!')
    // else dispatch(loginDB({email : id, password : pw}));
    else mutate({email : id, password : pw}); 
  };

  const noServiceHandler = () => {
    alert('이 서비스는 아직 준비중입니다!');
  }

  return (
    <BodyBox>
      {/* Header Logo Part */}
      <LoginWrap>
        <LoginLogo onClick = {() => navigate('/home')} style = {{ cursor : 'pointer' }}>
          { !themeMode ? 
            (<img className = "login__logo" src = {LoignLogo} alt = ""/>)
          : (<img className = "login__logo" src = {LoginDark} alt = ""/>)
          }
        </LoginLogo>

        {/* Main Input Form */}
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

        {/* Main Submit Button */}
        <ButtonBox>
          <UserButton onClick = {loginHandler}>로그인</UserButton>
        </ButtonBox>
        <LoginOptions>
          <span className = "login__options" onClick = {noServiceHandler} >아이디찾기</span>
          <span className = "login__options" onClick = {noServiceHandler} >비밀번호 재설정</span>
          <span className = "login__options" onClick = {()=> navigate('/signup')} >회원가입</span>
        </LoginOptions>
        <Advertisement onClick = {() => alert('광고문의는 항해99로...!')}>
        { !themeMode ? 
            (<img className = 'join__ad-img'src = {AdLight} alt = ""/>)
          : (<img className = 'join__ad-img'src = {AdDark} alt = ""/>)
          }
        </Advertisement>

        {/* Footer */}
        <LoginFooter>
          <div className = "footer__service" onClick = {noServiceHandler} style = {{ width : '100%', display : 'flex', justifyContent : 'space-between'}}>
            <span className = "footer__service--each">이용약관</span>
            <span className = "footer__service--each">개인정보처리방침</span>
            <span className = "footer__service--each">고객센터</span>
          </div>
          <div className = "footer__copyright" >
            <span>Copyright HangHae 99 7th Class A Team 2. All rights reserved</span>
          </div>
        </LoginFooter>
      </LoginWrap>
    </BodyBox>
  );
}

export default Login;