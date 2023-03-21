import styled from 'styled-components';
import Container from '../../components/Container';
import Column from '../../components/Column';
import Input from '../../components/Input';
import LookingGlass from '../../components/LookingGlass';
import SemiBold from '../../components/SemiBold';
import FooterHeader from '../../components/FooterHeader';
import YellowButton from '../../components/YellowButton';
import OrderCall from '../../components/OrderCall';
import Light from '../../components/Light';

const Wrapper = styled.div`
  min-height: 500px;
  width: 100%;
  background-color: var(--darkGrey);
  color: var(--white);
`;

const FooterContainer = styled(Container)`
  padding-top: 72px;
  padding-left: 14px;
  display: flex;
`;

const LogoColumn = styled(Column)`
  max-width: 320px;
  margin-right: 59px;
`;

const Logo = styled.div`
  margin-bottom: 13px;
`;

const LogoSupply = styled.div`
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 45px;
`;

const LogoSubscribe = styled.div`
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 15px;
`;

const LogoInputWrapper = styled.div`
  position: relative;
`;

const LogoInput = styled(Input)`
  width: 282px;
  background-color: var(--white);
  opacity: 1;
  &::placeholder {
    color: rgba(92, 99, 112, 0.6);
  }
`;

const Arrow = styled(LookingGlass)`
  top: 10px;
  right: 48px;
`;

const MenuColumn = styled(Column)`
  margin-right: 95px;
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

const CategoriesColumn = styled(Column)`
  margin-right: 97px;
`;

const PriceColumn = styled(Column)`
  margin-right: 80px;
`;

const PriceButton = styled(YellowButton)`
  width: 214px;
  margin-top: -5px;
  gap: 15px;
  margin-bottom: 24px;

  > div {
    margin-top: 3px;
    margin-right: 3px;
  }
`;

const Messengers = styled(Column)`
  margin-left: 6px;
  gap: 19px;
`;

const MessengerLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-left: -2px;
`;

const ContactsColumn = styled(Column)``;

const Phone = styled(Column)`
  margin-bottom: 22px;
`;

const PhoneNumber = styled(SemiBold)`
  color: white;
  margin-top: -5px;
  margin-bottom: 5px;
`;

const Time = styled(Light)`
  margin-bottom: 7px;
`;

const Mail = styled(Column)`
  margin-bottom: 25px;
`;

const MailAddress = styled(SemiBold)`
  color: white;
`;

const Payment = styled.div`
  display: flex;
  gap: 5px;
`;

function Footer() {
  return (
    <Wrapper>
      <FooterContainer>
        <LogoColumn>
          <Logo>
            <img src='./icons/sultanLogoWhite.svg' alt='logo' />
          </Logo>
          <LogoSupply>
            Компания «Султан» — снабжаем розничные магазины товарами <br /> "под
            ключ" в Кокчетаве и Акмолинской области
          </LogoSupply>
          <LogoSubscribe>Подпишись на скидки и акции</LogoSubscribe>
          <LogoInputWrapper>
            <LogoInput placeholder='Введите ваш E-mail' />
            <Arrow>
              <div>
                <img src='./icons/arrow.svg' alt='arrow' />
              </div>
            </Arrow>
          </LogoInputWrapper>
        </LogoColumn>
        <MenuColumn>
          <FooterHeader>Меню сайта:</FooterHeader>
          <Links>
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
          </Links>
        </MenuColumn>
        <CategoriesColumn>
          <FooterHeader>Категории:</FooterHeader>
          <Links>
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
          </Links>
        </CategoriesColumn>
        <PriceColumn>
          <FooterHeader>Скачать прайс-лист:</FooterHeader>
          <PriceButton>
            <span>Прайс-лист</span>
            <div>
              <img src='./icons/download.svg' alt='download' />
            </div>
          </PriceButton>
          <Messengers>
            <div>Связь в мессенджерах:</div>
            <MessengerLinks>
              <div>
                <img src='./icons/whatsapp.svg' alt='whatsapp' />
              </div>
              <div>
                <img src='./icons/telegram.svg' alt='telegram' />
              </div>
            </MessengerLinks>
          </Messengers>
        </PriceColumn>
        <ContactsColumn>
          <FooterHeader>Контакты:</FooterHeader>
          <Phone>
            <PhoneNumber>+7 (777) 490-00-91</PhoneNumber>
            <Time>время работы: 9:00-20:00</Time>
            <OrderCall>Заказать звонок</OrderCall>
          </Phone>
          <Mail>
            <MailAddress>opt.sultan@mail.ru </MailAddress>
            <Light>На связи в любое время</Light>
          </Mail>

          <Payment>
            <div>
              <img src='./icons/visa.png' alt='visa' />
            </div>
            <div>
              <img src='./icons/mastercard.png' alt='mastercard' />
            </div>
          </Payment>
        </ContactsColumn>
      </FooterContainer>
    </Wrapper>
  );
}
export default Footer;
