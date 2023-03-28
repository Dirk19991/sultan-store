import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`;

export const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 43px;
`;

export const Address = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Mail = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Links = styled.ul<{ tablet: boolean }>`
  margin-left: ${(props) => (props.tablet ? '20px' : '0')};
  margin-right: ${(props) => (props.tablet ? '20px' : '0')};
  display: flex;
  flex-wrap: wrap;
  column-gap: ${(props) => (props.tablet ? '20px' : '60px')};
  row-gap: 10px;
`;
