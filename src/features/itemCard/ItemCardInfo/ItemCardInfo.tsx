import { useState } from 'react';
import {
  ItemButton,
  ItemQuantity,
} from '../../../components/QuantityButtonsGroup';
import { Item } from '../../../context/GoodsContextProvider';
import { useShoppingCartContext } from '../../../context/ShoppingCartProvider';
import {
  Wrapper,
  InStock,
  ItemTitle,
  ExtraBold,
  Weight,
  Flex,
  Price,
  ItemButtons,
  CartButton,
  CartText,
  ShoppingCart,
  ShareButton,
  FreeShipping,
  Bold,
  PriceList,
  DownloadIcon,
  Manufacturer,
  Brand,
  Article,
  Barcode,
  Type,
  DescriptionButton,
  Description,
  DashedLine,
  CharacteristicsButton,
  Characteristics,
  Purpose,
  BarcodeChar,
  WeightChar,
  Volume,
  BoxQuantity,
} from './ItemCardInfo.style';

interface IItemCardInfo {
  currentItem: Item | undefined;
}

function ItemCardInfo(props: IItemCardInfo) {
  const currentItem = props.currentItem as Item;
  const { addCartItem } = useShoppingCartContext();

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
          <ItemButton data-testid='decrease' onClick={decreaseNumberHandler}>
            -
          </ItemButton>
          <ItemQuantity data-testid='quantity'>{itemsNumber}</ItemQuantity>
          <ItemButton data-testid='increase' onClick={increaseNumberHandler}>
            +
          </ItemButton>
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
        Описание <span>{openDescription ? '▼' : '▲'}</span>
      </DescriptionButton>
      {openDescription && <Description>{currentItem.description}</Description>}
      <DashedLine />
      <CharacteristicsButton
        margin={!openCharacterstics}
        onClick={() => setOpenCharacterstics((prev) => !prev)}
      >
        Характеристики <span>{openCharacterstics ? '▼' : '▲'}</span>
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
            Объем: <span>{currentItem.size}</span>
          </Volume>
          <BoxQuantity>
            Кол-во в коробке: <span>{currentItem.size}</span>
          </BoxQuantity>
        </Characteristics>
      )}
    </Wrapper>
  );
}

export default ItemCardInfo;
