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
  AdminPanel,
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
import useMediaQuery from '../../hooks/useMediaQuery';
import MobileFooter from './mobileFooter/MobileFooter';
import { Link } from 'react-router-dom';

function Footer() {
  const tabletMedia = useMediaQuery('(max-width: 1350px)');
  const mobileMedia = useMediaQuery('(max-width: 900px)');

  return mobileMedia ? (
    <footer>
      <MobileFooter />
    </footer>
  ) : (
    <footer>
      <Wrapper>
        <FooterContainer>
          <LogoColumn tablet={tabletMedia}>
            <Logo>
              <img src='./icons/sultanLogoWhite.svg' alt='logo' />
            </Logo>
            <LogoSupply>
              Компания «Султан» — снабжаем розничные магазины товарами <br />{' '}
              "под ключ" в Кокчетаве и Акмолинской области
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
                <a href='#'>О компании</a>
              </li>
              <li>
                <a href='#'>Доставка и оплата</a>
              </li>
              <li>
                <a href='#'>Возврат</a>
              </li>
              <li>
                <a href='#'>Контакты</a>
              </li>
            </Links>
          </MenuColumn>
          <CategoriesColumn>
            <FooterHeader>Категории:</FooterHeader>
            <Links>
              <li>
                <a href='#'>Бытовая химия</a>
              </li>
              <li>
                <a href='#'>Косметика и гигиена</a>
              </li>
              <li>
                <a href='#'>Товары для дома</a>
              </li>
              <li>
                <a href='#'>Товары для детей и мам</a>
              </li>
              <li>
                <a href='#'>Посуда</a>
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
                <a href='#'>
                  <div>
                    <img src='./icons/whatsapp.svg' alt='whatsapp' />
                  </div>
                </a>
                <a href='#'>
                  <div>
                    <img src='./icons/telegram.svg' alt='telegram' />
                  </div>
                </a>
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
            <AdminPanel>
              <Link to='/admin'>Админка</Link>
            </AdminPanel>
          </ContactsColumn>
        </FooterContainer>
      </Wrapper>
    </footer>
  );
}
export default Footer;
