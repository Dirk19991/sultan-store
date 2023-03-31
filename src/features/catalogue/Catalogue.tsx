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
  setMin: Dispatch<SetStateAction<number>>;
  setMax: Dispatch<SetStateAction<number>>;
  setManufacturer: Dispatch<SetStateAction<string>>;
  setCheckedManufacturers: Dispatch<SetStateAction<string[]>>;
  setCareType: Dispatch<SetStateAction<CareType | ''>>;
  setSelectedSort: Dispatch<SetStateAction<Selectors>>;
}

export interface IGridProps {
  min: number;
  max: number;
  manufacturer: string;
  checkedManufacturers: string[];
  careType: CareType | '';
  selectedSort: Selectors;
}

export interface ICatalogueHeaderProps {
  careType: CareType | '';
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

  const gridProps = {
    min,
    max,
    manufacturer,
    checkedManufacturers,
    careType,
    selectedSort,
  };

  const caltalogueHeaderProps = {
    careType,
    setCareType,
    setSelectedSort,
  };

  const parametersProps = {
    min,
    max,
    manufacturer,
    checkedManufacturers,
    careType,
    setMin,
    setMax,
    setManufacturer,
    setCheckedManufacturers,
    setSelectedSort,
    setCareType,
  };

  return mobileMedia ? (
    <MobileContainer>
      <MobileParameters {...parametersProps} />
      <CatalogueGrid {...gridProps} />
    </MobileContainer>
  ) : (
    <Container>
      <CatalogueHeader {...caltalogueHeaderProps} />
      <Wrapper>
        <CatalogueParameters {...parametersProps} />
        <CatalogueGrid {...gridProps} />
      </Wrapper>
    </Container>
  );
}
export default Catalogue;
