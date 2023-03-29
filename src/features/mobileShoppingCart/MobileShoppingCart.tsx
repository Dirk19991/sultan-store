import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MobileContainer from '../../components/MobileContainer';
import PageHeader from '../../components/PageHeader';
import {
  ButtonsWrapper,
  ItemButton,
  ItemQuantity,
} from '../../components/QuantityButtonsGroup';
import { useBurgerMenuContext } from '../../context/BurgerMenuProvider';
import { useShoppingCartContext } from '../../context/ShoppingCartProvider';
import BurgerMenu, { DashedLine } from '../burgerMenu/BurgerMenu';
import {
  BackButtonWrapper,
  BackButton,
} from '../catalogue/mobileParameters/MobileParameters';
import {
  CartItemDescription,
  Trashbin,
  Weight,
} from '../shoppingCart/ShoppingCart.style';

const Wrapper = styled.div<{ opened: boolean }>`
  position: relative;
  padding: 0 15px;

  display: flex;
  flex-direction: column;

  &::after {
    box-shadow: ${(props) =>
      props.opened ? 'inset 0 0 500px 100px rgba(17, 17, 17, 0.5)' : ''};
    content: '';
    display: ${(props) => (props.opened ? 'block' : 'none')};
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const Header = styled(PageHeader)`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 19px;
`;

const MobileCartItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Image = styled.div`
  height: 197px;
  width: 290px;
  margin-bottom: 14px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: var(--black);
  margin-bottom: 10px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const VerticalLine = styled.div`
  height: 49px;
  width: 0px;
  opacity: 0.2;
  border: 1px dashed #3f4e65;
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: var(--black);
`;

const Wrap = styled.div`
  > div {
    margin-top: 0px;
    padding-top: 20px;
    margin-left: 0px;
    width: 340px;
  }
`;

function MobileShoppingCart() {
  const { openMenu, setOpenMenu } = useBurgerMenuContext();
  const { items, decreaseCartItems, addCartItem, removeCartItem } =
    useShoppingCartContext();

  const menuHandler = (e: HTMLElement) => {
    if (e.dataset.class === 'wrapper') {
      setOpenMenu(false);
    }
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
            </MobileCartItem>
          );
        })}

        {openMenu && (
          <Wrap>
            <BurgerMenu />
          </Wrap>
        )}
      </Wrapper>
    </MobileContainer>
  );
}
export default MobileShoppingCart;
