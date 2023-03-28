import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../components/Container';
import Light from '../../components/Light';
import { useGoodsContext } from '../../context/GoodsContextProvider';
import {
  Breadcrumbs,
  BreadcrumbsCurrent,
  BreadcrumbsMain,
  DashedLine,
  MainContent,
  Wrapper,
} from './ItemCard.style';
import ItemCardImage from './ItemCardImage/ItemCardImage';
import ItemCardInfo from './ItemCardInfo/ItemCardInfo';

function ItemCard() {
  const location = useLocation();
  const barcode = location.pathname.split('/').at(-1);
  const { goods } = useGoodsContext();
  const currentItem = barcode
    ? goods.find((item) => +item.barcode === +barcode)
    : goods[0];

  return (
    <Container>
      <Wrapper>
        <Breadcrumbs>
          <BreadcrumbsMain>Главная</BreadcrumbsMain>
          <DashedLine />
          <BreadcrumbsMain>Каталог</BreadcrumbsMain>
          <DashedLine />
          <BreadcrumbsCurrent>{currentItem?.title}</BreadcrumbsCurrent>
        </Breadcrumbs>
        <MainContent>
          <ItemCardImage image={currentItem?.imageBig} />
          <ItemCardInfo currentItem={currentItem} />
        </MainContent>
      </Wrapper>
    </Container>
  );
}
export default ItemCard;
