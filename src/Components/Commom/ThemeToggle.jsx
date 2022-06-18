import React from 'react';
import styled from 'styled-components';

function ThemeToggle( {toggleDarkMode, theme} ) {
  return (
    <ToggleWrapper onClick = {toggleDarkMode} theme = {theme}>
        {theme.mode === 'dark' ? '🌚' : '🌝'}
    </ToggleWrapper>
  );
}

export default ThemeToggle;

const ToggleWrapper = styled.button`
  position: fixed;
  z-index: 999999;
  bottom: 4%;
  right: 3%;

  background-color: ${props => props.theme.bgColor};
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border : 2px solid var(--orange);
`;