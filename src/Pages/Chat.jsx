import HeaderIsLogin from "../Components/Common/HeaderIsLogin";
import FooterIsLogin from "../Components/MainComponents/FooterIsLogin";

import { BodyBox, InputStyle } from "../Components/UserComponents/UserStyled";
import { StWrap, MainWrap } from "../Components/MainComponents/MainStyled";
import { ChatBox, ChatInputBox, ChatHeader, ChatHeaderWrap, ChatTitle } from "../Components/ChatComponents/ChatStyled";
import flex from "../Components/GlobalStyled/flex";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { getCookie } from "../Shared/Cookie";
import { useNavigate } from "react-router-dom";

const Chat = ( {socket, room, themeMode, logoutHandler} ) => {
  const navigate = useNavigate();
  const [ currentMsg, setCurrentMsg ] = useState('');
  const [ msgList, setMsgList ] = useState([]);
  console.log(msgList);
  const inputRef = useRef();
  const loginUser = getCookie('userName');

  const scrollRef = useRef();
  /* Scroll 공부! */
  const scrollToMyRef = () => {
     const scroll =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      scrollRef.current.scrollTo(0, scroll);
  };

  const sendChat = async(event) => {
    event.preventDefault();
    console.log('hi')
    if (currentMsg !== "") {
      const msgData = currentMsg;
      await socket.emit('message', msgData);
      setMsgList((list) => [...list]);
      inputRef.current.value = "";
    }
  }

  useEffect(() => {
    socket.on('update', (data) => {
      console.log(data);
      setMsgList((list) => [...list, data]);
  })
  }, [socket]);


  useEffect(() => {
    scrollToMyRef();
  }, [scrollToMyRef]);

  const leaveChat = (event) => {
    socket.disconnect('disconnect');
    console.log('나가기');
  };

  const leaveChatHandler = (event) => {
    console.log('bye');
    navigate('/home');
    // leaveChat(event);
  }

  return (
    <>
    <StWrap>
      <BodyBox>
       <MainWrap>
          <HeaderIsLogin themeMode ={themeMode} logout ={logoutHandler}/>
          <ChatHeaderWrap>
            <ChatHeader>
              <ChatTitle>와글와글!</ChatTitle>
            </ChatHeader>
          </ChatHeaderWrap>
          <ChatBox className ="chat-body">
            <div className = "message-container" ref = {scrollRef}>
          { msgList &&
            msgList.map((messageContent, i)=>{
        return (
          !messageContent.message ? (<div key = {i}></div>) : 
          <div 
          className='message'
          id={loginUser === messageContent.name ? "other" : "you"}
          key={i}
          >
          <div>
              <div className='message-content'>
                  <p>{messageContent.message}</p>
              </div>
              <div className='message-meta'>
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.name}</p>
              </div>
          </div>
      </div>
  );
})}
          </div>
          </ChatBox>
          <ChatInputBox>
           <InputStyle
              defaultValue = {currentMsg}
              placeholder='대화입력'
              onChange = { (event) => {setCurrentMsg(event.target.value)}}
              onKeyDown = { (event) => { event.key === 'Enter' && sendChat(); }}  ref = {inputRef}/>
           <ChatBtn onClick = {sendChat}><FontAwesomeIcon icon = {faPaperPlane}/></ChatBtn>
          </ChatInputBox>
          <FooterIsLogin leaveChatHandler = {leaveChatHandler}/>
        </MainWrap>
      </BodyBox>
    </StWrap>

    </>
  )
}

export default Chat;

const ChatBtn = styled.button`
width : 40px;
height: 40px;
${flex({ align : 'center', justify : 'center'})}

position: absolute;
right : 37px;
border : none;
border-radius: 24px;

background-color: ${props => props.theme.bgColor3};
color : white;
font-size: 20px;
cursor: pointer;

&:hover {
  background-color: ${props => props.disabled ? 'var(--input-text)' : 'var(--notice-green)'};
}
`
