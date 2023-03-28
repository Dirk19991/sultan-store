import Container from '../../components/Container';
import { useShoppingCartContext } from '../../context/ShoppingCartProvider';
import {
  Breadcrumbs,
  BreadcrumbsCart,
  BreadcrumbsMain,
  ButtonsWrapper,
  CartHeader,
  CartImage,
  CartInfo,
  CartItem,
  CartItemDescription,
  CartItems,
  CartItemTitle,
  DashedHorizontal,
  DashedVertical,
  ItemButton,
  ItemPrice,
  ItemQuantity,
  PriceWrapper,
  Trashbin,
  Weight,
  Wrapper,
} from './ShoppingCart.style';

function ShoppingCart() {
  const { items, addCartItem, decreaseCartItems, removeCartItem } =
    useShoppingCartContext();

  return (
    <Container>
      <Wrapper>
        <Breadcrumbs>
          <BreadcrumbsMain>Главная</BreadcrumbsMain>
          <DashedVertical height='16px' />
          <BreadcrumbsCart>Корзина</BreadcrumbsCart>
        </Breadcrumbs>
        <CartHeader>Корзина</CartHeader>
        <DashedHorizontal />
        <CartItems>
          {items.map((item) => {
            const iconSource =
              item.sizeType === 'weight'
                ? './icons/box.svg'
                : './icons/bottle.svg';

            return (
              <>
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
                    <ItemPrice>{item.price} ₸</ItemPrice>
                    <DashedVertical height='49px' />
                  </PriceWrapper>
                  <Trashbin onClick={() => removeCartItem(item.id)}>
                    <img src='./icons/trashbin.svg' alt='trashbin' />
                  </Trashbin>
                </CartItem>
                <DashedHorizontal />
              </>
            );
          })}
        </CartItems>
      </Wrapper>
    </Container>
  );
}
export default ShoppingCart;
