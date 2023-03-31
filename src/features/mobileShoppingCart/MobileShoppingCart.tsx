import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MobileContainer from '../../components/MobileContainer';
import {
  ButtonsWrapper,
  ItemButton,
  ItemQuantity,
} from '../../components/QuantityButtonsGroup';
import { useBurgerMenuContext } from '../../context/BurgerMenuProvider';
import { useShoppingCartContext } from '../../context/ShoppingCartProvider';
import getCartQuantity from '../../utils/getCartQuantity';
import getCartSum from '../../utils/getCartSum';
import { DashedLine } from '../burgerMenu/BurgerMenu.style';
import {
  BackButtonWrapper,
  BackButton,
} from '../catalogue/mobileParameters/MobileParameters.style';
import {
  CartItemDescription,
  Trashbin,
  Weight,
} from '../shoppingCart/ShoppingCart.style';
import {
  Wrapper,
  Header,
  MobileCartItem,
  Image,
  Title,
  Flex,
  VerticalLine,
  Price,
  Separator,
  Sum,
  OrderButton,
  Thanks,
} from './MobileShoppingCart.style';

function MobileShoppingCart() {
  const { openMenu, setOpenMenu } = useBurgerMenuContext();
  const {
    items,
    decreaseCartItems,
    addCartItem,
    removeCartItem,
    removeAllItems,
  } = useShoppingCartContext();

  const menuHandler = (e: HTMLElement) => {
    if (e.dataset.class === 'wrapper') {
      setOpenMenu(false);
    }
  };

  const [ordered, setOrdered] = useState(false);

  useEffect(() => {
    setOrdered(false);
  }, []);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [ordered]);

  const makeOrder = () => {
    setOrdered(true);
    removeAllItems();
  };

  return (
    <MobileContainer>
      <Wrapper
        data-class='wrapper'
        onClick={(e) => menuHandler(e.target as HTMLElement)}
        opened={openMenu}
      >
        <Link to='/'>
          <BackButtonWrapper>
            <BackButton>
              <img src='./icons/arrowLeftBlack.svg' alt='arrowLeft' />
            </BackButton>
            <div>Назад</div>
          </BackButtonWrapper>
        </Link>
        <Header>Корзина</Header>
        <DashedLine />
        {ordered && <Thanks>Спасибо за заказ!</Thanks>}

        {items.map((item) => {
          const iconSource =
            item.sizeType === 'weight'
              ? './icons/box.svg'
              : './icons/bottle.svg';

          return (
            <MobileCartItem key={item.id}>
              <Image>
                <img src={item.imageBig} alt={item.title} />
              </Image>
              <Weight>
                <div>
                  <img src={iconSource} alt='size' />
                </div>
                <div>{item.size}</div>
              </Weight>
              <Title>
                {item.brand} {item.title}
              </Title>
              <CartItemDescription>{item.description}</CartItemDescription>
              <Flex>
                <ButtonsWrapper>
                  <ItemButton onClick={() => decreaseCartItems(item)}>
                    -
                  </ItemButton>
                  <ItemQuantity>{item.quantity}</ItemQuantity>
                  <ItemButton onClick={() => addCartItem(item)}>+</ItemButton>
                </ButtonsWrapper>
                <VerticalLine />
                <Price>
                  {(
                    parseFloat(item.price.replace(',', '.')) * item.quantity
                  ).toFixed(2)}{' '}
                  ₸
                </Price>
                <VerticalLine />
                <Trashbin onClick={() => removeCartItem(item.id)}>
                  <img src='./icons/trashbin.svg' alt='trashbin' />
                </Trashbin>
              </Flex>
              <Separator />
            </MobileCartItem>
          );
        })}
        {getCartQuantity(items) !== 0 && (
          <>
            <Sum>{getCartSum(items)} ₸</Sum>
            <OrderButton onClick={makeOrder}>Оформить заказ</OrderButton>
          </>
        )}
      </Wrapper>
    </MobileContainer>
  );
}
export default MobileShoppingCart;
