import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import { CareType } from '../../context/GoodsContextProvider';
import data from '../../data/data.json';
import CatalogueGrid from './grid/CatalogueGrid';
import CatalogueHeader from './header/CatalogueHeader';
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

  console.log(
    min,
    max,
    manufacturer,
    checkedManufacturers,
    careType,
    selectedSort
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
    careType,
    setCareType,
    selectedSort,
    setSelectedSort,
  };

  return (
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
