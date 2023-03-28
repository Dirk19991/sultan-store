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
import {
  Arrow,
  CategoriesColumn,
  ContactsColumn,
  FooterContainer,
  Links,
  Logo,
  LogoColumn,
  LogoInput,
  LogoInputWrapper,
  LogoSubscribe,
  LogoSupply,
  Mail,
  MailAddress,
  MenuColumn,
  MessengerLinks,
  Messengers,
  Payment,
  Phone,
  PhoneNumber,
  PriceButton,
  PriceColumn,
  Time,
  Wrapper,
} from './Footer.style';

function Footer() {
  return (
    <Wrapper>
      <FooterContainer>
        <LogoColumn>
          <Logo>
            <img src='/icons/sultanLogoWhite.svg' alt='logo' />
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
                <img src='/icons/arrow.svg' alt='arrow' />
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
              <img src='/icons/download.svg' alt='download' />
            </div>
          </PriceButton>
          <Messengers>
            <div>Связь в мессенджерах:</div>
            <MessengerLinks>
              <div>
                <img src='/icons/whatsapp.svg' alt='whatsapp' />
              </div>
              <div>
                <img src='/icons/telegram.svg' alt='telegram' />
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
              <img src='/icons/visa.png' alt='visa' />
            </div>
            <div>
              <img src='/icons/mastercard.png' alt='mastercard' />
            </div>
          </Payment>
        </ContactsColumn>
      </FooterContainer>
    </Wrapper>
  );
}
export default Footer;
