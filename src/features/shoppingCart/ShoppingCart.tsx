import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import {
  ButtonsWrapper,
  ItemButton,
  ItemQuantity,
} from '../../components/QuantityButtonsGroup';
import YellowButton from '../../components/YellowButton';
import { useShoppingCartContext } from '../../context/ShoppingCartProvider';
import useMediaQuery from '../../hooks/useMediaQuery';
import getCartQuantity from '../../utils/getCartQuantity';
import getCartSum from '../../utils/getCartSum';
import MobileShoppingCart from '../mobileShoppingCart/MobileShoppingCart';
import {
  Breadcrumbs,
  BreadcrumbsCart,
  BreadcrumbsMain,
  CartHeader,
  CartImage,
  CartInfo,
  CartItem,
  CartItemDescription,
  CartItems,
  CartItemTitle,
  DashedHorizontal,
  DashedVertical,
  ItemPrice,
  PriceWrapper,
  Trashbin,
  Weight,
  Wrapper,
} from './ShoppingCart.style';

const Order = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const Thanks = styled(CartHeader)`
  margin-top: 50px;
`;

function ShoppingCart() {
  const {
    items,
    addCartItem,
    decreaseCartItems,
    removeCartItem,
    removeAllItems,
  } = useShoppingCartContext();

  const [ordered, setOrdered] = useState(false);

  useEffect(() => {
    setOrdered(false);
  }, []);

  const makeOrder = () => {
    setOrdered(true);
    removeAllItems();
  };

  const mobileMedia = useMediaQuery('(max-width: 1200px)');

  return mobileMedia ? (
    <MobileShoppingCart />
  ) : (
    <Container>
      <Wrapper>
        <Breadcrumbs>
          <BreadcrumbsMain>Главная</BreadcrumbsMain>
          <DashedVertical height='16px' />
          <BreadcrumbsCart>Корзина</BreadcrumbsCart>
        </Breadcrumbs>
        <CartHeader>Корзина</CartHeader>
        <DashedHorizontal />
        {ordered && <Thanks>Спасибо за заказ!</Thanks>}
        <CartItems>
          {items.map((item) => {
            const iconSource =
              item.sizeType === 'weight'
                ? './icons/box.svg'
                : './icons/bottle.svg';

            return (
              <React.Fragment key={item.id}>
                <CartItem>
                  <CartImage>
                    <img src={item.imageBig} alt={item.title} />
                  </CartImage>
                  <CartInfo>
                    <Weight>
                      <div>
                        <img src={iconSource} alt='size' />
                      </div>
                      <div>{item.size}</div>
                    </Weight>
                    <CartItemTitle>
                      {item.brand} {item.title}
                    </CartItemTitle>
                    <CartItemDescription>
                      {item.description}
                    </CartItemDescription>
                  </CartInfo>
                  <DashedVertical marginRight='44px' height='49px' />
                  <ButtonsWrapper>
                    <ItemButton onClick={() => decreaseCartItems(item)}>
                      -
                    </ItemButton>
                    <ItemQuantity>{item.quantity}</ItemQuantity>
                    <ItemButton onClick={() => addCartItem(item)}>+</ItemButton>
                  </ButtonsWrapper>
                  <PriceWrapper>
                    <DashedVertical height='49px' />
                    <ItemPrice>
                      {(
                        parseFloat(item.price.replace(',', '.')) * item.quantity
                      ).toFixed(2)}{' '}
                      ₸
                    </ItemPrice>
                    <DashedVertical height='49px' />
                  </PriceWrapper>
                  <Trashbin onClick={() => removeCartItem(item.id)}>
                    <img src='./icons/trashbin.svg' alt='trashbin' />
                  </Trashbin>
                </CartItem>
                <DashedHorizontal />
              </React.Fragment>
            );
          })}
        </CartItems>
        {getCartQuantity(items) !== 0 && (
          <Order>
            <YellowButton onClick={makeOrder}>Оформить заказ</YellowButton>
            <ItemPrice>{getCartSum(items)} ₸</ItemPrice>
          </Order>
        )}
      </Wrapper>
    </Container>
  );
}
export default ShoppingCart;
