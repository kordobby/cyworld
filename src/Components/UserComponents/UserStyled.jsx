import styled from 'styled-components';
import flex from '../GlobalStyled/flex';

/* export Styled Components */
export const BodyBox = styled.div`
  ${flex({justify : 'center'})};
  width: 100%;
  position : ${props => props.greeting ? 'absolute' : 'static'};
  display : ${props => props.greeting ? 'flex' : 'hidden'};
  z-index : 2;
  background-color: ${props => props.theme.bgColor};
  `;

export const LoginWrap = styled.div`
  ${flex({direction : 'column', justify : 'center'})}
  width : calc(100vh - 53vh);
  /* background-color : ${props => props.main ? 'var(--input-grey)' : 'white'}; */
  background-color: ${props => props.theme.bgColor};
`
export const LoginLogo = styled.div`
  width : calc(100vh - 53vh);
  height : 254px;
  padding-bottom: 45px;
  background-color: ${props => props.theme.bgColor};
  box-sizing : border-box;
  ${flex({align : 'flex-end', justify : 'center'})}
  & > .login__logo {
    width : calc(100vh - 60vh);
  }
`


export const UserInputBox = styled.div`
  width : calc(100vh - 60vh);
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;
`

export const InputStyle = styled.input`
  background-color: ${props => props.theme.inputColor};
  border : none;
  height : 52px;
  width : calc(100vh - 60vh);
  border-radius: 8px;
  box-sizing: border-box;
  padding-top : 5px;
  padding-left: calc(100vh - 98vh);
  margin-bottom : ${props => props.join ? '5px' : '0'};
  &::placeholder {
    color: ${props => props.theme.inputText};
    font-size: 18px; 
  }
`;


export const ButtonBox = styled.div`
  width : 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const UserButton = styled.button`
  background-color: ${props => props.theme.btnColor};
  border : none;
  height : 50px;
  width : calc(100vh - 60vh);
  border-radius: 10px;
  box-sizing: border-box;
  font-size : 18px;
  color : ${props => props.theme.btnText};
  padding : 0px 15px;
  cursor : pointer;
  &:hover {
    background-color: ${props => props.disabled ? 'var(--input-grey)' : 'var(--orange)'};
    color : white;
  }
`

export const LoginOptions = styled.div`
  height : 60px;
  color: ${props => props.theme.textColor};
  width : calc(100vh - 60vh);
  background-color: ${props => props.theme.bgColor};
  display : flex;
  justify-content: space-between;
  padding-top : 15px;
  font-size: 15px;
  box-sizing: border-box;
  & > .login__options{
    cursor : pointer;
  }
`

export const Advertisement = styled.div`
  width : calc(100vh - 55vh);  
  height : 225px;
  background-color: ${props => props.theme.bgColor};
  cursor : pointer;
  & > .join__ad-img {
    width : calc(100vh - 55vh);
    margin-right : 3px;
  }
`

export const LoginFooter = styled.div`
  width : 311px;
  margin-top : 88px;
  display : flex;
  flex-direction: column;
  font-size : 14px;
  color: ${props => props.theme.textColor};
  margin-bottom : 91px;
  & > .footer__service {
    width : 100%;
    display : flex;
    justify-content : space-between;
    & > .footer__service--each {
      cursor : pointer;
    }
  }
  & > .footer__copyright {
    margin-top : 20px;
    width : 100%;
    font-size: 10px;
    ${flex({justify : 'center'})};
    margin-bottom : 30px;
  }
`

/* Main used in Join-page */
export const JoinWrap = styled.div`
  width : calc(100vh - 60vh);
  height : 100%;
  padding-top : 75px;
  ${flex({ direction : 'column', justify : 'flex-start'})}
  position: relative;
`;

export const IdBox = styled.div`
  height : 100%;
  box-sizing : border-box;
${flex({align : 'flex-start', direction : 'column'})}
  margin-bottom: 28px;
  /* position: relative; */
`

export const JoinTitle = styled.div`
  height : 86px;
  width : calc(100vh - 60vh);
  ${flex({ align : 'flex-end', justify : 'flex-start'})}
  margin-bottom: 32px;
  font-size : 25px;
  color : var(--orange);
`
/* 섹션별 title */
export const SignUpTitles = styled.span`
  margin-bottom: 7px;
  font-size: 18px;
  color : var(--orange);
`
export const SignUpNotice = styled.span`
  margin-bottom: 7px;
  font-size: 11px;
  color: ${props => props.theme.textColor};
`
export const CheckNotice = styled.span`
  margin : 5px 0 0 5px;
  margin-bottom: ${props => props.password ? '14px' : '0'};
  font-size: 11px;
  color : ${props => props.danger ? 'var(--notice-purple)' : 'var(--notice-green)'};
`

export const IdCheckBtn = styled.button`
  width : 40px;
  height: 40px;
  ${flex({ align : 'center', justify : 'center'})}

  position: absolute;
  top : 310px;
  right : 5px;

  border : none;
  border-radius: 24px;

  background-color: ${props => props.disabled ? 'var(--input-text)' : 'var(--orange)'};
  color : white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.disabled ? 'var(--input-text)' : 'var(--notice-green)'};
  }
`