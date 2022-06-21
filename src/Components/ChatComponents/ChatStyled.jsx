import styled from 'styled-components';
import flex from '../GlobalStyled/flex';

export const ChatWrap = styled.div`
  ${flex({direction : 'column', justify : 'center'})}
  height : 100%;
  padding-top : 20px;
  margin-top: 160px;
  /* overflow: hidden; */
  width : calc(100vh - 53vh);
  /* background-color : ${props => props.main ? 'var(--input-grey)' : 'white'}; */
  background-color: ${props => props.theme.bgColor2};
`
export const ChatHeaderWrap = styled.div`
  height : 76px;
  width : calc(100vh - 53vh);
  position : fixed; 
  top : 87px;
  background-color: ${props => props.theme.bgColor2};
  border-color: ${props => props.theme.bgColor};;
  ${flex({justify : 'space-around'})};
`

export const ChatHeader = styled.div`
  height : 100%;
  width : calc(100vh - 53vh);
  ${flex({justify : 'center', align : 'flex-end'})};
  font-size: 20px;
  box-sizing: border-box;
  border-bottom: 3px solid var(--orange);
  padding-bottom: 15px;
  cursor : pointer;
  background-color: ${props => props.theme.bgColor};
  color : ${props => props.active? 'var(--orange)' : 'var(--black)'};
`

export const ChatTitle = styled.span`
  color : ${props => props.active? 'var(--orange)' : 'var(--black)'};
`
export const ChatBox = styled.div`
    height : 100vh;
    width : calc(100vh - 53vh);
    ${flex({justify: 'flex-end', align : 'flex-start', direction : 'column'})}
    box-sizing: border-box;
    overflow: scroll;
  & > .others {
      ${flex({align : 'center', justify : 'flex-start'})}
      margin-left : 20px;
      margin-bottom: 10px;
      & > .chat-box {
          ${flex({align : 'center', justify : 'flex-start'})}
          height : 50px;
          width : 100%;
          background-color: var(--orange);
          border-radius: 10px;
          box-sizing : border-box;
          padding-left: 15px;
          padding-right : 15px;
          overflow-wrap: break-word;
          word-break: break-word;
    }
  }

  & > .mine {
      ${flex({align : 'center', justify : 'flex-end'})}
      width : 100%;
      height :50px;
      margin-bottom: 10px;
      box-sizing: border-box;
      & > .chat-box {
          ${flex({align : 'center', justify : 'center'})}
          height : 50px;
          background-color: var(--orange);
          border-radius: 10px;
          box-sizing : border-box;
          padding-left: 10px;
          padding-right : 10px;
          margin-right : 20px;
          overflow-wrap: break-word;
          word-break: break-word;
    }}
`

export const ChatInputBox = styled.div`
  position : fixed;
  height : 80px;
  bottom : 70px;
  width : calc(100vh - 53vh);
  ${flex({justify : 'center'})};
  background-color: ${props => props.theme.bgColor3};
`