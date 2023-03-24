import { useState } from 'react';
import styled from 'styled-components';

import Container from '../../components/Container';
import data from '../../data/data.json';
import CatalogueGrid from './grid/CatalogueGrid';
import CatalogueHeader from './header/CatalogueHeader';
import CatalogueParameters from './parameters/CatalogueParameters';

const Wrapper = styled.div`
  display: flex;
  gap: 91px;
`;

function Catalogue() {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(10000);
  const [manufacturer, setManufacturer] = useState<string>('');
  const [checkedManufacturers, setCheckedManufacturers] = useState<string[]>(
    []
  );

  const childProps = {
    min,
    max,
    manufacturer,
    checkedManufacturers,
    setMin,
    setMax,
    setManufacturer,
    setCheckedManufacturers,
  };

  return (
    <Container>
      <CatalogueHeader />
      <Wrapper>
        <CatalogueParameters {...childProps} />
        <CatalogueGrid />
      </Wrapper>
    </Container>
  );
}
export default Catalogue;
