import React from "react";
import styled from "styled-components";
import { MainWrap } from "./MainComponents/MainStyled";

const Modal = (props) => {

  // console.log(props.children)
  const { open, close } = props;

  return (
    <>
      {open ? (
        <MainWrap>
          <ModalBox>
            <Header>
              <X_button onClick={close}>&times;</X_button>
            </Header>

            <Main>{props.children}</Main>
          </ModalBox>
        </MainWrap>
      ) : null}
    </>
  );
};

const ModalBox = styled.div`
  border: 1px solid #1896c5;
  width: calc(100vh - 57vh);
  height: 173px;
  z-index: 99;
  position: fixed;
  top: 137px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 10px;
  margin-left: 330px;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const X_button = styled.div`
  font-size: x-large;
  color: #1896c5;
  cursor: pointer;
`;

export default Modal;
