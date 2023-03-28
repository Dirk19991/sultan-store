import styled from 'styled-components';
import SemiBold from '../../../components/SemiBold';
import YellowButton from '../../../components/YellowButton';

export const Wrapper = styled.div`
  min-height: 109px;
  display: flex;
  align-items: center;
  margin-left: 14px;
  margin-top: -2px;
`;

export const Logo = styled.div`
  margin-right: 38px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Catalog = styled(YellowButton)``;

export const InputWrapper = styled.div`
  position: relative;
  margin-right: 35px;
`;

export const CallWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-right: 50px;
`;

export const CallInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

export const CallImage = styled.div`
  margin-bottom: 8px;
`;

export const GreenCircle = styled.div`
  position: absolute;
  top: 29px;
  right: 6px;
  width: 8px;
  height: 8px;
  background-color: var(--green);
  border: rgba(240, 246, 250, 1);
  border-radius: 50%;
`;

export const PriceList = styled(YellowButton)`
  width: 200px;
  min-width: 200px;
  gap: 14px;
  margin-right: 50px;

  > div {
    margin-top: 2px;
    margin-right: 2px;
  }
`;

export const CartIcon = styled.div`
  margin-top: 2px;
`;

export const ShoppingCartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  white-space: nowrap;
  cursor: pointer;

  &:hover > div > img {
    transform: scale(1.05);
  }
`;

export const ShoppingCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const ShoppingCartSum = styled(SemiBold)`
  max-width: 58px;
  overflow: visible;
`;
