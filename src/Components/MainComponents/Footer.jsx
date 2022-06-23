import styled from "styled-components";
import flex from "../GlobalStyled/flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyWindow } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const alertLoginHandler = () => {
    alert('로그인이 필요한 서비스입니다!');
    navigate('/login');
  }

  return (
     <>
    <FooterWrap>
      <FooterIcon>
        <FontAwesomeIcon onClick = {alertLoginHandler} icon  = {faHouseChimneyWindow}></FontAwesomeIcon>
        <span className = "menu__title">미니홈피</span>
      </FooterIcon>
      <FooterIcon>
        <FontAwesomeIcon onClick = {alertLoginHandler} icon  = {faWind}></FontAwesomeIcon>
        <span className = "menu__title">파도타기</span>
      </FooterIcon>
      <FooterIcon>
        <FontAwesomeIcon onClick = {alertLoginHandler} icon = {faComments}></FontAwesomeIcon>
        <span className = "menu__title">와글와글</span>
      </FooterIcon>
      <FooterIcon>
        <FontAwesomeIcon onClick = {alertLoginHandler}icon  = {faEllipsis}></FontAwesomeIcon>
        <span className = "menu__title">더보기</span>
      </FooterIcon>
    </FooterWrap>
    </>
  );
}


export const FooterWrap = styled.div`
  height : 74px;
  width : calc(100vh - 53vh);
  background-color: ${props => props.theme.bgColor3};
  /* position : fixed;
  bottom : 0;   */
  ${flex({})}
`

export const FooterIcon = styled.div`
  cursor : pointer;
  width : 25%;
  height : 100%;
  ${flex({ direction : 'column', justify : 'center', align : 'center '})};
  color : white;
  font-size: 22px;
  box-sizing : border-box;
  padding-top : 5px;
  & > .menu__title {
    font-size : 13px;
    margin-top : 10px;
  }
`
export default Footer;
