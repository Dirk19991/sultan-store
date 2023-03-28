import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 112px;
`;

export const ItemButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  opacity: 0.7;
  width: 34px;
  height: 23px;
  background: linear-gradient(
    90deg,
    rgba(255, 198, 80, 0.3) 0%,
    rgba(254, 202, 110, 0.3) 97.25%
  );
  border-radius: 1000px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  user-select: none;

  &:hover {
    background-color: var(--yellow);
  }
`;

export const ItemQuantity = styled.div`
  transform: translate(-2px);
`;
