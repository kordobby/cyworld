import E1 from '../../Public/Images/E1.png';
import { GreetMsg } from "../UserComponents/Greetings";
import { CommonWrap, CommonBox, ErrorImgBox, ErrorMsg, ErrorFooter } from "../Common/Error";
import { CommonBtn } from  '../../Components/UserComponents/Greetings';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
        <CommonWrap className = "splash__msg">
          <CommonBox>
            <ErrorImgBox className = "splash__msg">
              <img src = {E1} alt = ""/>
            </ErrorImgBox>
            <ErrorMsg className = "splash__msg">
              <span>ㄷr시 만나서 반ㄱr워.</span>
            </ErrorMsg>
            <GreetMsg className = "splash__msg">오랜만이야? 잘 지냈지?</GreetMsg>
            <ErrorFooter className = "splash__msg">
              <CommonBtn onClick = {()=> navigate('/home')}>싸이월드 들어가기</CommonBtn>
            </ErrorFooter>
          </CommonBox>
        </CommonWrap>
  );
}

export default Welcome;