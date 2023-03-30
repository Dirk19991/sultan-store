import styled from 'styled-components';
import Light from '../../../components/Light';
import { CareType } from '../../../context/GoodsContextProvider';

export const Wrapper = styled.div`
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  overflow: visible;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Breadcrumbs = styled.div`
  display: flex;
  gap: 9px;
  margin-bottom: 50px;
`;

export const BreadcrumbsMain = styled(Light)`
  font-size: 14px;
`;

export const DashedLine = styled.div`
  width: 0px;
  height: 16px;
  border: 1px dashed rgba(63, 78, 101, 0.1);
`;

export const BreadcrumbsCurrent = styled(Light)`
  font-size: 14px;
  opacity: 0.5;
`;

export const SortingGroup = styled.div`
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

export const Select = styled.select`
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

export const Filter = styled.div<{ wrap: number }>`
  display: flex;
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
  gap: 11px;
  margin-bottom: 20px;
`;

export const FilterElement = styled.div<{
  width?: string;
  name: CareType | '';
  careType: CareType | '';
}>`
  padding: 10px;
  height: 70px;
  min-width: ${(props) => (props.width ? props.width : '100px')};
  width: ${(props) => (props.width ? props.width : '100px')};
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
