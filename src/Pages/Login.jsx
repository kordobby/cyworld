// 로그인 페이지
import styled from "styled-components";
import CyLogo from '../Public/Images/CyLogo.png';
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
      </LoginWrap>
    </BodyBox>
  );
}

export const BodyBox = styled.div`
  width : 100%;
  height : 100%;

  display : flex;
  justify-content: center;
`;
const LoginWrap = styled.div`
  width : 360px;
  height : 844px;
  background-color : black;
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
  background-color: yellow;
  margin-bottom: 25px;
`

const InputStyle = styled.input`
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

const ButtonBox = styled.div`
  width : 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: yellow;
`

const UserButton = styled.button`
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
export default Login;