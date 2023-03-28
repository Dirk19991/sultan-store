import styled from 'styled-components';

const YellowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 192px;
  min-width: 192px;
  height: 59px;
  background-color: var(--yellow);
  color: var(--white);
  font-weight: 700;
  line-height: 17px;
  border-radius: 79px;
  margin-right: 15px;
  font-family: 'Inter';
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: translateZ(0);

  &:hover {
    background-color: rgb(248, 180, 45);
  }
`;

export default YellowButton;
