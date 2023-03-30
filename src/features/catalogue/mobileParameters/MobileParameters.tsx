import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import styled from 'styled-components';
import Light from '../../../components/Light';
import PageHeader from '../../../components/PageHeader';
import SemiBold from '../../../components/SemiBold';
import { useBurgerMenuContext } from '../../../context/BurgerMenuProvider';
import {
  CareType,
  useGoodsContext,
} from '../../../context/GoodsContextProvider';

import checkboxSorter from '../../../utils/checkboxSorter';
import BurgerMenu from '../../burgerMenu/BurgerMenu';
import { ICatalogueParameters, Selectors } from '../Catalogue';
import { Select, SortingGroup } from '../header/CatalogueHeader';
import {
  CheckboxWrapper,
  Filter,
  FilterOption,
  InputWrapper,
  ManufacturerGlass,
  ManufacturerHeader,
  ManufacturerSearch,
  NumberInput,
  Price,
  SearchWrapper,
  ShowAll,
} from '../parameters/CatalogueParameters';

const Wrapper = styled.div<{ visibility?: boolean }>`
  position: relative;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  display: ${(props) => (props.visibility ? 'none' : '')};
`;

export const BackButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-top: 30px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const BackButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: rgba(255, 202, 101, 0.3);
  border-radius: 100px;
  border: none;
  cursor: pointer;
`;

const Header = styled(PageHeader)`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 19px;
`;

const SubHeader = styled(PageHeader)`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 11px;
`;

const UpButton = styled(BackButton)`
  background-color: rgba(255, 202, 101, 0.5);
  margin-top: -5px;
  cursor: pointer;

  > div {
    margin-top: -4px;
  }
`;

const MobilePrice = styled(Price)`
  > span {
    margin-left: 2px;
  }
`;

const MobileNumberInput = styled(NumberInput)<{ width?: string }>`
  background: linear-gradient(
    90deg,
    rgba(255, 198, 80, 0.3) 0%,
    rgba(254, 202, 110, 0.3) 97.25%
  );
  width: ${(props) => props.width || '100px'};
`;

const MobileManufacturerSearch = styled(ManufacturerSearch)`
  width: 290px;
`;

const MobileManufacturerGlass = styled(ManufacturerGlass)`
  margin-right: 0px;
`;

const MobileFilter = styled(Filter)`
  margin-bottom: 10px;
`;

const MobileFilterOption = styled(FilterOption)<{
  name: CareType | '';
  careType: CareType | '';
}>`
  font-weight: ${(props) => (props.name === props.careType ? '700' : '400')};
  font-size: 14px;
  line-height: 17px;
  text-transform: none;
`;

function MobileParameters(props: ICatalogueParameters) {
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
    selectedSort,
    setSelectedSort,
  } = props;

  const { openMenu, setOpenMenu } = useBurgerMenuContext();

  const [showAll, setShowAll] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const { goods } = useGoodsContext();

  const sortedGoods = checkboxSorter(goods);

  const filterOptions: { name: CareType | ''; text: string; width: string }[] =
    [
      { name: 'body', text: 'Уход за телом', width: '100px' },
      { name: 'hands', text: ' Уход  за руками', width: '100px' },
      { name: 'feet', text: 'Уход за ногами', width: '100px' },
      { name: 'face', text: 'Уход  за лицом', width: '100px' },
      { name: 'hair', text: 'Уход за волосами', width: '120px' },
      { name: 'tan', text: 'Средства для загара', width: '120px' },
      { name: 'shaving', text: 'Средства для бритья', width: '120px' },
      { name: 'hygiene', text: 'Гигиеническая продукция', width: '120px' },
      { name: 'mouth', text: 'Гигиена полости рта', width: '140px' },
      { name: 'gift', text: 'Подарочные наборы', width: '120px' },
      { name: 'paper', text: 'Бумажная продукция', width: '120px' },
    ];

  const arrowSource = showFilter
    ? './icons/arrowUp.svg'
    : './icons/arrowDown.svg';

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
    <>
      <Wrapper>
        <BackButtonWrapper>
          <BackButton>
            <img src='./icons/arrowLeftBlack.svg' alt='arrowLeft' />
          </BackButton>
          <div>Назад</div>
        </BackButtonWrapper>
        <Header>Косметика и гигиена</Header>
        <SubHeader>
          <div>Подбор по параметрам</div>
          <UpButton onClick={() => setShowFilter((prev) => !prev)}>
            <div>
              <img src={arrowSource} alt='arrowUp' />
            </div>
          </UpButton>
        </SubHeader>
        {showFilter && (
          <>
            <MobileFilter>
              {filterOptions.map((option) => (
                <MobileFilterOption
                  onClick={() =>
                    setCareType((prev) =>
                      prev === option.name ? '' : option.name
                    )
                  }
                  key={option.name}
                  careType={careType}
                  name={option.name}
                >
                  {option.text}
                </MobileFilterOption>
              ))}
            </MobileFilter>
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
          </>
        )}

        <MobilePrice>
          Цена <span>₸</span>
        </MobilePrice>
        <InputWrapper>
          <MobileNumberInput
            onChange={(e) => setMinHandler(e)}
            value={min}
            type='text'
            thousandSeparator=' '
          ></MobileNumberInput>
          <div>-</div>
          <MobileNumberInput
            width='105px'
            onChange={(e) => setMaxHandler(e)}
            value={max}
            type='text'
            thousandSeparator=' '
          ></MobileNumberInput>
        </InputWrapper>
        <ManufacturerHeader>Производитель</ManufacturerHeader>
        <SearchWrapper>
          <MobileManufacturerSearch
            onChange={(e) => setManufacturer(e.target.value)}
            value={manufacturer}
            placeholder='Поиск...'
          ></MobileManufacturerSearch>
          <MobileManufacturerGlass>
            <img src='./icons/lookingGlass.svg' alt='lookingGlass' />
          </MobileManufacturerGlass>
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
            sortedGoods.slice(0, 2).map((item) => (
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
      </Wrapper>
    </>
  );
}
export default MobileParameters;
