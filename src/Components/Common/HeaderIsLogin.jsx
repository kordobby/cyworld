import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CyLogo from '../../Public/Images/CyLogoSmall.png';
import { Link } from "react-router-dom";
import { HeaderBox, LOGO, UserBtn } from "./Header";
import { deleteCookie } from "../../Shared/Cookie";
import { useDispatch } from "react-redux";

const HeaderIsLogin = ({logout}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
  <HeaderBox>
    <Link to = '/login'><LOGO><img src = {CyLogo}/></LOGO></Link>
    <UserBtn onClick = {logout}>Logout</UserBtn>
  </HeaderBox>
  )
}

export default HeaderIsLogin;