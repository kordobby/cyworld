import { FriendsImg } from './MainStyled';
import flex from '../../Components/GlobalStyled/flex';
import styled from 'styled-components';
import none from '../../Public/Images/none.png';

import { useNavigate } from 'react-router-dom';

const Surfing = ( {userId, msg, img, userName} ) => {
  const navigate = useNavigate()
  // const onClick = (e)=> {
  //   e.preventDefault();
  //   navigate('`/page/${key}`')
  // }
  //navigate 안에 params를 써서 옮기는 방법은 없는 건가?
  //1. 하... 바보 같은 짓으로 시간 너무 많이 뺏김. 바보 같은 짓 결과의 정확한 이유를 알아내자...
  //2. 위 {userId, msg, img, userName} 여기에 key를 넣고 key에 적힌 userId를 가져오려고 했었음... 그러면 안 돼.... 저건 고유 값을 지정한 거야
  return (
    <FriendBox style={{cursor:"pointer"}} onClick={()=>{navigate(`/page/${userId}`)}}>
      { img === "" ?

         <FriendsImg src = {none} alt = ""></FriendsImg>
       : <FriendsImg src = {`https://hanghae-mini-project.s3.ap-northeast-2.amazonaws.com/${img}`} alt = ""></FriendsImg>
      }
    <FriendsProfile>
      <span className = "profile_msg" >{userName}</span>
      { img === "" ?
         <span>{userName}님의 미니홈피</span> : <span>{msg}</span>
      }
    </FriendsProfile>
  </FriendBox>
  );
}


const FriendBox = styled.div`
  min-height : 120px;
  width : calc(100vh - 58vh);
  background-color: ${props => props.theme.bgColor4};
  border-radius: 10px;
  margin: 5px 0 5px 0;
  ${flex({})}
`

const FriendsProfile = styled.div`
  height: 80px;
  width : 60%;
  ${flex({ direction : 'column', justify : 'center', align : 'flex-start'})}
  & > .profile_msg {
    margin-bottom : 10px;
  }
`

export default Surfing;