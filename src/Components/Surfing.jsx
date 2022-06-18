import { FriendsImg } from "../Pages/Main";
import flex from '../Components/GlobalStyled/flex';
import styled from 'styled-components';

const Surfing = () => {


  return (
    <FriendBox>
    <FriendsImg></FriendsImg>
    <FriendsProfile>
      <span>이윤</span>
      <span>인생은 쓰다</span>
      <span>참말로</span>
    </FriendsProfile>
  </FriendBox>
  );
}

const FriendBox = styled.div`
  height : 111px;
  width : 95%;
  background-color: white;
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