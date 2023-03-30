import styled from 'styled-components';
import { ButtonsWrapper } from '../../../components/QuantityButtonsGroup';
import YellowButton from '../../../components/YellowButton';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const InStock = styled.div`
  color: var(--green);
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 10px;
`;

export const ItemTitle = styled.div`
  font-size: 30px;
  line-height: 150%;
  font-weight: 500;
  color: var(--black);
  margin-bottom: 10px;
`;

export const ExtraBold = styled.span`
  font-weight: 800;
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Weight = styled.div`
  font-size: 12px;
  line-height: 130%;
  display: flex;
  gap: 5px;
  margin-bottom: 12px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Price = styled.div`
  font-weight: 800;
  font-size: 30px;
  line-height: 130%;
  color: var(--black);
  margin-right: 40px;
`;

export const ItemButtons = styled(ButtonsWrapper)`
  margin-right: 38px;
`;

export const CartButton = styled(YellowButton)`
  display: flex;
  align-items: center;
  font-weight: 600;
  width: 184px;
  min-width: 153px;
  height: 59px;
  color: var(--white);
  font-size: 14px;
  line-height: 17px;
  margin-right: 70px;
  cursor: pointer;
  transition: all 0.2s;
  transform: translateZ(0);

  &:hover {
    background-color: rgb(248, 180, 45);
  }

  &:active {
    transform: scale(1.1);
  }
`;

export const CartText = styled.div`
  margin-right: -3px;
  margin-top: 2px;
`;

export const ShoppingCart = styled.div`
  margin-top: 6px;
`;

export const ShareButton = styled.div`
  width: 77px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.08);
  border-radius: 10px;
  margin-right: 10px;
`;

export const FreeShipping = styled.div`
  width: 316px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 30px;
  font-size: 12px;
  line-height: 150%;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.08);
  border-radius: 10px;
  margin-right: 10px;
`;

export const PriceList = styled.div`
  width: 186px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.08);
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  gap: 10px;
`;

export const DownloadIcon = styled.div`
  margin-top: 3px;
`;

export const Manufacturer = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  margin-top: 15px;
  margin-bottom: 5px;

  > span {
    font-weight: 600;
    color: var(--black);
  }
`;

export const Brand = styled(Manufacturer)`
  margin-top: 0;
`;

export const Article = styled(Manufacturer)`
  margin-top: 0;
`;

export const Barcode = styled(Manufacturer)`
  margin-top: 0;
  margin-bottom: 28px;
`;

export const DescriptionButton = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 13px;

  > span {
    font-size: 6px;
    margin-top: 3px;
  }
`;

export const Description = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 20px;
`;

export const DashedLine = styled.div`
  width: 269.5px;
  height: 0px;
  border: 1px dashed rgba(63, 78, 101, 0.1);
  margin-bottom: 20px;
`;

export const CharacteristicsButton = styled(DescriptionButton)<{
  margin: boolean;
}>`
  margin-bottom: ${(props) => (props.margin ? '100px' : '5px')};}
`;

export const Characteristics = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 20px;
`;

export const Purpose = styled(Manufacturer)`
  margin-top: 0;
`;

export const Type = styled(Manufacturer)`
  margin-top: 0;
  margin-bottom: -10px;
`;

export const BarcodeChar = styled(Manufacturer)`
  margin-top: 0;
`;

export const WeightChar = styled(Manufacturer)`
  margin-top: 0;
`;

export const Volume = styled(Manufacturer)`
  margin-top: 0;
`;

export const BoxQuantity = styled(Manufacturer)`
  margin-top: 0;
`;
