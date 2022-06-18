import styled from "styled-components";
import flex from "../GlobalStyled/flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons";
import { faHouseChimneyWindow } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {



  return (
    <FooterWrap>
      <FooterIcon>
        <FontAwesomeIcon icon  = {faFaceLaugh}></FontAwesomeIcon>
      </FooterIcon>
      <FooterIcon>
        <FontAwesomeIcon icon  = {faHouseChimneyWindow}></FontAwesomeIcon>
      </FooterIcon>
      <FooterIcon>
        <FontAwesomeIcon icon  = {faWind}></FontAwesomeIcon>
      </FooterIcon>
      <FooterIcon>
        <FontAwesomeIcon icon  = {faComments}></FontAwesomeIcon>
      </FooterIcon>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
height : 74px;
width : calc(100vh - 55vh);
background-color: var(--blue);
position : fixed;
bottom : 0;  
${flex({})}
`

const FooterIcon = styled.div`
  cursor : pointer;
  width : 25%;
  height : 100%;
  ${flex({ justify : 'center', align : 'center '})};
  color : white;
  font-size: 22px;
`
export default Footer;
