import styled from "styled-components";
import flex from "../GlobalStyled/flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons";
import { faHouseChimneyWindow } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FooterWrap, FooterIcon } from "./Footer";
import { useState, useEffect } from "react";
import { getCookie } from "../../Shared/Cookie";

const FooterIsLogin = ({socket}) => {
  const navigate = useNavigate();
  const [ room, setRoom ] = useState('');
  const loginUser = getCookie('userName');
  useEffect(() => {
    setRoom(1)
  }, [loginUser]);

  const joinChat = (event) => {
    socket.emit('update', room);
    console.log( `${loginUser}께서 채팅방에 입장하셨습니다.`)
  };

  const joinChatHandler = (event) => {
    console.log('hello')
    navigate('/chats');
    joinChat(event);    
  }

  return (
     <>
    <FooterWrap>
      <FooterIcon>
        <FontAwesomeIcon onClick = {()=> navigate('/mypage')} icon  = {faHouseChimneyWindow}></FontAwesomeIcon>
        <span className = "menu__title">내 홈피</span>
      </FooterIcon>
      <FooterIcon>
        <FontAwesomeIcon onClick = {()=> navigate('/home')} icon  = {faWind}></FontAwesomeIcon>
        <span className = "menu__title">파도타기</span>
      </FooterIcon>
      <FooterIcon onClick = {(e) => {joinChatHandler(e)}}>
        {/* <FontAwesomeIcon icon  = {faComments}></FontAwesomeIcon>
        <span className = "menu__title">와글와글</span> */}
      </FooterIcon>
      <FooterIcon>
        <FontAwesomeIcon onClick = {()=> navigate('/home')}icon  = {faFaceLaugh}></FontAwesomeIcon>
        <span className = "menu__title">마이 페이지</span>
      </FooterIcon>
    </FooterWrap>
    </>
  );
}

export default FooterIsLogin;
