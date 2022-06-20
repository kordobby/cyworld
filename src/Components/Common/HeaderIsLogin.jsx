import styled from "styled-components";
import CyLogo from '../../Public/Images/CyLogoSmall.png';
import { Link } from "react-router-dom";
import { HeaderBox, LOGO, UserBtn } from "./Header";

const HeaderIsLogin = () => {

  return (
  <HeaderBox>
    <Link to = '/login'><LOGO><img src = {CyLogo}/></LOGO></Link>
    <UserBtn><Link to = '/login'>Logout</Link></UserBtn>
  </HeaderBox>
  )
}

export default HeaderIsLogin;