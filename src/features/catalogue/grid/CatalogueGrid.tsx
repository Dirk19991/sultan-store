import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  CareType,
  Item,
  useGoodsContext,
} from '../../../context/GoodsContextProvider';
import filterGoods from '../../../utils/filterGoods';
import sortGoods from '../../../utils/sortGoods';
import { ICatalogueParameters, Selectors } from '../Catalogue';
import GridCell from './gridCell/GridCell';

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-top: 10px;
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

  const sortedGoods = sortGoods(filteredGoods, selectedSort);

  return (
    <GridWrapper>
      {sortedGoods.map((item) => (
        <GridCell key={item.id} item={item} />
      ))}
    </GridWrapper>
  );
}
export default CatalogueGrid;
