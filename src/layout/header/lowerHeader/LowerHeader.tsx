import { Link } from 'react-router-dom';
import Input from '../../../components/Input';
import Light from '../../../components/Light';
import LookingGlass from '../../../components/LookingGlass';
import OrderCall from '../../../components/OrderCall';
import SemiBold from '../../../components/SemiBold';
import { useShoppingCartContext } from '../../../context/ShoppingCartProvider';
import useMediaQuery from '../../../hooks/useMediaQuery';
import getCartQuantity from '../../../utils/getCartQuantity';
import getCartSum from '../../../utils/getCartSum';
import {
  CallImage,
  CallInfo,
  CallWrapper,
  CartIcon,
  Catalog,
  DashedLine,
  GreenCircle,
  InputWrapper,
  Logo,
  PriceList,
  ShoppingCartInfo,
  ShoppingCartSum,
  ShoppingCartWrapper,
  Wrapper,
  YellowCircle,
} from './LowerHeader.style';

function LowerHeader() {
  // graceful degradation для разрешений примерно до 1000px, убираем ссылку на прайс и секцию с телефоном

  const priceMedia = useMediaQuery('(min-width: 1377px)');
  const callMedia = useMediaQuery('(min-width: 1177px)');
  const { items } = useShoppingCartContext();

  const sum = items.length === 0 ? 0 : getCartSum(items);
  const quantity = getCartQuantity(items);
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
      <DashedLine />
      <Link to='./cart'>
        <ShoppingCartWrapper>
          <CartIcon>
            <img src='./icons/shoppingCart.svg' alt='shoppingCart' />
            <YellowCircle>{quantity}</YellowCircle>
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
