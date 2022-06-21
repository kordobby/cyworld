import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import CyLogo from '../../Public/Images/CyLogoSmall.png';
import { Link } from "react-router-dom";
import { HeaderBox, LOGO, UserBtn } from "./Header";
import { deleteCookie } from "../../Shared/Cookie";
import { useDispatch } from "react-redux";
import logout from '../../redux/modules/userReducer';

const HeaderIsLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    deleteCookie('token');
    dispatch(logout());
    alert('로그아웃 되었습니다!');
    navigate('/');
  };

  return (
  <HeaderBox>
    <Link to = '/login'><LOGO><img src = {CyLogo}/></LOGO></Link>

    <UserBtn onClick = {logoutHandler}>Logout</UserBtn>
  </HeaderBox>
  )
}

export default HeaderIsLogin;