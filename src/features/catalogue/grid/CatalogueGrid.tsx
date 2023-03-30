import { useEffect, useState } from 'react';

import { useBurgerMenuContext } from '../../../context/BurgerMenuProvider';
import { useGoodsContext } from '../../../context/GoodsContextProvider';
import filterGoods from '../../../utils/filterGoods';
import getNumbersBefore from '../../../utils/getNumbersBefore';
import sortGoods from '../../../utils/sortGoods';
import { ICatalogueParameters } from '../Catalogue';
import {
  Wrapper,
  GridWrapper,
  Pagination,
  Number,
  ArrowLeft,
  ArrowRight,
} from './CatalogueGrid.style';
import GridCell from './gridCell/GridCell';

function CatalogueGrid(props: ICatalogueParameters) {
  const { goods } = useGoodsContext();
  const {
    min,
    max,
    manufacturer,
    checkedManufacturers,
    careType,
    selectedSort,
  } = props;

  const filteredGoods = filterGoods(
    goods,
    min,
    max,
    manufacturer,
    checkedManufacturers,
    careType
  );

  const { openMenu, setOpenMenu } = useBurgerMenuContext();

  const [currentPage, setCurrentPage] = useState<number>(1);

  // логика для пагинации, находим число страниц и дробим товары по 15. Показываем в зависимости от страницы
  const sortedGoods = sortGoods(filteredGoods, selectedSort);
  const pages = getNumbersBefore(Math.ceil(sortedGoods.length / 15));
  const paginatedGoods = sortedGoods.slice(
    (currentPage - 1) * 15,
    (currentPage - 1) * 15 + 15
  );

  const increasePage = () => {
    if (currentPage === pages.length) return;
    setCurrentPage(currentPage + 1);
  };

  const decreasePage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  // скролл к началу страницы при смене страницы
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [currentPage]);

  return (
    <Wrapper onClick={() => setOpenMenu(false)} opened={openMenu}>
      <GridWrapper>
        {paginatedGoods.map((item) => (
          <GridCell key={item.id} item={item} />
        ))}
      </GridWrapper>
      {sortedGoods.length > 0 && (
        <Pagination>
          <ArrowLeft onClick={decreasePage}>
            <img src='./icons/arrowLeft.svg' alt='arrowLeft' />
          </ArrowLeft>
          {pages.map((elem, i) => (
            <Number highlighted={i + 1 === currentPage} key={elem}>
              {elem}
            </Number>
          ))}
          <ArrowRight onClick={increasePage}>
            <img src='./icons/arrowRight.svg' alt='arrowRight' />
          </ArrowRight>
        </Pagination>
      )}
    </Wrapper>
  );
}
export default CatalogueGrid;
