import styled from 'styled-components';
import Light from '../../components/Light';
import YellowButton from '../../components/YellowButton';

export const Wrapper = styled.div`
  display: flex;
  width: 320px;
  margin: 0 auto;
  flex-direction: column;
  padding-left: 13px;
  padding-top: 20px;
  gap: 10px;
  height 580px;
  background-color: var(--white);
  z-index: 10;
`;

export const Sales = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  > div:first-child {
    margin-top: -7px;
  }

  margin-bottom: 9px;
`;

export const Time = styled(Light)`
  margin-top: 5px;
`;

export const OrderCall = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
  margin-bottom: 13px;
`;

export const PhoneButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--yellow);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderCallText = styled.div`
  font-size: 10px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 7px;
  margin-top: -2px;
  cursor: pointer;
`;

export const DashedLine = styled.div`
  width: 290px;
  border: 1px dashed #3f4e65;
  opacity: 0.2;
  margin-bottom: 15px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuHeader = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 25px;
`;
export const MenuItem = styled.li`
  line-height: 150%;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const PriceButton = styled(YellowButton)`
  width: 290px;
  height: 70px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: var(--white);
  margin-top: -10px;
`;
