import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery, useMutation } from "react-query";
import axios from "axios";

import Modal from "../Components/Modal";
import { patchMyDB, loadMyDB } from "../redux/modules/myPageReducer";

// font
import styled from "styled-components";
import flex from "../Components/GlobalStyled/flex";
import M1 from "../Public/Images/M1.png";

import FooterIsLogin from "../Components/MainComponents/FooterIsLogin";
import { BodyBox } from "../Components/UserComponents/UserStyled";
import {
  MainWrap,
  FollowerList,
  FollowersWrap,
  StWrap,
  FriendsImg,
} from "../Components/MainComponents/MainStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import none from "../Public/Images/none.png";
import upload from "../Public/Images/Upload_real.png";

const MyPage = ({
  leaveChatHandler,
  joinChat,
  token,
  themeMode,
  loginState,
  logout,
  socket,
  loginUser,
}) => {
  // console.log(props.children)

  // hooks
  const dispatch = useDispatch();
  const mypageData = useSelector((state) => state.mypageReducer.intialstate);

  // states
  const [imageUrl, setFiles] = useState("");
  const [introMessage, setMessage] = useState(null);
  const [music, setMusic] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect
  useEffect(() => {
    dispatch(loadMyDB(token));
    dispatch(Playlistfetcher(mypageData?.playlist));
  }, [dispatch, mypageData?.imageUrl, mypageData?.introMessage]);

  // events
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    console.log("hello");
    setModalOpen(false);
  };
  const onClick = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("image", imageUrl);
    formData.append("introMessage", introMessage);

    const patchData = await axios({
      method: "patch",
      url: "http://3.39.161.93:3000/api/mypage",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(patchMyDB({ patchData }));
    setModalOpen(false);
  };

  // useQuery data - get
  const Playlistfetcher = (payload) => {
    return async function (dispatch) {
      const PlayData = await axios.get(
        `http://3.39.161.93:3000/api/playlists/${payload}`
      );
      setMusic(PlayData?.config.url);
    };
  };

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
                  <button
                    className="mini-hp__btn"
                    onClick={openModal}
                    style={{ cursor: "pointer" }}
                  >
                    EDIT
                  </button>
                </MyHomeTitle>
                <React.Fragment>
                  <Modal
                    style={{
                      width: "100px",
                    }}
                    open={modalOpen}
                    close={closeModal}
                  >
                    {/* 여기 아래 내용들 Modal.jsx의 <Main> {props.children} <Main>으로 들어감 
                          children의 범위에 대해서 다른 HTML에서 콘솔로 확인해볼 것 !  */}
                    <>
                      <div
                        style={{
                          display: "flex",
                          align_items: "center",
                          position: "relative",
                          right: "-40px",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src={upload}
                          style={{
                            width: "140px",
                            height: "100px",
                          }}
                        />

                        <input
                          style={{
                            opacity: "0",
                            width: "75px",
                            height: "30px",
                            position: "relative",
                            right: "105px",
                            top: "40px",
                            cursor: "pointer",
                          }}
                          type="file"
                          id="files"
                          accept={"image/*"}
                          onChange={(event) => {
                            event.preventDefault();
                            setFiles(event.target.files[0]);
                          }}
                        />
                      </div>
                      <Input_context
                        type="text"
                        placeholder="            오늘의 기분을 적어주세요"
                        onChange={(event) => {
                          event.preventDefault();
                          setMessage(event.target.value);
                        }}
                      />

                      <Button onClick={onClick}>추가하기</Button>
                    </>
                  </Modal>
                </React.Fragment>

                <MyHomeBox>
                  <div className="profile__header">
                    {mypageData?.imageUrl === "" ? (
                      <FriendsImg src={none} alt=""></FriendsImg>
                    ) : (
                      <FriendsImg
                        src={`https://hanghae-mini-project.s3.ap-northeast-2.amazonaws.com/${mypageData?.imageUrl}`}
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
                        {mypageData?.User.username}
                      </span>
                      <span className="profile__header--state">
                        {mypageData?.introMessage}
                      </span>
                      <span className="profile__header--state">싸이월드</span>
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
                  <audio src={music} controls />
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
              leaveChatHandler={leaveChatHandler}
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
  width: calc(100vh - 57vh);
  height: 170px;
  ${flex({ direction: "column", justify: "center" })};
  border-radius: 10px;
  background-color: ${(props) => props.theme.bgColor};
`;

const MyHomeSmall = styled.div`
  width: calc(100vh - 57vh);
  height: 60px;
  ${flex({ align: "center" })};
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${(props) => props.theme.bgColor};
  margin-top: 15px;
`;

//Modal 안의 내용들

const Input_context = styled.input`
  background: #ffffff;
  border: 2px solid #90c8f7;
  border-radius: 10px;
  width: calc(60vh - 33vh);
  height: 25px;
  margin-bottom: 10px;
`;

const Button = styled.div`
  font-size: small;
  font-weight: bold;
  color: #1896c5;
  opacity: 0.8;
  cursor: pointer;
`;

export default MyPage;
