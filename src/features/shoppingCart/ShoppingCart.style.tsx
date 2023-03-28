import styled from 'styled-components';
import Container from '../../components/Container';
import Light from '../../components/Light';
import PageHeader from '../../components/PageHeader';

export const Wrapper = styled(Container)`
  margin-left: 15px;
`;

export const Breadcrumbs = styled.div`
  display: flex;
  gap: 9px;
  margin-bottom: 50px;
`;

export const BreadcrumbsMain = styled(Light)`
  font-size: 14px;
`;

export const BreadcrumbsCart = styled(Light)`
  font-size: 14px;
  opacity: 0.5;
`;

export const DashedVertical = styled.div<{
  height: string;
  marginRight?: string;
  marginLeft?: string;
}>`
  width: 0px;
  height: ${(props) => props.height};
  border: 1px dashed rgba(63, 78, 101, 0.1);
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
`;

export const DashedHorizontal = styled.div`
  width: 1365.5px;
  height: 0;
  border: 1px dashed rgba(63, 78, 101, 0.1);
`;

export const CartHeader = styled(PageHeader)`
  margin-left: -1px;
  margin-bottom: 48px;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
`;

export const CartImage = styled.div`
  width: 281px;
  height: 191px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-right: 15px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin-right: 85px;
`;

export const Weight = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 130%;
  gap: 8px;
  margin-bottom: 8px;
`;

export const CartItemTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: var(--black);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 8px;
`;

export const CartItemDescription = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
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

  &:hover {
    background-color: var(--yellow);
  }
`;

export const ItemQuantity = styled.div`
  transform: translate(-2px);
`;

export const PriceWrapper = styled.div`
  margin-left: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 203px;
  margin-right: 38px;
`;

export const ItemPrice = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  color: var(--black);
  display: flex;
  justify-content: center;
`;

export const Trashbin = styled.div`
  width: 59px;
  height: 59px;
  background-color: var(--yellow);
  border-radius: 79px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
