import HeaderIsLogin from "../Components/Common/HeaderIsLogin";
import FooterIsLogin from "../Components/MainComponents/FooterIsLogin";

import { BodyBox, InputStyle } from "../Components/UserComponents/UserStyled";
import { StWrap, MainWrap } from "../Components/MainComponents/MainStyled";
import { ChatBox, ChatInputBox, ChatHeader, ChatHeaderWrap, ChatTitle } from "../Components/ChatComponents/ChatStyled";
import ScrollToBottom from 'react-scroll-to-bottom';
import flex from "../Components/GlobalStyled/flex";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { getCookie } from "../Shared/Cookie";

const Chat = ( {socket, room} ) => {
  const [ currentMsg, setCurrentMsg ] = useState('');
  const [ msgList, setMsgList ] = useState([]);
  const inputRef = useRef();
  const loginUser = getCookie('userName');

  const scrollRef = useRef();
  /* Scroll 공부! */
  const scrollToMyRef = () => {
     const scroll =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      scrollRef.current.scrollTo(0, scroll);
  };

  const sendChat = async() => {
    console.log('hi')
    if (currentMsg !== "") {
      const msgData = {
        room : room,
        author : loginUser,
        message : currentMsg,
        time : 
        new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      };
      await socket.emit('message', msgData);
      setMsgList((list) => [...list, msgData]);
      inputRef.current.value = "";
    }
  }

  useEffect(() => {
    scrollToMyRef();
    socket.on('chat', (data) => {
      setMsgList((list) => [...list, data]);
    })
  }, [socket, scrollToMyRef]);

  return (
    <>
    <StWrap>
      <BodyBox>
       <MainWrap>
          <HeaderIsLogin/>
          <ChatHeaderWrap>
            <ChatHeader>
              <ChatTitle>와글와글!</ChatTitle>
            </ChatHeader>
          </ChatHeaderWrap>
          <ChatBox ref = {scrollRef}>
            { msgList.map((value, index) => {
            return (
              <div key = {index}>
                <div
                  className = 'message'
                  id = {loginUser === value.author ? 'others' : 'user'}
                  key = {index}>
                </div>

                <div className = 'message-content'>
                  <p>{value.message}</p>
                </div>
                
                <div className = 'message-meta'>
                  <p id = 'time'>{value.time}</p>
                  <p id = 'author'>{value.author}</p>
                </div>
              </div>
            );
          })}
          </ChatBox>
          <ChatInputBox
            type = 'text'
            placeholder='대화입력'
            onChange = { (event) => {setCurrentMsg(event.target.value); console.log(currentMsg)}}
            onKeyDown = { (event) => {
              event.key === 'Enter' && sendChat();
            }}
            ref = {inputRef}
            >
           <InputStyle></InputStyle>
           <ChatBtn onClick = {sendChat}><FontAwesomeIcon icon = {faPaperPlane}/></ChatBtn>
          </ChatInputBox>
          <FooterIsLogin/>
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

background-color: var(--blue);
color : white;
font-size: 20px;
cursor: pointer;

&:hover {
  background-color: ${props => props.disabled ? 'var(--input-text)' : 'var(--notice-green)'};
}
`

const MyChatBox = styled.div`
  ${flex({justify : 'flex-end'})};
  margin-right : 15px;
  width : 100%;
  box-sizing : border-box;

  & > .myChat {
    ${flex({justify : 'flex-start', align : 'center'})};
    min-height : 50px;
    width : 100%;
    background-color: var(--orange); 
    border-radius: 10px;
    box-sizing : border-box;
    margin-left: 15px;
    padding-left: 15px;
    padding-right : 15px;  
    overflow-wrap: break-word;
    word-break: break-word;
  }
`

const OthersChatBox = styled.div`
  ${flex({justify : 'flex-start'})};
  margin-right : 15px;
  width : 100%;
  box-sizing : border-box;

  & > .myChat {
    ${flex({justify : 'flex-start', align : 'center'})};
    min-height : 50px;
    width : 100%;
    background-color: var(--orange); 
    border-radius: 10px;
    box-sizing : border-box;
    margin-left: 15px;
    padding-left: 15px;
    padding-right : 15px;  
    overflow-wrap: break-word;
    word-break: break-word;
  }
`