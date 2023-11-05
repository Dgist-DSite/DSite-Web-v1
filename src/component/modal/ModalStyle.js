import {styled} from "styled-components";

export const ModalContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100%;
  z-index: 100;
`;

export const ModalBackdrop = styled.div`
  z-index: 150;
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: rgba(0,0,0,0.4);
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;


export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  background-color: #ffffff;
    >div.desc {
      margin: 50px;
      font-size: 20px;
      color: var(--coz-purple-600);
    }
`;
