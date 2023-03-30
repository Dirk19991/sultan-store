import FormGroup from '@mui/material/FormGroup';
import { NumericFormat } from 'react-number-format';
import styled from 'styled-components';
import Input from '../../../components/Input';
import LookingGlass from '../../../components/LookingGlass';
import { CareType } from '../../../context/GoodsContextProvider';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  margin-left: 14px;
  margin-top: 30px;
`;

export const Header = styled.h5`
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

export const DashedLine = styled.div`
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
