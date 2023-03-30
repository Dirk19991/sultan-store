import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';

export const Wrapper = styled.div<{ opened?: boolean }>`
  position: relative;
  padding: 0 15px;

  display: flex;
  flex-direction: column;
`;

export const Header = styled(PageHeader)`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 19px;
`;

export const MobileCartItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Image = styled.div`
  height: 197px;
  width: 290px;
  margin-bottom: 14px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: var(--black);
  margin-bottom: 10px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const VerticalLine = styled.div`
  height: 49px;
  width: 0px;
  opacity: 0.2;
  border: 1px dashed #3f4e65;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: var(--black);
`;

export const Separator = styled.div`
  width: 290px;
  border: 1px dashed #3f4e65;
  opacity: 0.2;
  margin-bottom: 20px;
  margin-top: 20px;
`;
