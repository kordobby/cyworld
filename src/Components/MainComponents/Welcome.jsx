import styled from "styled-components";
import flex from "../GlobalStyled/flex";
import E1 from '../../Public/Images/E1.png';
import { GreetMsg, CommomBtn } from "../UserComponents/Greetings";
import { useNavigate } from "react-router-dom";
import { CommonWrap, ErrorImgBox, ErrorMsg, ErrorFooter } from "../Commom/Error";
import { CommomBox } from "../Commom/Error";
const Welcome = () => {



  return (
    <CommonWrap>
      <CommomBox>
        <ErrorImgBox>
          <img src = {E1}/>
        </ErrorImgBox>
        <ErrorMsg>
          <span>ㄷr시 만나서 반ㄱr워.</span>
        </ErrorMsg>
        <GreetMsg>오랜만이야? 잘 지냈지?</GreetMsg>
        <ErrorFooter>
        </ErrorFooter>
      </CommomBox>
    </CommonWrap>

  );
}

export default Welcome;