import HeaderIsLogin from "../Components/Common/HeaderIsLogin";
import { BodyBox } from "../Components/UserComponents/UserStyled";
import { StWrap } from "../Components/MainComponents/MainStyled";
import { ChatBox } from "../Components/ChatComponents/ChatStyled";
import FooterIsLogin from "../Components/MainComponents/FooterIsLogin";
import { BackgroundDiv, ChatInputBox, ChatHeader, ChatHeaderWrap, ChatTitle, ChatWrap } from "../Components/ChatComponents/ChatStyled";
import { InputStyle } from "../Components/UserComponents/UserStyled";
const Chat = () => {


  return (
    <>
    <StWrap>
      <BodyBox>
          <HeaderIsLogin/>
          <ChatHeaderWrap>
            <ChatHeader>
              <ChatTitle>와글와글!</ChatTitle>
            </ChatHeader>
          </ChatHeaderWrap>
          <ChatWrap>
          <ChatBox>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div className = "others">
              <div className = "chat-box">
                <span>hello</span>
              </div>
          </div>
          <div style = {{height : '150px'}}></div>
          </ChatBox>
          <ChatInputBox>
           <InputStyle></InputStyle>
          </ChatInputBox>
          <FooterIsLogin/>
        </ChatWrap>
      </BodyBox>
    </StWrap>

    </>
  )
}

export default Chat;