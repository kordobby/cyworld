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
  background-color: ${props => props.theme.bgColor2};
  border-color: ${props => props.theme.bgColor};;
  ${flex({justify : 'space-around'})};
  z-index : 5;
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
    /* height : 513px;
    overflow: scroll;
    font-size : 14px;
    box-sizing: content-box;
    ${flex({align : 'flex-start', justify : 'flex-end' , direction : 'column'})}
    & > .message {
      width : calc(100vh - 55vh);
      margin-bottom : 15px;
      & > .message-meta {
      font-size : 15px;
      margin-top : 5px;
      margin-left : 5px;
      color : #6E6E6E;
     }
    }
    & > #you {
      display : flex;
      justify-content: flex-end;
      margin-left: 15px;
     }
    & > #other {
      display : flex;
      justify-content: flex-start;
      margin-right: 15px;
     } */
`

export const ChatInputBox = styled.div`
  height : 80px;
  position: relative;
  width : calc(100vh - 53vh);
  ${flex({justify : 'center'})};
  background-color: ${props => props.theme.bgColor3};
  &::placeholder {
    color : var(--black);
  }
`