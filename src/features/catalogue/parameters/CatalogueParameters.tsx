import { useState } from 'react';
import {
  CareType,
  useGoodsContext,
} from '../../../context/GoodsContextProvider';
import checkboxSorter from '../../../utils/checkboxSorter';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ICatalogueParameters } from '../Catalogue';
import {
  Wrapper,
  Header,
  Price,
  InputWrapper,
  NumberInput,
  ManufacturerHeader,
  SearchWrapper,
  ManufacturerSearch,
  ManufacturerGlass,
  CheckboxWrapper,
  ShowAll,
  DashedLine,
  Filter,
  FilterOption,
} from './CatalogueParameters.style';

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

  // Делаем из товаров массив типа [Товар, количество]
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
          type='search'
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
