import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../../components/Input';
import Light from '../../../components/Light';
import LookingGlass from '../../../components/LookingGlass';
import OrderCall from '../../../components/OrderCall';
import SemiBold from '../../../components/SemiBold';
import YellowButton from '../../../components/YellowButton';
import { useShoppingCartContext } from '../../../context/ShoppingCartProvider';
import useMediaQuery from '../../../hooks/useMediaQuery';
import getCartSum from '../../../utils/getCartSum';

const Wrapper = styled.div`
  min-height: 109px;
  display: flex;
  align-items: center;
  margin-left: 14px;
  margin-top: -2px;
`;

const Logo = styled.div`
  margin-right: 38px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

const Catalog = styled(YellowButton)``;

const InputWrapper = styled.div`
  position: relative;
  margin-right: 35px;
`;

const CallWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-right: 50px;
`;

const CallInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

const CallImage = styled.div`
  margin-bottom: 8px;
`;

const GreenCircle = styled.div`
  position: absolute;
  top: 29px;
  right: 6px;
  width: 8px;
  height: 8px;
  background-color: var(--green);
  border: rgba(240, 246, 250, 1);
  border-radius: 50%;
`;

const PriceList = styled(YellowButton)`
  width: 200px;
  min-width: 200px;
  gap: 14px;
  margin-right: 50px;

  > div {
    margin-top: 2px;
    margin-right: 2px;
  }
`;

const CartIcon = styled.div`
  margin-top: 2px;
`;

const ShoppingCartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  white-space: nowrap;
  cursor: pointer;

  &:hover > div > img {
    transform: scale(1.05);
  }
`;

const ShoppingCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ShoppingCartSum = styled(SemiBold)`
  max-width: 58px;
  overflow: visible;
`;

function LowerHeader() {
  const priceMedia = useMediaQuery('(min-width: 1377px)');
  const callMedia = useMediaQuery('(min-width: 1177px)');
  const { items } = useShoppingCartContext();

  const sum = items.length === 0 ? 0 : getCartSum(items);

  return (
    <Wrapper>
      <Link to='/'>
        <Logo>
          <img src='./icons/sultanLogo.svg' alt='sultanLogo' />
        </Logo>
      </Link>
      <Catalog>
        <span>Каталог</span>
        <div>
          <img src='./icons/catalogue.svg' alt='catalogue' />
        </div>
      </Catalog>
      <InputWrapper>
        <Input placeholder='Поиск...'></Input>
        <LookingGlass>
          <img src='./icons/lookingGlass.svg' alt='lookingGlass' />
        </LookingGlass>
      </InputWrapper>
      {callMedia && (
        <CallWrapper>
          <CallInfo>
            <SemiBold>+7 (777) 490-00-91</SemiBold>
            <Light>время работы: 9:00-20:00</Light>
            <OrderCall>Заказать звонок</OrderCall>
          </CallInfo>
          <CallImage>
            <img src='./icons/call.png' alt='call' />
          </CallImage>
          <GreenCircle />
        </CallWrapper>
      )}

      {priceMedia && (
        <PriceList>
          <span>Прайс-лист</span>
          <div>
            <img src='./icons/download.svg' alt='download' />
          </div>
        </PriceList>
      )}
      <Link to='./cart'>
        <ShoppingCartWrapper>
          <CartIcon>
            <img src='./icons/shoppingCart.svg' alt='shoppingCart' />
          </CartIcon>
          <ShoppingCartInfo>
            <Light>Корзина</Light>
            <ShoppingCartSum>{sum} ₸</ShoppingCartSum>
          </ShoppingCartInfo>
        </ShoppingCartWrapper>
      </Link>
    </Wrapper>
  );
}
export default LowerHeader;
