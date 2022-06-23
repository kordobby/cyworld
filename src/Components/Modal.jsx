import React from "react";
import styled from "styled-components";
import { MainWrap } from "./MainComponents/MainStyled";

// style

const Modal = (props) => {
  const { open, close, header } = props;

  return (
    <>
      {open ? (
        <MainWrap>
          <ModalBox>
            <Header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </Header>

            <Main>{props.children}</Main>
          </ModalBox>
        </MainWrap>
      ) : null}
    </>
  );
};

const ModalBox = styled.div`
  border: 5px solid black;
  width: calc(100vh - 57vh);
  height: 170px;
  z-index: 99;
  position: fixed;
  top: 130px;
  //
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 8px;
  box-sizing: border-box;
  //
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
`;

const Main = styled.div`
  /* width: 100%; */

  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
`;
export default Modal;
