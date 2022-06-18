import styled from 'styled-components';
import { BodyBox, LoginWrap } from '../Pages/Login';
import flex from '../Components/GlobalStyled/flex';
import Header from '../Components/Header';
import HeaderIsLogin from '../Components/HeaderIsLogin';
const Main = ( {token} ) => {

  return (
    <BodyBox>
      <LoginWrap>
        { token ? <HeaderIsLogin/> : <Header/>}
        <MenuBar>
        </MenuBar>
        <Followers>
          <span>파도타기</span>
        </Followers>
        <FollowerList>
          <FriendBox>
            <FriendsImg></FriendsImg>
            <FriendsProfile>
              <span>이윤</span>
              <span>인생은 쓰다</span>
              <span>참말로</span>
            </FriendsProfile>
          </FriendBox>
          <FriendBox/>
          <FriendBox/>
          <FriendBox/>
          <FriendBox/>
          <FriendBox/>
          <FriendBox/>
          <FriendBox/>
        </FollowerList>
        <OfficalBox>
        </OfficalBox>
        <MainFooter></MainFooter>
      </LoginWrap>
    </BodyBox>
  );
}

const MenuBar = styled.div`
  height : 76px;
  width : calc(100vh - 55vh);
  position : fixed;
  top : 93px;
`
const Followers = styled.div`
  height : 77px;
  width : calc(100vh - 55vh);
  background-color: var(--input-grey);
  color : var(--black);
  font-size: 19px;
  font-weight : 700;
  padding : 0 0 15px 15px;
  box-sizing: border-box;
  position : fixed;
  top : 168px;
  ${flex({align : 'flex-end', justify : 'space-between'})};
`

const FollowerList = styled.div`
  margin-top: 245px;
  margin-bottom: 217px;
  height : 100%;
  width : 100%;
  background-color : var(--input-grey);
  box-sizing: border-box;
  padding-top : 5px;
  overflow: auto;
  ${flex({align : 'center', justify : 'flex-start' , direction : 'column'})};
`

const FriendBox = styled.div`
  height : 111px;
  width : 95%;
  background-color: white;
  border-radius: 10px;
  margin: 5px 0 5px 0;
  ${flex({})}
`

const FriendsImg = styled.div`
  width : 80px;
  height: 80px;
  background-color: #C2E8F6;
  border-radius: 30px;
  margin-left: 18px;
  margin-right: 18px;
`

const FriendsProfile = styled.div`
  height: 80px;
  width : 60%;
  ${flex({ direction : 'column', justify : 'center', align : 'flex-start'})}
`
const OfficalBox = styled.div`
  ${flex({justify : 'center'})}
  height : 136px;
  width : calc(100vh - 55vh);
  position : fixed;
  bottom : 74px;
  background-color: white;
`

const MainFooter = styled.div`
  height : 74px;
  width : calc(100vh - 55vh);
  background-color: white;
  position : fixed;
  bottom : 0;
`

export default Main;