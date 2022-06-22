import { FriendsImg } from './MainStyled';
import flex from '../../Components/GlobalStyled/flex';
import styled from 'styled-components';
import none from '../../Public/Images/none.png';
const Surfing = ( {msg, img, userName} ) => {

  return (
    <FriendBox>
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