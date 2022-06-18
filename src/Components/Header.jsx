/* Router */
import { Link } from 'react-router-dom';

/* Style */
import styled from 'styled-components';
import CyLogo from '../Public/Images/CyLogoSmall.png';

const Header = () => {
  return (
  <HeaderBox>
    <Link to = '/login'><LOGO><img src = {CyLogo}/></LOGO></Link>
    <UserBtn><Link to = '/login'>LOGIN</Link></UserBtn>
  </HeaderBox>
  )
}

export const HeaderBox = styled.div`
  width : 360px;
  height : 90px;
  background-color: var(--blue);

  display : flex;
  align-items: flex-end;
  box-sizing: border-box;

  position : fixed;
  top : 0;
`

export const LOGO = styled.div`
  width : 70%;
  font-size: 40px;
  display : flex;
  align-items: flex-end;
`
export const UserBtn = styled.div`
  color : var(--black);
  font-weight : 600;
  width : 30%;
  display : flex;
  justify-content : flex-end;
  margin-bottom: 5px;
`

export default Header;