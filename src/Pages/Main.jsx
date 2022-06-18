import styled from 'styled-components';
import { BodyBox, LoginWrap } from '../Pages/Login';
import flex from '../Components/GlobalStyled/flex';
import Header from '../Components/Header';
import HeaderIsLogin from '../Components/HeaderIsLogin';
import { useSelector } from 'react-redux';
import Surfing from '../Components/Surfing';
import { useState } from 'react';
import { keyframes } from 'styled-components';
import Footer from '../Components/UserComponents/Footer';

const Main = ( {token} ) => {

  const [ active, setActive ] = useState(true);
  
  const surfList = useSelector((state) => state.surfReducer?.list);
  console.log(surfList);


  const activeMenuHandler = () => {
    setActive(!active);
  }
  console.log(active);

  return (
    <BodyBox>
      <LoginWrap>
        { token ? <HeaderIsLogin/> : <Header/>}
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
          {/* <MenuBar></MenuBar> */}
        </MenuBox>
        <Followers>
          <span>파도타기</span>
        </Followers>
        <FollowerList>
          <Surfing></Surfing>
          <Surfing></Surfing>
          <Surfing></Surfing>
          <Surfing></Surfing>
          <Surfing></Surfing>
          { surfList?.map((value) => { 
          return (
          <Surfing
            key = {value.postId}
          ></Surfing> )})}
        </FollowerList>
        <OfficialBox>
          <OfficialTitle>
            <span>미니홈피 Official</span>
          </OfficialTitle>
          <OfficialLists>
           <FriendsImg official/><FriendsImg official/><FriendsImg official /><FriendsImg official/>
          </OfficialLists>
        </OfficialBox>
        <Footer/>
      </LoginWrap>
    </BodyBox>
  );
}

const MenuBox = styled.div`
  height : 76px;
  width : calc(100vh - 55vh);
  position : fixed;
  top : 93px;
  background-color: white;
  ${flex({justify : 'space-around'})};
`
const Menus = styled.div`
  height : 100%;
  width : calc(100vh - 79vh);
  ${flex({justify : 'center', align : 'flex-end'})};
  font-size: 20px;
  box-sizing: border-box;
  padding-bottom: 15px;
  cursor : pointer;
  color : ${props => props.active? 'var(--orange)' : 'var(--black)'};
`
const MenuTitle = styled.span`
  color : ${props => props.active? 'var(--orange)' : 'var(--black)'};
`
const MenuMotion = keyframes`
  from {
    transform: scale(1.0);
  }
  to {
    transform: scale(1.2);
  }
`

const MenuBar = styled.div`
  height : 5px;
  width : calc(100vh - 78vh);
  background-color: var(--orange);
  border-radius: 10px;
  position : absolute;
  top : 70px;
  left : 4px;
  z-index: 5;
  left : ${props => props.active? '4px' : '178px'}; 
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
  margin-bottom: 210px;
  height : 100%;
  width : 100%;
  background-color : var(--input-grey);
  box-sizing: border-box;
  padding-top : 5px;
  overflow: auto;
  ${flex({align : 'center', justify : 'flex-start' , direction : 'column'})};
`

export const FriendsImg = styled.div`
  width : 80px;
  height: 80px;
  background-color: #C2E8F6;
  border-radius: 30px;
  /* margin-left: 18px;
  margin-right: 18px; */
  margin : ${props => props.official? '0' : '0 18px 0 18px'}; 
`

const OfficialBox = styled.div`
  ${flex({ direction : 'column'})}
  height : 136px;
  width : calc(100vh - 55vh);
  position : fixed;
  bottom : 74px;
  background-color: var(--input-grey);
`
const OfficialTitle = styled.div`
  width : calc(100vh - 55vh);
  height : 30%;
  color : var(--black);
  ${flex({align : 'flex-end', justify : 'flex-start'})};
  padding : 15px 0 0 15px;
  box-sizing: border-box;
  font-size: 19px;
  font-weight : 700;
`

const OfficialLists = styled.div`
  height : 70%;
  width : calc(100vh - 55vh);
  box-sizing: border-box;
  ${flex({align : 'center', justify : 'space-around'})}
`
// const MainFooter = styled.div`
//   height : 74px;
//   width : calc(100vh - 55vh);
//   background-color: var(--blue);
//   position : fixed;
//   bottom : 0;
// `

export default Main;