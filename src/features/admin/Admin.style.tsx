import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
`;

export const AdminHeader = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  color: var(--black);
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const AdminSubheader = styled.h2`
  font-weight: 500;
  font-size: 30px;
  line-height: 120%;
  color: var(--black);
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const GoodsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Select = styled.select`
  width: 400px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const Add = styled.option`
  color: green;
`;
