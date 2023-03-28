import styled from 'styled-components';
import Light from '../../components/Light';

export const Wrapper = styled.div`
  margin-left: 14px;
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

export const MainContent = styled.div`
  display: flex;
  gap: 40px;
`;
