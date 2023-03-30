import styled from 'styled-components';
import {
  CartButton,
  DescriptionButton,
  FreeShipping,
  Manufacturer,
  PriceList,
  ShareButton,
} from '../itemCard/ItemCardInfo/ItemCardInfo.style';

export const Wrapper = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  width: 256px;
  height: 179px;
  margin-bottom: 15px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 20px;

  > span {
    font-weight: 800;
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

export const MobileButton = styled(CartButton)`
  margin-right: 0;
`;

export const MobileShareButton = styled(ShareButton)`
  width: 59px;
  height: 59px;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.12);
`;

export const CartButtonWrapper = styled.div`
  display: flex;
  gap: 31px;
  margin-bottom: 20px;
`;

export const Price = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 130%;
  color: var(--black);
`;

export const MobileFreeShipping = styled(FreeShipping)`
  width: 290px;
  height: 77px;
  margin-bottom: 10px;

  > div > span {
    font-weight: 700;
  }
`;

export const MobilePriceList = styled(PriceList)`
  width: 290px;
  height: 77px;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 30px;
`;

export const MobileManufacturer = styled(Manufacturer)`
  margin-bottom: 0;
  margin-top: 0;
`;

export const MobileBrand = styled(MobileManufacturer)``;

export const MobileArticle = styled(MobileManufacturer)``;

export const MobileBox = styled(MobileManufacturer)``;

export const MobileBarcode = styled(MobileManufacturer)``;

export const MobileBoxsize = styled(MobileManufacturer)``;
export const MobileWeight = styled(MobileManufacturer)``;

export const MobileDescriptionButton = styled(DescriptionButton)`
  margin-bottom: 20px;
`;
