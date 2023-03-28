import { useState } from 'react';
import styled from 'styled-components';
import {
  ButtonsWrapper,
  ItemButton,
  ItemQuantity,
} from '../../../components/QuantityButtonsGroup';
import YellowButton from '../../../components/YellowButton';
import { Item } from '../../../context/GoodsContextProvider';
import { useShoppingCartContext } from '../../../context/ShoppingCartProvider';

interface IItemCardInfo {
  currentItem: Item | undefined;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const InStock = styled.div`
  color: var(--green);
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 10px;
`;

const ItemTitle = styled.div`
  font-size: 30px;
  line-height: 150%;
  font-weight: 500;
  color: var(--black);
  margin-bottom: 10px;
`;

const ExtraBold = styled.span`
  font-weight: 800;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const Weight = styled.div`
  font-size: 12px;
  line-height: 130%;
  display: flex;
  gap: 5px;
  margin-bottom: 12px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Price = styled.div`
  font-weight: 800;
  font-size: 30px;
  line-height: 130%;
  color: var(--black);
  margin-right: 40px;
`;

const ItemButtons = styled(ButtonsWrapper)`
  margin-right: 38px;
`;

const CartButton = styled(YellowButton)`
  display: flex;
  align-items: center;
  font-weight: 600;
  width: 184px;
  min-width: 153px;
  height: 59px;
  color: var(--white);
  font-size: 14px;
  line-height: 17px;
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
  margin-top: 6px;
`;

const ShareButton = styled.div`
  width: 77px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.08);
  border-radius: 10px;
  margin-right: 10px;
`;

const FreeShipping = styled.div`
  width: 316px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 30px;
  font-size: 12px;
  line-height: 150%;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.08);
  border-radius: 10px;
  margin-right: 10px;
`;

const PriceList = styled.div`
  width: 186px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.08);
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  gap: 10px;
`;

const DownloadIcon = styled.div`
  margin-top: 3px;
`;

const Manufacturer = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  margin-top: 15px;
  margin-bottom: 5px;

  > span {
    font-weight: 600;
    color: var(--black);
  }
`;

const Brand = styled(Manufacturer)`
  margin-top: 0;
`;

const Article = styled(Manufacturer)`
  margin-top: 0;
`;

const Barcode = styled(Manufacturer)`
  margin-top: 0;
  margin-bottom: 28px;
`;

const DescriptionButton = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 13px;

  > span {
    font-size: 6px;
    margin-top: 3px;
  }
`;

const Description = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 20px;
`;

const DashedLine = styled.div`
  width: 269.5px;
  height: 0px;
  border: 1px dashed rgba(63, 78, 101, 0.1);
  margin-bottom: 20px;
`;

const CharacteristicsButton = styled(DescriptionButton)<{ margin: boolean }>`
  margin-bottom: ${(props) => (props.margin ? '100px' : '5px')};}
`;

const Characteristics = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 20px;
`;

const Purpose = styled(Manufacturer)`
  margin-top: 0;
`;

const Type = styled(Manufacturer)`
  margin-top: 0;
  margin-bottom: -10px;
`;

const BarcodeChar = styled(Manufacturer)`
  margin-top: 0;
`;

const WeightChar = styled(Manufacturer)`
  margin-top: 0;
`;

const Volume = styled(Manufacturer)`
  margin-top: 0;
`;

const BoxQuantity = styled(Manufacturer)`
  margin-top: 0;
`;

function ItemCardInfo(props: IItemCardInfo) {
  const currentItem = props.currentItem as Item;
  const { addCartItem, items } = useShoppingCartContext();

  console.log(items);

  const [itemsNumber, setItemsNumber] = useState<number>(1);
  const [openDescription, setOpenDescription] = useState<boolean>(false);
  const [openCharacterstics, setOpenCharacterstics] = useState<boolean>(false);

  const decreaseNumberHandler = () => {
    if (itemsNumber === 1) {
      return;
    }
    setItemsNumber(itemsNumber - 1);
  };

  const increaseNumberHandler = () => {
    setItemsNumber(itemsNumber + 1);
  };

  const iconSource =
    currentItem?.sizeType === 'weight'
      ? './icons/box.svg'
      : './icons/bottle.svg';

  return (
    <Wrapper>
      <InStock>В наличии</InStock>
      <ItemTitle>
        <ExtraBold>{currentItem.brand}</ExtraBold> {currentItem?.title}
      </ItemTitle>
      <Weight>
        <div>
          <img src={iconSource} alt='weight' />
        </div>
        <div>{currentItem.size}</div>
      </Weight>
      <Flex>
        <Price>{currentItem.price} ₸</Price>
        <ItemButtons>
          <ItemButton onClick={decreaseNumberHandler}>-</ItemButton>
          <ItemQuantity>{itemsNumber}</ItemQuantity>
          <ItemButton onClick={increaseNumberHandler}>+</ItemButton>
        </ItemButtons>
        <CartButton onClick={() => addCartItem(currentItem, itemsNumber)}>
          <CartText>В корзину</CartText>
          <ShoppingCart>
            <img src='./icons/shoppingCartSmall.svg' alt='shoppingCart' />
          </ShoppingCart>
        </CartButton>
      </Flex>
      <Flex>
        <ShareButton>
          <img src='./icons/share.svg' alt='share' />
        </ShareButton>
        <FreeShipping>
          <div>
            При покупке от <Bold>10 000 ₸</Bold> бесплатная доставка по
            Кокчетаву и области
          </div>
        </FreeShipping>
        <PriceList>
          <div>Прайс-лист</div>
          <DownloadIcon>
            <img src='./icons/downloadBlack.svg' alt='download' />
          </DownloadIcon>
        </PriceList>
      </Flex>
      <Manufacturer>
        Производитель: <span>{currentItem.manufacturer}</span>
      </Manufacturer>
      <Brand>
        Бренд: <span>{currentItem.brand}</span>
      </Brand>
      <Article>
        Артикул: <span>{currentItem.barcode}</span>
      </Article>
      <Barcode>
        Штрихкод: <span>{currentItem.barcode}</span>
      </Barcode>
      <DescriptionButton onClick={() => setOpenDescription((prev) => !prev)}>
        Описание <span>{openDescription ? '▲' : '▼'}</span>
      </DescriptionButton>
      {openDescription && <Description>{currentItem.description}</Description>}
      <DashedLine />
      <CharacteristicsButton
        margin={!openCharacterstics}
        onClick={() => setOpenCharacterstics((prev) => !prev)}
      >
        Характеристики <span>{openCharacterstics ? '▲' : '▼'}</span>
      </CharacteristicsButton>
      {openCharacterstics && (
        <Characteristics>
          <Purpose>
            Назначение: <span>{currentItem.brand}</span>
          </Purpose>
          <Type>
            Тип: <span>{currentItem.brand}</span>
          </Type>
          <Manufacturer>
            Производитель: <span>{currentItem.manufacturer}</span>
          </Manufacturer>
          <Brand>
            Бренд: <span>{currentItem.brand}</span>
          </Brand>
          <Article>
            Артикул: <span>{currentItem.barcode}</span>
          </Article>
          <BarcodeChar>
            Штрихкод: <span>{currentItem.barcode}</span>
          </BarcodeChar>
          <WeightChar>
            Вес: <span>{currentItem.size}</span>
          </WeightChar>
          <Volume>
            Вес: <span>{currentItem.size}</span>
          </Volume>
          <BoxQuantity>
            Вес: <span>{currentItem.size}</span>
          </BoxQuantity>
        </Characteristics>
      )}
    </Wrapper>
  );
}

export default ItemCardInfo;
