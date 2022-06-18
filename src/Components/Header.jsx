/* Router */
import { Link, useNavigate } from 'react-router-dom';

/* Style */
import styled from 'styled-components';
import flex from '../Components/GlobalStyled/flex';
import Basic from '../Public/Images/header-logo.png';
import DarkBasic from '../Public/Images/small-dark3.png';

const Header = ( {mode} ) => {
  const navigate = useNavigate();

  return (
        <HeaderBox>
          { !mode ? 
            (<LOGO onClick = {()=> navigate('/home')}><img alt = "" className = "basic-logo" src = {Basic}/></LOGO>)
          : (<LOGO onClick = {()=> navigate('/home')}><img alt = "" className = "basic-logo" src = {DarkBasic}/></LOGO>)}
          <UserBtn onClick = {()=> navigate('/login')}>LOGIN</UserBtn>
        </HeaderBox>
  )
}

export const HeaderBox = styled.div`
  width : calc(100vh - 55vh);
  height : 93px;

  ${flex({align : 'flex-end', justify : 'space-between'})};
  box-sizing: border-box;
  border-bottom: 5px solid var(--input-grey);

  background-color: ${props => props.theme.bgColor};
  position : fixed;
  top : 0;
`

export const LOGO = styled.div`
  display : flex;
  align-items: flex-end;
  cursor : pointer;
  & > .basic-logo {
    width : 200px
  }
`
export const UserBtn = styled.div`
  color : var(--black);
  font-size: 18px;
  font-weight : 600;
  display : flex;
  justify-content : flex-end;
  margin :  0 15px 5px 0;
  cursor : pointer;
`

export default Header;