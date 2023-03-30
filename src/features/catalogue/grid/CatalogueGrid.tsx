import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useBurgerMenuContext } from '../../../context/BurgerMenuProvider';
import { useGoodsContext } from '../../../context/GoodsContextProvider';
import filterGoods from '../../../utils/filterGoods';
import getNumbersBefore from '../../../utils/getNumbersBefore';
import sortGoods from '../../../utils/sortGoods';
import { ICatalogueParameters, Selectors } from '../Catalogue';
import GridCell from './gridCell/GridCell';

const Wrapper = styled.div<{ opened: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: center;
`;

const Number = styled.div<{ highlighted: boolean }>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background: ${(props) =>
    props.highlighted
      ? 'linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)'
      : '#fff'};
`;

const ArrowLeft = styled.div`
  margin-right: 33px;
  cursor: pointer;
`;

const ArrowRight = styled.div`
  margin-left: 33px;
  cursor: pointer;
`;

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

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 200,
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
