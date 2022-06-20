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

/* Redux settings */
import { useDispatch, useSelector } from 'react-redux';
import { loadPostDB } from '../redux/modules/surfReducer';
import axios from 'axios';
/* React-query */
import { useQuery } from 'react-query';

const Main = ( {token, themeMode} ) => {
  const dispatch = useDispatch();
  const [ active, setActive ] = useState(true);
  const surfList = useSelector((state) => state.surfReducer?.list);
  console.log(surfList);

  useEffect(() => {
    dispatch(loadPostDB());
  }, [dispatch]);

  // const fetcher = async () => {
  //   const usersData = await axios.get('url');
  //   return usersData.data;
  // }
  // const { data, isLoading, error, isError } = useQuery('loginCheck', fetcher);
  // console.log(data);

  const activeMenuHandler = () => {
    setActive(!active);
  }

  return (
    <>
    {/* <Welcome/> */}
    <BodyBox>
      <MainWrap>
        { token ? <HeaderIsLogin/> : <Header themeMode ={themeMode} />}
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
        <FollowerList>
          <Surfing/><Surfing/><Surfing/><Surfing/><Surfing/>
          <Surfing/><Surfing/><Surfing/><Surfing/><Surfing/>
          <div className = "blank"></div>
          {/* { surfList?.map((value) => { 
          return (
          <Surfing
            key = {value.postId}
          ></Surfing> )})} */}
        </FollowerList>
        
        <OfficialBox>
          <OfficialTitle>
            <span>미니홈피 Official</span>
          </OfficialTitle>
          <OfficialProfile/>
        </OfficialBox>
        <Footer/>
      </MainWrap>
    </BodyBox>
    </>
  );
}

export default Main;