import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons";
import { faWind, faComments, faHouseChimneyWindow } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FooterWrap, FooterIcon } from "./Footer";
import { useState, useEffect } from "react";
import { getCookie } from "../../Shared/Cookie";
import { socket } from "../../App";

const FooterIsLogin = ({leaveChatHandler}) => {
  const navigate = useNavigate();
  const [ room, setRoom ] = useState('');
  const loginUser = getCookie('userName');
  
  useEffect(() => {
    setRoom('공지방')
  }, [loginUser]);

  const joinChat = (event) => {
    socket.emit('newUser', {
      name : loginUser,
      room : room
    });
  };

  const joinChatHandler = (event) => {
    navigate('/chats');
    joinChat(event);    
  }

  return (
     <>
    <FooterWrap>
      <FooterIcon onClick = {()=> navigate('/mypage')} >
        <FontAwesomeIcon icon  = {faHouseChimneyWindow}></FontAwesomeIcon>
        <span className = "menu__title">내 홈피</span>
      </FooterIcon>
      <FooterIcon onClick = {leaveChatHandler} >
        <FontAwesomeIcon icon  = {faWind}></FontAwesomeIcon>
        <span className = "menu__title">파도타기</span>
      </FooterIcon>
      <FooterIcon onClick = {(e) => {joinChatHandler(e)}}>
        <FontAwesomeIcon icon  = {faComments}></FontAwesomeIcon>
        <span className = "menu__title">와글와글</span>
      </FooterIcon>
      <FooterIcon onClick = {()=> alert('준비중인 서비스입니다!')}>
        <FontAwesomeIcon onClick = {()=> navigate('/home')} icon  = {faFaceLaugh}></FontAwesomeIcon>
        <span className = "menu__title">마이 페이지</span>
      </FooterIcon>
    </FooterWrap>
    </>
  );
}

export default FooterIsLogin;
