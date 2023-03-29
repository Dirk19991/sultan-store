import styled from 'styled-components';
import FooterHeader from '../../components/FooterHeader';
import Light from '../../components/Light';
import MobileContainer from '../../components/MobileContainer';
import OrderCall from '../../components/OrderCall';
import YellowButton from '../../components/YellowButton';
import {
  Arrow,
  CategoriesColumn,
  Links,
  LogoInput,
  LogoInputWrapper,
  MenuColumn,
  PhoneNumber,
  Phone,
  Time,
  MailAddress,
  Mail,
  Payment,
  MessengerLinks,
  Messengers,
} from './Footer.style';

const Wrapper = styled.div`
  min-height: 748px;
  width: 100%;
  background-color: var(--darkGrey);
  color: var(--white);
  margin-top: 30px;
`;

const MobileFooterContainer = styled(MobileContainer)`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  margin-bottom: 14px;
`;

const Logo = styled.div``;

const Price = styled(YellowButton)`
  width: 149px;
  min-width: 149px;
  height: 40px;
  margin-right: 0px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  gap: 4px;
`;

const DownloadIcon = styled.div`
  margin-top: 2px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 14px;
`;

const Subscribe = styled(Description)``;

const MobileLogoInput = styled(LogoInput)`
  width: 290px;
`;

const MobileArrow = styled(Arrow)`
  right: 10px;
`;
const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 25px;

  > div {
    margin: 0;
    width: 150px;
  }
`;

const MobileLinks = styled(Links)`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  gap: 20px;
`;

const MobileFooterHeader = styled(FooterHeader)`
  margin-bottom: 20px;
`;

const MobileCategoriesColumn = styled(CategoriesColumn)`
  transform: translateX(5px);
`;

const ContactsHeader = styled(MobileFooterHeader)`
  margin-bottom: 30px;
`;

const ContactsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const MobilePayment = styled(Payment)`
  margin-top: -15px;
`;

const PhoneWrapper = styled.div`
  min-width: 170px;
`;

const MobileMessengers = styled(Messengers)`
  > div {
    line-height: 150%;
  }

  margin-top: -10px;
`;

function MobileFooter() {
  return (
    <Wrapper>
      <MobileFooterContainer>
        <Flex>
          <Logo>
            <img src='./icons/sultanLogoSmallWhite.svg' alt='logo' />
          </Logo>
          <Price>
            <div>Прайс-лист</div>
            <DownloadIcon>
              <img src='./icons/downloadSmall.svg' alt='download' />
            </DownloadIcon>
          </Price>
        </Flex>
        <Description>
          Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в
          Кокчетаве и Акмолинской области
        </Description>
        <Subscribe>Подпишись на скидки и акции</Subscribe>
        <LogoInputWrapper>
          <MobileLogoInput placeholder='Введите ваш E-mail' />
          <MobileArrow>
            <div>
              <img src='./icons/arrow.svg' alt='arrow' />
            </div>
          </MobileArrow>
        </LogoInputWrapper>
        <LinksWrapper>
          <MenuColumn>
            <MobileFooterHeader>Меню сайта:</MobileFooterHeader>
            <MobileLinks>
              <li>
                <a href='#'></a>О компании
              </li>
              <li>
                <a href='#'></a>Доставка и оплата
              </li>
              <li>
                <a href='#'></a>Возврат
              </li>
              <li>
                <a href='#'></a>Контакты
              </li>
            </MobileLinks>
          </MenuColumn>
          <MobileCategoriesColumn>
            <MobileFooterHeader>Категории:</MobileFooterHeader>
            <MobileLinks>
              <li>
                <a href='#'></a>Бытовая химия
              </li>
              <li>
                <a href='#'></a>Косметика и гигиена
              </li>
              <li>
                <a href='#'></a>Товары для дома
              </li>
              <li>
                <a href='#'></a>Товары для детей и мам
              </li>
              <li>
                <a href='#'></a>Посуда
              </li>
            </MobileLinks>
          </MobileCategoriesColumn>
        </LinksWrapper>
        <ContactsHeader>Контакты:</ContactsHeader>
        <ContactsWrapper>
          <PhoneWrapper>
            <Phone>
              <PhoneNumber>+7 (777) 490-00-91</PhoneNumber>
              <Time>время работы: 9:00-20:00</Time>
              <OrderCall>Заказать звонок</OrderCall>
            </Phone>
            <Mail>
              <MailAddress>opt.sultan@mail.ru </MailAddress>
              <Light>На связи в любое время</Light>
            </Mail>

            <MobilePayment>
              <div>
                <img src='./icons/visa.png' alt='visa' />
              </div>
              <div>
                <img src='./icons/mastercard.png' alt='mastercard' />
              </div>
            </MobilePayment>
          </PhoneWrapper>
          <MobileMessengers>
            <div>Связь в мессенджерах:</div>
            <MessengerLinks>
              <div>
                <img src='./icons/whatsapp.svg' alt='whatsapp' />
              </div>
              <div>
                <img src='./icons/telegram.svg' alt='telegram' />
              </div>
            </MessengerLinks>
          </MobileMessengers>
        </ContactsWrapper>
      </MobileFooterContainer>
    </Wrapper>
  );
}
export default MobileFooter;
