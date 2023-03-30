import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import MobileContainer from '../../components/MobileContainer';
import { CareType } from '../../context/GoodsContextProvider';
import useMediaQuery from '../../hooks/useMediaQuery';
import CatalogueGrid from './grid/CatalogueGrid';
import CatalogueHeader from './header/CatalogueHeader';

import MobileParameters from './mobileParameters/MobileParameters';
import CatalogueParameters from './parameters/CatalogueParameters';

export type Selectors = 'nameDown' | 'nameUp' | 'priceDown' | 'priceUp';

export interface ICatalogueParameters {
  min: number;
  max: number;
  manufacturer: string;
  checkedManufacturers: string[];
  careType: CareType | '';
  selectedSort: Selectors;
  setMin: Dispatch<SetStateAction<number>>;
  setMax: Dispatch<SetStateAction<number>>;
  setManufacturer: Dispatch<SetStateAction<string>>;
  setCheckedManufacturers: Dispatch<SetStateAction<string[]>>;
  setCareType: Dispatch<SetStateAction<CareType | ''>>;
  setSelectedSort: Dispatch<SetStateAction<Selectors>>;
}

const Wrapper = styled.div`
  display: flex;
  gap: 91px;
  align-items: flex-start;
  margin-bottom: 50px;
`;

function Catalogue() {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(10000);
  const [manufacturer, setManufacturer] = useState<string>('');
  const [checkedManufacturers, setCheckedManufacturers] = useState<string[]>(
    []
  );
  const [careType, setCareType] = useState<CareType | ''>('');
  const [selectedSort, setSelectedSort] = useState<Selectors>('priceDown');

  const mobileMedia = useMediaQuery('(max-width: 900px)');

  const childProps = {
    min,
    max,
    manufacturer,
    checkedManufacturers,
    setMin,
    setMax,
    setManufacturer,
    setCheckedManufacturers,
    careType,
    setCareType,
    selectedSort,
    setSelectedSort,
  };

  return mobileMedia ? (
    <MobileContainer>
      <MobileParameters {...childProps} />
      <CatalogueGrid {...childProps} />
    </MobileContainer>
  ) : (
    <Container>
      <CatalogueHeader {...childProps} />
      <Wrapper>
        <CatalogueParameters {...childProps} />
        <CatalogueGrid {...childProps} />
      </Wrapper>
    </Container>
  );
}
export default Catalogue;
