import styled from 'styled-components';
import FooterHeader from '../../../components/FooterHeader';
import MobileContainer from '../../../components/MobileContainer';
import YellowButton from '../../../components/YellowButton';
import {
  Arrow,
  CategoriesColumn,
  Links,
  LogoInput,
  Messengers,
  Payment,
} from '../Footer.style';

export const Wrapper = styled.div`
  min-height: 748px;
  width: 100%;
  background-color: var(--darkGrey);
  color: var(--white);
  margin-top: 30px;
`;

export const MobileFooterContainer = styled(MobileContainer)`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  margin-bottom: 14px;
`;

export const Logo = styled.div``;

export const Price = styled(YellowButton)`
  width: 149px;
  min-width: 149px;
  height: 40px;
  margin-right: 0px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  gap: 4px;
`;

export const DownloadIcon = styled.div`
  margin-top: 2px;
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 14px;
`;

export const Subscribe = styled(Description)``;

export const MobileLogoInput = styled(LogoInput)`
  width: 290px;
`;

export const MobileArrow = styled(Arrow)`
  right: 10px;
`;
export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 25px;

  > div {
    margin: 0;
    width: 150px;
  }
`;

export const MobileLinks = styled(Links)`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  gap: 20px;
`;

export const MobileFooterHeader = styled(FooterHeader)`
  margin-bottom: 20px;
`;

export const MobileCategoriesColumn = styled(CategoriesColumn)`
  transform: translateX(5px);
`;

export const ContactsHeader = styled(MobileFooterHeader)`
  margin-bottom: 30px;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const MobilePayment = styled(Payment)`
  margin-top: -15px;
`;

export const PhoneWrapper = styled.div`
  min-width: 170px;
`;

export const MobileMessengers = styled(Messengers)`
  > div {
    line-height: 150%;
  }

  margin-top: -10px;
`;
