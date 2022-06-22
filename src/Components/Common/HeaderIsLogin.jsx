import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Basic from '../../Public/Images/header-logo.png';
import DarkBasic from '../../Public/Images/small-dark3.png';
import { HeaderBox, LOGO, UserBtn } from "./Header";

const HeaderIsLogin = ({logout, themeMode}) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    navigate('/home');
  }

  return (
  <HeaderBox>
    { !themeMode ? 
      (<LOGO onClick = {()=> navigate('/home')}><img alt = "" className = "basic-logo" src = {Basic}/></LOGO>)
      : (<LOGO onClick = {()=> navigate('/home')}><img alt = "" className = "basic-logo" src = {DarkBasic}/></LOGO>)}
    <UserBtn onClick = {logoutHandler}>Logout</UserBtn>
  </HeaderBox>
  )
}

export default HeaderIsLogin;