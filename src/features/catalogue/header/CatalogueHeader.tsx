import React, { useState } from 'react';
import styled from 'styled-components';
import Light from '../../../components/Light';
import PageHeader from '../../../components/PageHeader';
import { CareType } from '../../../context/GoodsContextProvider';
import { ICatalogueParameters, Selectors } from '../Catalogue';

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
  name: CareType | '';
  careType: CareType | '';
}>`
  padding: 10px;
  height: 70px;
  min-width: ${(props) => (props.width ? props.width : '100px')};
  font-weight: ${(props) => (props.name === props.careType ? '700' : '400')};
  background: var(--white);
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.08);
  border-radius: 10px;
  line-height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

function CatalogueHeader(props: ICatalogueParameters) {
  const { careType, setCareType, selectedSort, setSelectedSort } = props;

  const filterOptions: { name: CareType | ''; text: string; width: string }[] =
    [
      { name: 'body', text: 'Уход <br /> за телом', width: '100px' },
      { name: 'hands', text: ' Уход <br /> за руками', width: '100px' },
      { name: 'feet', text: 'Уход <br /> за ногами', width: '100px' },
      { name: 'face', text: 'Уход <br /> за лицом', width: '100px' },
      { name: 'hair', text: 'Уход <br /> за волосами', width: '120px' },
      { name: 'tan', text: 'Средства <br /> для загара', width: '120px' },
      { name: 'shaving', text: 'Средства <br /> для бритья', width: '120px' },
      { name: 'gift', text: 'Подарочные наборы', width: '120px' },
      { name: 'hygiene', text: 'Гигиеническая продукция', width: '120px' },
      { name: 'mouth', text: 'Гигиена полости рта', width: '140px' },
      { name: 'paper', text: 'Бумажная продукция', width: '120px' },
    ];

  return (
    <Wrapper>
      <Breadcrumbs>
        <BreadcrumbsMain>Главная</BreadcrumbsMain>
        <DashedLine />
        <BreadcrumbsCurrent>Косметика и гигиена</BreadcrumbsCurrent>
      </Breadcrumbs>
      <Flex>
        <PageHeader>Косметика и гигиена</PageHeader>
        <SortingGroup>
          <span>Сортировка:</span>
          <Select
            onChange={(e) => setSelectedSort(e.target.value as Selectors)}
          >
            <option value='priceDown'>Цена &#9662;</option>
            <option value='priceUp'>Цена &#9652;</option>
            <option value='nameUp'>Название &#9652;</option>
            <option value='nameDown'>Название &#9662;</option>
          </Select>
        </SortingGroup>
      </Flex>
      <Filter>
        {filterOptions.map((option) => (
          <FilterElement
            name={option.name}
            careType={careType}
            onClick={() =>
              setCareType((prev) => (prev === option.name ? '' : option.name))
            }
            dangerouslySetInnerHTML={{ __html: option.text }}
            key={option.name}
            width={option.width}
          ></FilterElement>
        ))}
      </Filter>
    </Wrapper>
  );
}
export default CatalogueHeader;
