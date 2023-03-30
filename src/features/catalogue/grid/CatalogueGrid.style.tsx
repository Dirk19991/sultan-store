import styled from 'styled-components';

export const Wrapper = styled.div<{ opened: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-top: 10px;
  margin-bottom: 50px;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: center;
`;

export const Number = styled.div<{ highlighted: boolean }>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background: ${(props) =>
    props.highlighted
      ? 'linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)'
      : '#fff'};
`;

export const ArrowLeft = styled.div`
  margin-right: 33px;
  cursor: pointer;
`;

export const ArrowRight = styled.div`
  margin-left: 33px;
  cursor: pointer;
`;
