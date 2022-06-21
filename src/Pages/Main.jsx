/* React Settings */
import { useEffect, useState } from 'react';

/* import Styles */
  // Components
  import { BodyBox } from '../Components/UserComponents/UserStyled';
  import { MainWrap, MenuBox, Menus, MenuTitle, MenuBar, Followers, FollowerList, OfficialBox, OfficialTitle } from '../Components/MainComponents/MainStyled';
  import OfficialProfile from '../Components/MainComponents/OfficialProfile';
  import Header from '../Components/Common/Header';
  import HeaderIsLogin from '../Components/Common/HeaderIsLogin';
  import Surfing from '../Components/MainComponents/Surfing';
  import Footer from '../Components/MainComponents/Footer';
  import FooterIsLogin from '../Components/MainComponents/FooterIsLogin';
 import { FollowersWrap, StWrap, MainMsg } from '../Components/MainComponents/MainStyled';
/* Redux settings */
import { useDispatch, useSelector } from 'react-redux';
import { loadPostDB } from '../redux/modules/surfReducer';
import axios from 'axios';
/* React-query */
import { useQuery } from 'react-query';

const Main = ( {token, themeMode, loginState, logout} ) => {
  const dispatch = useDispatch();
  const [ active, setActive ] = useState(true);

  const fetcher = async () => {
    const usersData = await axios.get('http://3.39.161.93:3000/api/lobby');
    return usersData?.data;
  }
 
  const { data, isLoading, error, isError } = useQuery('loginCheck', fetcher);
  console.log(data);
  const activeMenuHandler = () => {
    setActive(!active);
  }

  return (
    <>
    {/* <Welcome/> */}
    <StWrap>
      <BodyBox>
        <MainWrap>
          { loginState ? <HeaderIsLogin logout = {logout}/> : <Header themeMode ={themeMode} />}
          <MenuBox>
            { active === true ?
            <>
            <Menus onClick = {activeMenuHandler}>
              <MenuTitle active>홈</MenuTitle>
            </Menus>
            <Menus onClick = {activeMenuHandler}>
              <MenuTitle>뮤직파도</MenuTitle>
            </Menus>
            <MenuBar active></MenuBar>
            </>
          :
          <>
          <Menus onClick = {activeMenuHandler}>
            <MenuTitle>홈</MenuTitle>
          </Menus>
          <Menus onClick = {activeMenuHandler}>
            <MenuTitle active>뮤직파도</MenuTitle>
          </Menus>
          <MenuBar></MenuBar>
          </>
          }
          </MenuBox>

          <Followers>
            <span>파도타기</span>
          </Followers>
          <FollowersWrap>
            <FollowerList>
              { data?.allUsers.map((value) => { 
              return (
              <Surfing
                key = {value.userId}
                msg = {value.introMessage}
                img = {value.imageUrl}
                userName = {value.User.username}
              ></Surfing> )})}
              <MainMsg>
                <span className = "main__message">내 일촌을 여기서 찾아봐요!</span>
              </MainMsg>
            </FollowerList>
          </FollowersWrap>
          <OfficialBox>
            <OfficialTitle>
              <span>미니홈피 Official</span>
            </OfficialTitle>
            <OfficialProfile/>
          </OfficialBox>
          { token ? <FooterIsLogin themeMode ={themeMode}/> : <Footer themeMode ={themeMode} />}
        </MainWrap>
      </BodyBox>
    </StWrap>
    </>
  );
}

export default Main;