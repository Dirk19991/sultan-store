import { Link } from 'react-router-dom';
import { Item } from '../../../../context/GoodsContextProvider';
import { useShoppingCartContext } from '../../../../context/ShoppingCartProvider';
import {
  StyledCell,
  Image,
  Weight,
  Title,
  Barcode,
  Manufacturer,
  Brand,
  PriceButtonWrapper,
  CartButton,
  CartText,
  Price,
  ShoppingCart,
} from './GridCell.style';

interface IGridCell {
  item: Item;
}

function GridCell(props: IGridCell) {
  const { item } = props;

  const { addCartItem } = useShoppingCartContext();

  const iconSource =
    item.sizeType === 'weight' ? './icons/box.svg' : './icons/bottle.svg';

  return (
    <StyledCell>
      <Link to={`/cosmetics/${item.barcode}`}>
        <Image>
          <img src={item.imageSmall} alt='' />
        </Image>
      </Link>
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
        <CartButton onClick={() => addCartItem(item)}>
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
