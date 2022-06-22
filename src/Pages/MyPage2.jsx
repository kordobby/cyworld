/* Style */
import styled from 'styled-components';
import flex from '../Components/GlobalStyled/flex';

import { BodyBox } from "../Components/UserComponents/UserStyled";
import { MainWrap, MenuBox, Menus, MenuTitle, MenuBar, Followers, FollowerList, OfficialBox, OfficialTitle, FollowersWrap, StWrap, FriendsImg } from '../Components/MainComponents/MainStyled';
import HeaderIsLogin from '../Components/Common/HeaderIsLogin';
import FooterIsLogin from '../Components/MainComponents/FooterIsLogin';
import { HeaderBox, LOGO, UserBtn } from '../Components/Common/Header';
import M1 from '../Public/Images/M1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';

const MyPage2 = ( {leaveChatHandler, joinChat, token, themeMode, loginState, logout, socket, loginUser } ) => {

  return (
    <>

    <StWrap>
      <BodyBox>
        <MainWrap>
          <MyHomeHeader>
            <div>
              <FontAwesomeIcon icon = {faGear}></FontAwesomeIcon>
              <FontAwesomeIcon style = {{marginLeft : '20px'}} icon = {faShareFromSquare}></FontAwesomeIcon>
              <FontAwesomeIcon style = {{marginLeft : '20px'}} icon = {faWind}></FontAwesomeIcon>
            </div>
          </MyHomeHeader>
          <FollowersWrap>
            <FollowerList style = {{height : '650px'}}>
              <MyHomeTitle>
                <span className = "mini-hp__title">사이좋은 사람들, 싸이월드</span>
                <button className = "mini-hp__btn">EDIT</button>
              </MyHomeTitle>
              <MyHomeBox>
                <div className = "profile__header">
                  <FriendsImg alt = "" />
                  <div className = "profile__header--text">
                    <div className = "profile__header--today">
                      <span>TODAY</span>
                      <span>42</span>
                      <span>l</span>
                      <span>999</span>
                    </div>
                    <span className = "profile__header--name">김사이</span>
                    <span className = "profile__header--state">사이좋은 사람들</span>
                    <span className = "profile__header--state">싸이월드</span>
                  </div>
                </div>
                <div className = "profile__footer">
                  <span className = "profile__footer--state">TODAY IS.. 🎶</span>
                  <div className = "profile__footer--menus">
                    <span>일촌</span>
                    <span>999</span>
                  </div>
                  <div className = "profile__footer--menus">
                    <span>즐겨찾기</span>
                    <span>999</span>
                  </div>
                </div>
              </MyHomeBox>
              <MyHomeSmall >

              </MyHomeSmall>
              <MyHomeSmall >
                <div className = "menu__elem">
                  <span>다이어리</span>
                  <span>999</span>
                  <span>/999</span>
                </div>
                <div className = "menu__elem">
                  <span>사진첩</span>
                  <span>99</span>
                  <span>/999</span>
                </div>
              </MyHomeSmall>
              <MyHomeBox
                style = {{marginTop : '15px', height : '250px', alignItems : 'flex-start', paddingLeft : '19px', boxSizing : 'border-box'}}>
                  <span style = {{ color : 'var(--blue)', fontWeight : '700', fontSize : '15px'}}>MINIROOM</span>
                  <img src = {M1} alt = ""></img>
              </MyHomeBox>
            </FollowerList>
          </FollowersWrap>
          <FooterIsLogin leaveChatHandler = {leaveChatHandler} socket = {socket} joinChat = {joinChat} themeMode ={themeMode}/>
        </MainWrap>
      </BodyBox>
    </StWrap>
    </>
  );
}

const MyHomeHeader = styled.div`
  width : calc(100vh - 53vh);
  height : 93px;

  ${flex({align : 'flex-end', justify : 'flex-end'})};
  box-sizing: border-box;

  background-color: ${props => props.theme.bgColor3};

  color : white;
  font-size: 20px;
  padding : 15px;
`
const MyHomeTitle = styled.div`
  width : calc(100vh - 57vh);
  box-sizing: border-box;
  padding : 0 5px 0 5px;
  margin : 6px 0 12px 0;
  ${flex({ justify : 'space-between'})};
  & > .mini-hp__title {
    font-size : 16px;
  }
  & > .mini-hp__btn {
    font-size: 3px;
    background-color: var(--blue);
    color : white;
    padding : 1px 4px 1px 4px;
    border : none;
    border-radius: 2px;
  }
`
const MyHomeBox = styled.div`
  width : calc(100vh - 57vh);
  height : 170px;
  ${flex({direction : 'column', justify : 'center'})};
  border-radius: 10px;
  background-color: ${props => props.theme.bgColor};
`

const MyHomeSmall = styled.div`
  width : calc(100vh - 57vh);
  height :60px;
  ${flex({ align : 'center'})};
  padding : 0 20px 0 20px;
  box-sizing : border-box;
  border-radius: 10px;
  background-color: ${props => props.theme.bgColor};
  margin-top : 15px;
`
export default MyPage2;