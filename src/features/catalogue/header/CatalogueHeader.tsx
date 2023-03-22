import React, { useState } from 'react';
import styled from 'styled-components';
import Light from '../../../components/Light';

const Wrapper = styled.div`
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  overflow: visible;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Breadcrumbs = styled.div`
  display: flex;
  gap: 9px;
  margin-bottom: 50px;
`;

const BreadcrumbsMain = styled(Light)`
  font-size: 14px;
`;

const DashedLine = styled.div`
  width: 0px;
  height: 16px;
  border: 1px dashed rgba(63, 78, 101, 0.1);
`;

const BreadcrumbsCurrent = styled(Light)`
  font-size: 14px;
  opacity: 0.5;
`;

const CategoryHeader = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  color: var(--black);
  text-transform: uppercase;
`;

const SortingGroup = styled.div`
  display: flex;
  gap: 7px;
  margin-right: 98px;
  margin-top: 21px;

  > span {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: var(--black);
  }
`;

const Select = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;
  transform: translateY(-2px);

  &:focus {
    outline: none;
  }
`;

const Filter = styled.div`
  display: flex;
  gap: 11px;
  margin-bottom: 20px;
`;

const FilterElement = styled.div<{
  width?: string;
}>`
  padding: 10px;
  height: 70px;
  min-width: ${(props) => (props.width ? props.width : '100px')};
  background: var(--white);
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.08);
  border-radius: 10px;
  line-height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function CatalogueHeader() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <Wrapper>
      <Breadcrumbs>
        <BreadcrumbsMain>Главная</BreadcrumbsMain>
        <DashedLine />
        <BreadcrumbsCurrent>Косметика и гигиена</BreadcrumbsCurrent>
      </Breadcrumbs>
      <Flex>
        <CategoryHeader>Косметика и гигиена</CategoryHeader>
        <SortingGroup>
          <span>Сортировка:</span>
          <Select onChange={(e) => setSelectedOption(e.target.value)}>
            <option value='priceUp'>Цена &#9652;</option>
            <option value='priceDown'>Цена &#9662;</option>
            <option value='nameUp'>Название &#9652;</option>
            <option value='nameDown'>Название &#9662;</option>
          </Select>
        </SortingGroup>
      </Flex>
      <Filter>
        <FilterElement>
          Уход <br /> за телом
        </FilterElement>
        <FilterElement>
          Уход <br /> за руками
        </FilterElement>
        <FilterElement>
          Уход <br /> за ногами
        </FilterElement>
        <FilterElement>
          Уход <br /> за лицом
        </FilterElement>
        <FilterElement width='120px'>
          Уход <br /> за волосами
        </FilterElement>
        <FilterElement width='120px'>
          Средства <br /> для загара
        </FilterElement>
        <FilterElement width='120px'>
          Средства <br /> для бритья
        </FilterElement>
        <FilterElement width='120px'>Подарочные наборы</FilterElement>
        <FilterElement width='140px'>Гигиеническая продукция</FilterElement>
        <FilterElement width='120px'>Гигиена полости рта</FilterElement>
        <FilterElement width='120px'>Бумажная продукция</FilterElement>
      </Filter>
    </Wrapper>
  );
}
export default CatalogueHeader;
