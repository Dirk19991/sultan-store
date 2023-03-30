import { useLocation } from 'react-router-dom';
import Container from '../../components/Container';
import { useGoodsContext } from '../../context/GoodsContextProvider';
import useMediaQuery from '../../hooks/useMediaQuery';
import MobileItemCard from '../mobileItemCard/MobileItemCard';
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
  const mobileMedia = useMediaQuery('(max-width: 900px)');

  const location = useLocation();
  const barcode = location.pathname.split('/').at(-1);
  const { goods } = useGoodsContext();
  const currentItem = barcode
    ? goods.find((item) => +item.barcode === +barcode)
    : goods[0];

  return mobileMedia ? (
    <MobileItemCard />
  ) : (
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
