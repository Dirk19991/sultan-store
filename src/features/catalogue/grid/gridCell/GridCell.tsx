import styled from 'styled-components';
import YellowButton from '../../../../components/YellowButton';
import { Item } from '../../../../context/GoodsContextProvider';
import { useShoppingCartContext } from '../../../../context/ShoppingCartProvider';

interface IGridCell {
  item: Item;
}

const StyledCell = styled.div`
  position: relative;
  width: 326px;
  min-height: 490px;

  padding: 5px 23px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.04);
`;

const Image = styled.div`
  width: 100%;
  height: 235px;
  display: flex;
  justify-content: center;

  > img {
    width: 70%;
    object-fit: contain;
  }
`;

const Weight = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 130%;
  gap: 8px;
  margin-bottom: 8px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  margin-bottom: 20px;

  > span {
    font-weight: 700;
  }
`;

const Barcode = styled.div`
  font-weight: 300;
  line-height: 150%;
  margin-bottom: 5px;

  > span {
    font-weight: 600;
  }
`;

const Manufacturer = styled(Barcode)``;

const Brand = styled(Barcode)``;

const PriceButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.div`
  font-weight: 800;
  font-size: 16px;
  line-height: 130%;
  color: var(--black);
`;

const CartButton = styled(YellowButton)`
  display: flex;
  font-weight: 600;
  width: 153px;
  min-width: 153px;
  height: 45px;
  color: var(--white);
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-right: 70px;
  cursor: pointer;
  transition: all 0.2s;
  transform: translateZ(0);

  &:hover {
    background-color: rgb(248, 180, 45);
  }

  &:active {
    transform: scale(1.1);
  }
`;

const CartText = styled.div`
  margin-right: -3px;
  margin-top: 2px;
`;

const ShoppingCart = styled.div`
  margin-left: -3px;
`;

function GridCell(props: IGridCell) {
  const { item } = props;

  const { items, addItem, removeItem } = useShoppingCartContext();

  const iconSource =
    item.sizeType === 'weight' ? './icons/box.svg' : './icons/bottle.svg';

  return (
    <StyledCell>
      <Image>
        <img src={item.imageSmall} alt='' />
      </Image>
      <Weight>
        <div>
          <img src={iconSource} alt='size' />
        </div>
        <div>{item.size}</div>
      </Weight>
      <Title>
        <span>{item.brand}</span> {item.title}
      </Title>
      <Barcode>
        Штрихкод: <span>{item.barcode}</span>
      </Barcode>
      <Manufacturer>
        Производитель: <span>{item.manufacturer}</span>
      </Manufacturer>
      <Brand>
        Бренд: <span>{item.brand}</span>
      </Brand>
      <PriceButtonWrapper>
        <Price>{item.price} ₸</Price>
        <CartButton onClick={() => addItem(item)}>
          <CartText>В корзину</CartText>
          <ShoppingCart>
            <img src='./icons/shoppingCartWhite.svg' alt='shoppingCart' />
          </ShoppingCart>
        </CartButton>
      </PriceButtonWrapper>
    </StyledCell>
  );
}
export default GridCell;
