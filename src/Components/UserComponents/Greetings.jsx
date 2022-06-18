import { BodyBox, LoginWrap } from "../../Pages/Login";
import { JoinWrap } from "../../Pages/Join";
import styled from 'styled-components';
import flex from "../GlobalStyled/flex";
import G1 from '../../Public/Images/G1.png';
import { Navigate, useNavigate } from "react-router-dom";

const Greetings = () => {

  const navigete = useNavigate();

  return (
  <BodyBox greeting>
    <LoginWrap>
      <JoinWrap>
        <GreetTitle>
          <span>회원가입 완료</span>
          <GreetMsg>
            사이좋은 사람들 싸이월드에 오신 것을 환영합니다. <br/>
            지금 로그인하고 새로운 싸이월드를 만나보세요.
          </GreetMsg>
        </GreetTitle>
        <GreetImgs>
        <img src = {G1}></img>
        </GreetImgs>
        <GreetFooter>
          <CommomBtn onClick = {() => navigete('/login')}>
            로그인
          </CommomBtn>
        </GreetFooter>
      </JoinWrap>
    </LoginWrap>
  </BodyBox> );   
}


const GreetTitle = styled.div`
  color : var(--orange);
  height : 187px;
  ${flex({ direction : 'column', justify : 'flex-end', align : 'flex-start'})};
  font-size : 33px;
`

export const GreetMsg = styled.span`
  color : var(--black);
  font-size: 15px;
`

const GreetImgs = styled.div`
  width : calc(100vh - 60vh);
  height : 95px;
  background-color: white;
  ${flex({ justify : 'center', align : 'center'})};
  margin : 52px 0 40px 0;
`
const GreetFooter = styled.div`
  height : 470px;
  background-color: white;
`

export const CommomBtn = styled.button`
  background-color: var(--orange);
  border : none;
  height : 50px;
  width : calc(100vh - 60vh);
  border-radius: 10px;
  box-sizing: border-box;
  font-size : 18px;
  color : white;
  padding : 0px 15px;
  cursor : pointer;
  &:hover {
    color : white;
  }
`
export default Greetings;
