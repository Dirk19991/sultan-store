import styled from 'styled-components';
import Column from '../../components/Column';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Light from '../../components/Light';
import LookingGlass from '../../components/LookingGlass';
import SemiBold from '../../components/SemiBold';
import YellowButton from '../../components/YellowButton';

export const Wrapper = styled.div`
  min-height: 500px;
  width: 100%;
  background-color: var(--darkGrey);
  color: var(--white);
`;

export const FooterContainer = styled(Container)`
  padding-top: 72px;
  padding-left: 14px;
  display: flex;
`;

export const LogoColumn = styled(Column)<{ tablet: boolean }>`
  display: ${(props) => (props.tablet ? 'none' : '')};
  max-width: 320px;
  margin-right: 59px;
`;

export const Logo = styled.div`
  margin-bottom: 13px;
`;

export const LogoSupply = styled.div`
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 45px;
`;

export const LogoSubscribe = styled.div`
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 15px;
`;

export const LogoInputWrapper = styled.div`
  position: relative;
`;

export const LogoInput = styled(Input)`
  width: 282px;
  background-color: var(--white);
  opacity: 1;
  &::placeholder {
    color: rgba(92, 99, 112, 0.6);
    font-family: 'Inter';
  }
`;

export const Arrow = styled(LookingGlass)`
  top: 10px;
  right: 48px;
  cursor: pointer;
`;

export const MenuColumn = styled(Column)`
  margin-right: 95px;
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 27px;
  > li {
    cursor: pointer;
  }
`;

export const CategoriesColumn = styled(Column)`
  margin-right: 97px;
`;

export const PriceColumn = styled(Column)`
  margin-right: 80px;
`;

export const PriceButton = styled(YellowButton)`
  width: 214px;
  margin-top: -5px;
  gap: 15px;
  margin-bottom: 24px;

  > div {
    margin-top: 3px;
    margin-right: 3px;
  }
`;

export const Messengers = styled(Column)`
  margin-left: 6px;
  gap: 19px;
`;

export const MessengerLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-left: -2px;

  > a {
    cursor: pointer;
  }
`;

export const ContactsColumn = styled(Column)`
  margin-right: 20px;
`;

export const Phone = styled(Column)`
  margin-bottom: 22px;
`;

export const PhoneNumber = styled(SemiBold)`
  color: white;
  margin-top: -5px;
  margin-bottom: 5px;
`;

export const Time = styled(Light)`
  margin-bottom: 7px;
`;

export const Mail = styled(Column)`
  margin-bottom: 25px;
`;

export const MailAddress = styled(SemiBold)`
  color: white;
`;

export const Payment = styled.div`
  display: flex;
  gap: 5px;
`;

export const AdminPanel = styled.div`
  margin-top: 10px;
  cursor: pointer;
  font-weight: 800;
`;
