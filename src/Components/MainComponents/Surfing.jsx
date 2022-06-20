import { FriendsImg } from './MainStyled';
import flex from '../../Components/GlobalStyled/flex';
import styled from 'styled-components';
import none from '../../Public/Images/none.png';
const Surfing = ( {msg, img, userName} ) => {

  return (
    <FriendBox>
      { img === "" ?
         <FriendsImg src = {none}></FriendsImg>
       : <FriendsImg src = {img}></FriendsImg>
      }
    <FriendsProfile>
      <span>{userName}</span>
      <span>msg : {msg}</span>
      <span>img : {img}</span>
    </FriendsProfile>
  </FriendBox>
  );
}

const FriendBox = styled.div`
  height : 111px;
  width : 95%;
  background-color: ${props => props.theme.bgColor4};
  border-radius: 10px;
  margin: 5px 0 5px 0;
  ${flex({})}
`

const FriendsProfile = styled.div`
  height: 80px;
  width : 60%;
  ${flex({ direction : 'column', justify : 'center', align : 'flex-start'})}
`

export default Surfing;