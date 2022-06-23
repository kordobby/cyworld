import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery, useMutation } from "react-query";
import axios from "axios";

import Modal from "../Components/Modal";
import { patchMyDB, loadMyDB } from "../redux/modules/myPageReducer";

// font
import styled from "styled-components";
import flex from "../Components/GlobalStyled/flex";
import M1 from "../Public/Images/M1.png";

import { Audio } from "./MyPage";
import FooterIsLogin from "../Components/MainComponents/FooterIsLogin";
import { BodyBox } from "../Components/UserComponents/UserStyled";
import {
  MainWrap,
  MenuBox,
  Menus,
  MenuTitle,
  MenuBar,
  Followers,
  FollowerList,
  OfficialBox,
  OfficialTitle,
  FollowersWrap,
  StWrap,
  FriendsImg,
} from "../Components/MainComponents/MainStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import none from "../Public/Images/none.png";

const DetailPage = ({
  leaveChatHandler,
  joinChat,
  themeMode,
  loginState,
  logout,
  socket,
  loginUser,
}) => {
  const { userId } = useParams();
  //   const dispatch = useDispatch();
  const [img, setImg] = useState(null);

  // useQurey 정보

  const Detailfetcher = async () => {
    const DetailData = await axios.get(
      `http://3.39.161.93:3000/api/page/${userId}`
    );
    setImg(DetailData?.data.user.imageUrl);
    return DetailData?.data.user;
  };

  const {
    data: detaildata,
    isLoading,
    isSuccess,
    isError,
  } = useQuery("detaildata", Detailfetcher);

  // useQurey 노래

  const Playlistfetcher = async () => {
    const PlayData = await axios.get(
      `http://3.39.161.93:3000/api/playlists/${detaildata?.playlist}`
    );

    return PlayData?.config.url;
  };

  const { data: playlistdata } = useQuery("playlistdata", Playlistfetcher);

  return (
    <>
      <StWrap>
        <BodyBox>
          <MainWrap>
            <MyHomeHeader>
              <div>
                <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                <FontAwesomeIcon
                  style={{ marginLeft: "20px" }}
                  icon={faShareFromSquare}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  style={{ marginLeft: "20px" }}
                  icon={faWind}
                ></FontAwesomeIcon>
              </div>
            </MyHomeHeader>
            <FollowersWrap>
              <FollowerList style={{ height: "672px" }}>
                <MyHomeTitle>
                  <span className="mini-hp__title">
                    사이좋은 사람들, 싸이월드
                  </span>
                </MyHomeTitle>

                <MyHomeBox>
                  <div className="profile__header">
                    {img === "" ? (
                      <FriendsImg src={none} alt=""></FriendsImg>
                    ) : (
                      <FriendsImg
                        src={`https://hanghae-mini-project.s3.ap-northeast-2.amazonaws.com/${img}`}
                        alt=""
                      ></FriendsImg>
                    )}
                    <div className="profile__header--text">
                      <div className="profile__header--today">
                        <span>TODAY</span>
                        <span>42</span>
                        <span>l</span>
                        <span>999</span>
                      </div>
                      <span className="profile__header--name">
                        {detaildata?.User.username}
                      </span>
                      <span className="profile__header--state">
                        {detaildata?.introMessage}
                      </span>
                    </div>
                  </div>
                  <div className="profile__footer">
                    <span className="profile__footer--state">
                      TODAY IS.. 🎶
                    </span>
                    <div className="profile__footer--menus">
                      <span>일촌</span>
                      <span>999</span>
                    </div>
                    <div className="profile__footer--menus">
                      <span>즐겨찾기</span>
                      <span>999</span>
                    </div>
                  </div>
                </MyHomeBox>
                <MyHomeSmall>
                  <Audio src={playlistdata} controls />
                </MyHomeSmall>
                <MyHomeSmall>
                  <div className="menu__elem">
                    <span>다이어리</span>
                    <span>999</span>
                    <span>/999</span>
                  </div>
                  <div className="menu__elem">
                    <span>사진첩</span>
                    <span>99</span>
                    <span>/999</span>
                  </div>
                </MyHomeSmall>
                <MyHomeBox
                  style={{
                    marginTop: "15px",
                    height: "250px",
                    alignItems: "flex-start",
                    paddingLeft: "19px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      color: "var(--blue)",
                      fontWeight: "700",
                      fontSize: "15px",
                    }}
                  >
                    MINIROOM
                  </span>
                  <img src={M1} alt=""></img>
                </MyHomeBox>
              </FollowerList>
            </FollowersWrap>
            <FooterIsLogin
              leaveChatHandler ={leaveChatHandler}
              socket={socket}
              joinChat={joinChat}
              themeMode={themeMode}
            />
          </MainWrap>
        </BodyBox>
      </StWrap>
    </>
  );
};

const MyHomeHeader = styled.div`
  width: calc(100vh - 53vh);
  height: 93px;

  ${flex({ align: "flex-end", justify: "flex-end" })};
  box-sizing: border-box;

  background-color: ${(props) => props.theme.bgColor3};

  color: white;
  font-size: 20px;
  padding: 15px;
`;

const MyHomeTitle = styled.div`
  width: calc(100vh - 57vh);
  box-sizing: border-box;
  padding: 0 5px 0 5px;
  margin: 6px 0 12px 0;
  ${flex({ justify: "space-between" })};
  & > .mini-hp__title {
    font-size: 16px;
    color: ${props => props.theme.textColor3};
  }
  & > .mini-hp__btn {
    font-size: 3px;
    background-color: var(--blue);
    color: white;
    padding: 1px 4px 1px 4px;
    border: none;
    border-radius: 2px;
  }
`;

const MyHomeBox = styled.div`
  color: ${props => props.theme.textColor2};
  width: calc(100vh - 57vh);
  height: 170px;
  ${flex({ direction: "column", justify: "center", align : "center" })};
  border-radius: 10px;
  background-color: ${(props) => props.theme.bgColor5};
  & > .mini_room {
    width: calc(100vh - 60vh);
  }
`;

const MyHomeSmall = styled.div`
  color: ${props => props.theme.bgColor4};
  width: calc(100vh - 57vh);
  height: 60px;
  ${flex({ align: "center" })};
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${(props) => props.theme.bgColor5};
  margin-top: 15px;
`;

//Modal;
const Modal_div1 = styled.form`
  width: 100%;
  /* height: 60px; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default DetailPage;
