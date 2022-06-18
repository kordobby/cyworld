import styled from "styled-components";
import flex from "../GlobalStyled/flex";
import E1 from '../../Public/Images/E1.png';
import { GreetMsg, CommomBtn } from "../UserComponents/Greetings";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Error = () => {

  const [ close, setClose ] = useState(false);

  const navigate = useNavigate();

  return (
    <CommonWrap visible>
      <CommomBox>
        <ErrorImgBox>
          <img src = {E1}/>
        </ErrorImgBox>
        <ErrorMsg>
          <span>오류 발생!</span>
        </ErrorMsg>
        <GreetMsg>서버에서 받은 에러메세지를 띄우면?</GreetMsg>
        <ErrorFooter>
          <CommomBtn onClick = {() => navigate('/')}>홈 화면으로 돌아가기</CommomBtn>
        </ErrorFooter>
      </CommomBox>
    </CommonWrap>
  );

}


export const CommonWrap = styled.div`
  ${flex({justify : 'center'})};
  width: 100%;
  background-color: black;
  position : ${props => props.visible ? 'absolute' : 'static'};
  display : ${props => props.visible ? 'flex' : 'hidden'};
  z-index : 2;
`;

export const CommomBox = styled.div`
  ${flex({direction : 'column', justify : 'center'})}
  width : calc(100vh - 55vh);
  background-color: #f6f6f6;
`;

export const ErrorImgBox = styled.div`
  width : calc(100vh - 55vh);
  box-sizing : border-box;
  overflow: hidden;
  ${flex({})};
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
`
export default Error;