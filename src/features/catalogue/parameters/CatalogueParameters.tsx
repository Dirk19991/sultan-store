import { useState } from 'react';
import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';
import Input from '../../../components/Input';
import LookingGlass from '../../../components/LookingGlass';
import {
  CareType,
  useGoodsContext,
} from '../../../context/GoodsContextProvider';
import checkboxSorter from '../../../utils/checkboxSorter';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ICatalogueParameters } from '../Catalogue';
import filterGoods from '../../../utils/filterGoods';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  margin-left: 14px;
  margin-top: 30px;
`;

const Header = styled.h5`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 10px;
`;

export const Price = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 16px;

  > span {
    font-weight: 600;
    color: var(--black);
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`;
export const NumberInput = styled(NumericFormat)`
  text-align: center;
  font-weight: 300;
  font-family: 'Inter';
  font-size: 12px;
  line-height: 15px;
  opacity: 0.7;
  width: 100px;
  height: 23px;
  background: linear-gradient(
    90deg,
    rgba(255, 198, 80, 0.3) 0%,
    rgba(254, 202, 110, 0.3) 97.25%
  );
  border-radius: 1000px;
  outline: none;
  border: none;
`;

export const ManufacturerHeader = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);
  margin-bottom: 15px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const ManufacturerSearch = styled(Input)`
  width: 238px;
  padding: 13px 10px 13px 20px;
`;

export const ManufacturerGlass = styled(LookingGlass)`
  margin-right: 12px;
`;

export const CheckboxWrapper = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  > label {
    margin-bottom: -5px;
  }
`;

export const ShowAll = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  cursor: pointer;
  margin-bottom: 17px;

  > span {
    font-size: 8px;
    margin-left: 2px;
  }
`;

const DashedLine = styled.div`
  width: 238px;
  height: 0px;
  border: 1px dashed rgba(63, 78, 101, 0.1);
  margin-bottom: 15px;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FilterOption = styled.div<{
  name: CareType | '';
  careType: CareType | '';
}>`
  color: var(--black);
  font-weight: ${(props) => (props.name === props.careType ? '700' : '500')};
  font-size: 15.5px;
  line-height: 150%;
  text-transform: uppercase;
  cursor: pointer;
`;

function CatalogueParameters(props: ICatalogueParameters) {
  const {
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
  } = props;

  const [showAll, setShowAll] = useState(false);

  const { goods } = useGoodsContext();

  const sortedGoods = checkboxSorter(goods);

  const filterOptions: { name: CareType | ''; text: string; width: string }[] =
    [
      { name: 'body', text: 'Уход за телом', width: '100px' },
      { name: 'hands', text: ' Уход  за руками', width: '100px' },
      { name: 'feet', text: 'Уход за ногами', width: '100px' },
      { name: 'face', text: 'Уход  за лицом', width: '100px' },
      { name: 'hair', text: 'Уход за волосами', width: '120px' },
      { name: 'tan', text: 'Средства  для загара', width: '120px' },
      { name: 'shaving', text: 'Средства для бритья', width: '120px' },
      { name: 'hygiene', text: 'Гигиеническая продукция', width: '120px' },
      { name: 'mouth', text: 'Гигиена полости рта', width: '140px' },
      { name: 'gift', text: 'Подарочные наборы', width: '120px' },
      { name: 'paper', text: 'Бумажная продукция', width: '120px' },
    ];

  const setMinHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value.replaceAll(' ', '');

    if (typeof +input !== 'number' || isNaN(+input)) {
      return;
    } else {
      setMin(+input);
    }
  };

  const setMaxHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value.replaceAll(' ', '');

    if (typeof +input !== 'number' || isNaN(+input)) {
      return;
    } else {
      setMax(+input);
    }
  };

  const checkedManufacturersHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (e.target.checked) {
      setCheckedManufacturers([...checkedManufacturers, e.target.name]);
    } else {
      setCheckedManufacturers(
        checkedManufacturers.filter(
          (manufacturer) => manufacturer !== e.target.name
        )
      );
    }
  };

  return (
    <Wrapper>
      <Header>ПОДБОР ПО ПАРАМЕТРАМ</Header>
      <Price>
        Цена <span>₸</span>
      </Price>
      <InputWrapper>
        <NumberInput
          onChange={(e) => setMinHandler(e)}
          value={min}
          type='text'
          thousandSeparator=' '
        ></NumberInput>
        <div>-</div>
        <NumberInput
          onChange={(e) => setMaxHandler(e)}
          value={max}
          type='text'
          thousandSeparator=' '
        ></NumberInput>
      </InputWrapper>
      <ManufacturerHeader>Производитель</ManufacturerHeader>
      <SearchWrapper>
        <ManufacturerSearch
          onChange={(e) => setManufacturer(e.target.value)}
          value={manufacturer}
          placeholder='Поиск...'
        ></ManufacturerSearch>
        <ManufacturerGlass>
          <img src='./icons/lookingGlass.svg' alt='lookingGlass' />
        </ManufacturerGlass>
      </SearchWrapper>
      <CheckboxWrapper>
        {showAll &&
          sortedGoods.map((item) => (
            <FormControlLabel
              key={item[0]}
              control={
                <Checkbox
                  checked={checkedManufacturers.includes(item[0])}
                  name={item[0]}
                  onChange={(e) => checkedManufacturersHandler(e)}
                />
              }
              label={`${item[0]} (${item[1]})`}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 13,
                },
              }}
            />
          ))}
        {!showAll &&
          sortedGoods.slice(0, 4).map((item) => (
            <FormControlLabel
              key={item[0]}
              control={
                <Checkbox
                  checked={checkedManufacturers.includes(item[0])}
                  name={item[0]}
                  onChange={(e) => checkedManufacturersHandler(e)}
                />
              }
              label={`${item[0]} (${item[1]})`}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 13,
                },
              }}
            />
          ))}
      </CheckboxWrapper>
      <ShowAll onClick={() => setShowAll((prev) => !prev)}>
        Показать все <span>{showAll ? '▲' : '▼'}</span>
      </ShowAll>
      <DashedLine />
      <Filter>
        {filterOptions.map((option) => (
          <FilterOption
            onClick={() =>
              setCareType((prev) => (prev === option.name ? '' : option.name))
            }
            key={option.name}
            careType={careType}
            name={option.name}
          >
            {option.text}
          </FilterOption>
        ))}
      </Filter>
    </Wrapper>
  );
}
export default CatalogueParameters;
