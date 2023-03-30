import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MobileContainer from '../../components/MobileContainer';
import {
  ItemButton,
  ItemQuantity,
} from '../../components/QuantityButtonsGroup';
import { useGoodsContext } from '../../context/GoodsContextProvider';
import { useShoppingCartContext } from '../../context/ShoppingCartProvider';
import {
  BackButton,
  BackButtonWrapper,
} from '../catalogue/mobileParameters/MobileParameters.style';
import { Link } from 'react-router-dom';

import {
  Article,
  BarcodeChar,
  BoxQuantity,
  Brand,
  CartButton,
  CartText,
  Characteristics,
  CharacteristicsButton,
  DashedLine,
  Description,
  DescriptionButton,
  DownloadIcon,
  FreeShipping,
  InStock,
  ItemButtons,
  Manufacturer,
  PriceList,
  Purpose,
  ShareButton,
  ShoppingCart,
  Type,
  Volume,
  WeightChar,
} from '../itemCard/ItemCardInfo/ItemCardInfo.style';
import {
  Wrapper,
  Image,
  Title,
  Flex,
  Price,
  CartButtonWrapper,
  MobileButton,
  MobileShareButton,
  MobileFreeShipping,
  MobilePriceList,
  Info,
  MobileManufacturer,
  MobileBrand,
  MobileArticle,
  MobileBox,
  MobileBarcode,
  MobileBoxsize,
  MobileDescriptionButton,
  MobileWeight,
} from './MobileItemCard.style';

function MobileItemCard() {
  const location = useLocation();
  const barcode = location.pathname.split('/').at(-1);
  const { goods } = useGoodsContext();
  const currentItem = barcode
    ? goods.find((item) => +item.barcode === +barcode)
    : goods[0];

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

  return (
    <MobileContainer>
      <Wrapper>
        <Link to='/'>
          <BackButtonWrapper>
            <BackButton>
              <img src='./icons/arrowLeftBlack.svg' alt='arrowLeft' />
            </BackButton>
            <div>Назад</div>
          </BackButtonWrapper>
        </Link>
        <Image>
          <img src={currentItem?.imageBig} alt='' />
        </Image>
        <InStock>В наличии</InStock>
        <Title>
          <span>{currentItem?.brand}</span> {currentItem?.title}
        </Title>
        <Flex>
          <Price>{currentItem?.price} ₸</Price>
          <ItemButtons>
            <ItemButton onClick={decreaseNumberHandler}>-</ItemButton>
            <ItemQuantity>{itemsNumber}</ItemQuantity>
            <ItemButton onClick={increaseNumberHandler}>+</ItemButton>
          </ItemButtons>
        </Flex>
        <CartButtonWrapper>
          <MobileButton
            onClick={() =>
              currentItem ? addCartItem(currentItem, itemsNumber) : {}
            }
          >
            <CartText>В корзину</CartText>
            <ShoppingCart>
              <img src='./icons/shoppingCartSmall.svg' alt='shoppingCart' />
            </ShoppingCart>
          </MobileButton>
          <MobileShareButton>
            <img src='./icons/share.svg' alt='share' />
          </MobileShareButton>
        </CartButtonWrapper>
        <MobileFreeShipping>
          <div>
            При покупке от <span>10 000 ₸</span> бесплатная доставка по
            Кокчетаву и области
          </div>
        </MobileFreeShipping>
        <MobilePriceList>
          <div>Прайс-лист</div>
          <DownloadIcon>
            <img src='./icons/downloadBlack.svg' alt='download' />
          </DownloadIcon>
        </MobilePriceList>
        <Info>
          <MobileManufacturer>
            Производитель: <span>{currentItem?.manufacturer}</span>
          </MobileManufacturer>
          <MobileBrand>
            Бренд: <span>{currentItem?.brand}</span>
          </MobileBrand>
          <MobileArticle>
            Артикул: <span>{currentItem?.barcode}</span>
          </MobileArticle>
          <MobileBox>Кол-во в коробке: 2</MobileBox>
          <MobileBarcode>
            Штрихкод: <span>{currentItem?.barcode}</span>
          </MobileBarcode>
          <MobileBox>
            Кол-во в коробке: <span>2</span>
          </MobileBox>
          <MobileWeight>
            Вес коробки: <span>{currentItem?.size}</span>
          </MobileWeight>
        </Info>
        <MobileDescriptionButton
          onClick={() => setOpenDescription((prev) => !prev)}
        >
          Описание <span>{openDescription ? '▼' : '▲'}</span>
        </MobileDescriptionButton>
        {openDescription && (
          <Description>{currentItem?.description}</Description>
        )}
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
              Назначение: <span>{currentItem?.brand}</span>
            </Purpose>
            <Type>
              Тип: <span>{currentItem?.brand}</span>
            </Type>
            <Manufacturer>
              Производитель: <span>{currentItem?.manufacturer}</span>
            </Manufacturer>
            <Brand>
              Бренд: <span>{currentItem?.brand}</span>
            </Brand>
            <Article>
              Артикул: <span>{currentItem?.barcode}</span>
            </Article>
            <BarcodeChar>
              Штрихкод: <span>{currentItem?.barcode}</span>
            </BarcodeChar>
            <WeightChar>
              Вес: <span>{currentItem?.size}</span>
            </WeightChar>
            <Volume>
              Объем: <span>{currentItem?.size}</span>
            </Volume>
            <BoxQuantity>
              Кол-во в коробке: <span>{currentItem?.size}</span>
            </BoxQuantity>
          </Characteristics>
        )}
      </Wrapper>
    </MobileContainer>
  );
}
export default MobileItemCard;
