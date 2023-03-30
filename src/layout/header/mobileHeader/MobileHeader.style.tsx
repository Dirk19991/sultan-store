import styled from 'styled-components';
import { YellowCircle } from '../lowerHeader/LowerHeader.style';

export const Wrapper = styled.div`
  position: relative;
  height: 93px;
  padding: 10px 15px;
  box-shadow: none;
  background-color: white;
`;

export const UpperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Burger = styled.div`
  width: 32px;
  height: 32px;
  margin-top: -2px;
  cursor: pointer;
`;

export const Logo = styled.div`
  margin-left: 2px;
`;

export const ShoppingCart = styled.div`
  position: relative;
  margin-right: 7px;
  margin-top: 5px;
  cursor: pointer;
`;

export const MobileCircle = styled(YellowCircle)`
  width: 23px;
  height: 23px;
  top: -8px;
  right: -10px;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
`;

export const Line = styled.div`
  width: 320px;
  height: 1px;
  background-color: var(--darkGrey);
  transform: translateX(-15px);
  opacity: 0.1;
`;

export const LowerHeader = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;

export const DashedLine = styled.div`
  height: 30px;
  opacity: 0.1;
  border: 1px dashed #3f4e65;
  transform: translateX(10px);
`;

export const Catalogue = styled.div`
  display: flex;
  gap: 6px;
  margin-left: 30px;
  margin-top: 4px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  transform: translateX(22px);

  > div {
    margin-top: 4px;
  }
`;

export const Search = styled.input`
  width: 100px;
  height: 20px;
  border: none;
  color: rgba(92, 99, 112, 1);
  margin-right: 7px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  margin-top: 10px;
  background-color: white;
  width: 100%;
  z-index: 2;
`;
