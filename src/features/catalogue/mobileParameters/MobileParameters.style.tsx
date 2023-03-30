import styled from 'styled-components';
import PageHeader from '../../../components/PageHeader';
import { CareType } from '../../../context/GoodsContextProvider';
import { SortingGroup } from '../header/CatalogueHeader.style';
import {
  Filter,
  FilterOption,
  ManufacturerGlass,
  ManufacturerSearch,
  NumberInput,
  Price,
} from '../parameters/CatalogueParameters.style';

export const Wrapper = styled.div<{ visibility?: boolean }>`
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

export const Header = styled(PageHeader)`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 19px;
`;

export const SubHeader = styled(PageHeader)`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 11px;
`;

export const UpButton = styled(BackButton)`
  background-color: rgba(255, 202, 101, 0.5);
  margin-top: -5px;
  cursor: pointer;

  > div {
    margin-top: -4px;
  }
`;

export const MobilePrice = styled(Price)`
  > span {
    margin-left: 2px;
  }
`;

export const MobileNumberInput = styled(NumberInput)<{ width?: string }>`
  background: linear-gradient(
    90deg,
    rgba(255, 198, 80, 0.3) 0%,
    rgba(254, 202, 110, 0.3) 97.25%
  );
  width: ${(props) => props.width || '100px'};
`;

export const MobileManufacturerSearch = styled(ManufacturerSearch)`
  width: 290px;
`;

export const MobileManufacturerGlass = styled(ManufacturerGlass)`
  margin-right: 0px;
`;

export const MobileFilter = styled(Filter)`
  margin-bottom: 10px;
`;

export const MobileFilterOption = styled(FilterOption)<{
  name: CareType | '';
  careType: CareType | '';
}>`
  font-weight: ${(props) => (props.name === props.careType ? '700' : '400')};
  font-size: 14px;
  line-height: 17px;
  text-transform: none;
`;

export const MobileSortingGroup = styled(SortingGroup)`
  > span {
    margin-top: -2px;
  }
`;
