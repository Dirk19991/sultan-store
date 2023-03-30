import styled from 'styled-components';

export const Modal = styled.div<{ openMenu: boolean }>`
  display: ${(props) => (props.openMenu ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Wrapper = styled.div`
  margin-top: -100px;
  margin-left: 0px;
`;
