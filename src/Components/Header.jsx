/* Router */
import { Link } from 'react-router-dom';

/* Style */
import styled from 'styled-components';
import CyLogo from '../Public/Images/CyLogoSmall.png';
import flex from '../Components/GlobalStyled/flex';

const Header = () => {
  return (
        <HeaderBox>
          <Link to = '/login'><LOGO><img src = {CyLogo}/></LOGO></Link>
          <UserBtn><Link to = '/login'>LOGIN</Link></UserBtn>
        </HeaderBox>
  )
}

export const HeaderBox = styled.div`
  width : calc(100vh - 55vh);
  height : 93px;

  ${flex({align : 'flex-end', justify : 'space-between'})};
  box-sizing: border-box;
  border-bottom: 5px solid var(--input-grey);

  background-color: white;
  position : fixed;
  top : 0;
`

export const LOGO = styled.div`
  display : flex;
  align-items: flex-end;
`
export const UserBtn = styled.div`
  color : var(--black);
  font-size: 18px;
  font-weight : 600;
  display : flex;
  justify-content : flex-end;
  margin :  0 15px 5px 0;
`

export default Header;