import styled from 'styled-components';
import Container from '../../components/Container';
import Light from '../../components/Light';
import PageHeader from '../../components/PageHeader';
import { useShoppingCartContext } from '../../context/ShoppingCartProvider';

const Wrapper = styled(Container)`
  margin-left: 15px;
`;

const Breadcrumbs = styled.div`
  display: flex;
  gap: 9px;
  margin-bottom: 50px;
`;

const BreadcrumbsMain = styled(Light)`
  font-size: 14px;
`;

const BreadcrumbsCart = styled(Light)`
  font-size: 14px;
  opacity: 0.5;
`;

const DashedVertical = styled.div<{
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

const DashedHorizontal = styled.div`
  width: 1365.5px;
  height: 0;
  border: 1px dashed rgba(63, 78, 101, 0.1);
`;

const CartHeader = styled(PageHeader)`
  margin-left: -1px;
  margin-bottom: 48px;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
`;

const CartImage = styled.div`
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

const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin-right: 85px;
`;

const Weight = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 130%;
  gap: 8px;
  margin-bottom: 8px;
`;

const CartItemTitle = styled.div`
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

const CartItemDescription = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  width: 112px;
`;

const ItemButton = styled.div`
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

const ItemQuantity = styled.div`
  transform: translate(-2px);
`;

const PriceWrapper = styled.div`
  margin-left: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 203px;
  margin-right: 38px;
`;

const ItemPrice = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  color: var(--black);
  display: flex;
  justify-content: center;
`;

const Trashbin = styled.div`
  width: 59px;
  height: 59px;
  background-color: var(--yellow);
  border-radius: 79px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function ShoppingCart() {
  const { items, addItem, removeItem, decreaseItems } =
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
                    <ItemButton onClick={() => decreaseItems(item)}>
                      -
                    </ItemButton>
                    <ItemQuantity>{item.quantity}</ItemQuantity>
                    <ItemButton onClick={() => addItem(item)}>+</ItemButton>
                  </ButtonsWrapper>
                  <PriceWrapper>
                    <DashedVertical height='49px' />
                    <ItemPrice>{item.price} ₸</ItemPrice>
                    <DashedVertical height='49px' />
                  </PriceWrapper>
                  <Trashbin onClick={() => removeItem(item.id)}>
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
