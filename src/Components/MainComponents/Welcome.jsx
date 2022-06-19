import E1 from '../../Public/Images/E1.png';
import { GreetMsg } from "../UserComponents/Greetings";
import { CommonWrap, CommomBox, ErrorImgBox, ErrorMsg, ErrorFooter } from "../Commom/Error";
import { CommomBtn } from  '../../Components/UserComponents/Greetings';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
        <CommonWrap className = "splash__msg">
          <CommomBox>
            <ErrorImgBox className = "splash__msg">
              <img src = {E1}/>
            </ErrorImgBox>
            <ErrorMsg className = "splash__msg">
              <span>ㄷr시 만나서 반ㄱr워.</span>
            </ErrorMsg>
            <GreetMsg className = "splash__msg">오랜만이야? 잘 지냈지?</GreetMsg>
            <ErrorFooter className = "splash__msg">
              <CommomBtn onClick = {()=> navigate('/home')}>싸이월드 들어가기</CommomBtn>
            </ErrorFooter>
          </CommomBox>
        </CommonWrap>
  );
}

export default Welcome;