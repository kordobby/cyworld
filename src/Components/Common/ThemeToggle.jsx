import React from 'react';
import styled from 'styled-components';
import flex from '../GlobalStyled/flex';

function ThemeToggle( {themeMode, toggleDarkMode, theme} ) {
  return (
    <>
      <ToggleWrapper onClick = {toggleDarkMode} >
        <ToggleBtn themeMode = {themeMode} theme = {theme}>
        </ToggleBtn>
      </ToggleWrapper>
    </>
  );
}

export default ThemeToggle;

const ToggleWrapper = styled.div`
  position: fixed;
  z-index: 999999;
  top: 20px;
  right: calc(100vh - 98vh);
  width: 50px;
  min-width: 50px;
  height: 26px;
  border-radius: 25px;
  margin: auto;
  display: flex;
  background-color: ${props => props.theme.switchColor};
`;

const ToggleBtn = styled.div`
  height: 20px;
  width: 20px;
  margin-left: 2px;
  margin-top: 3px;
  background-color: ${props => props.theme.switchColor2};
  border-radius: 50%;
  transform: translate(${(props) => (props.themeMode ? "25px" : "1px")});
  transition: transform 0.1s linear;
  ${flex({align : 'center', justify : 'center'})};
  font-size: 16px;
`;