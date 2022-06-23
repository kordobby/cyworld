import styled from "styled-components";
import flex from "../GlobalStyled/flex";
import E1 from '../../Public/Images/E1.png';
import { GreetMsg, CommonBtn } from "../UserComponents/Greetings";
import { useNavigate } from "react-router-dom";


const Error = () => {

  const navigate = useNavigate();

  return (
    <CommonWrap visible>
      <CommonBox>
        <ErrorImgBox>
          <img src = {E1} alt = ""/>
        </ErrorImgBox>
        <ErrorMsg>
          <span>오류 발생!</span>
        </ErrorMsg>
        <GreetMsg>서버에서 받은 에러메세지를 띄우면?</GreetMsg>
        <ErrorFooter>
          <CommonBtn onClick = {() => navigate(-1)}>홈 화면으로 돌아가기</CommonBtn>
        </ErrorFooter>
      </CommonBox>
    </CommonWrap>
  );

}

export const CommonWrap = styled.div`
  ${flex({justify : 'center'})};
  width: 100%;
  height : ${props => props.greeting ? '100vh' : '100%'};
  background-color: ${props => props.theme.bgColor};
  position : ${props => props.visible ? 'absolute' : 'static'};
  display : ${props => props.visible ? 'flex' : 'hidden'};
  align-items : ${props => props.greeting ? 'flex-start' : null};
  z-index : 2;
`;

export const CommonBox = styled.div`
  ${flex({direction : 'column', justify : 'center'})}
  height : ${props => props.greeting ? '100vh' : '100%'};
  width : calc(100vh - 53vh);
  background-color: ${props => props.greeting ? 'white' : '#f6f6f6'};
`;

export const ErrorImgBox = styled.div`
  width : calc(100vh - 53vh);
  box-sizing : border-box;
  overflow: hidden;
  ${flex({ justify : 'flex-end'})};
  margin : 146px 0 45px 0;
`

export const ErrorMsg = styled.div`
  font-family: 'DungGeunMo';
  color : var(--blue);
  font-size: 25px;
  ${flex({direction : 'column', align : 'center'})}
  margin-bottom: 20px;
`

export const ErrorFooter = styled.div`
  height : 252px;
  box-sizing: border-box;
  padding-top: 35px;
  background-color: var(--input-grey);
  margin-bottom : 120px;
`
export default Error;