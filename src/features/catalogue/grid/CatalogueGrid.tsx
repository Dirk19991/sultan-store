import styled from 'styled-components';
import { useGoodsContext } from '../../../context/GoodsContextProvider';
import GridCell from './gridCell/GridCell';

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-left: 357px;
  margin-top: 10px;
`;

function CatalogueGrid() {
  const { goods } = useGoodsContext();

  return (
    <GridWrapper>
      {goods.map((item) => (
        <GridCell item={item} />
      ))}
    </GridWrapper>
  );
}
export default CatalogueGrid;
