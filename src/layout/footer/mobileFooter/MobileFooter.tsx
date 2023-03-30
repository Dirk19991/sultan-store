import FooterHeader from '../../../components/FooterHeader';
import Light from '../../../components/Light';
import MobileContainer from '../../../components/MobileContainer';
import OrderCall from '../../../components/OrderCall';
import YellowButton from '../../../components/YellowButton';
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
} from '../Footer.style';
import {
  Wrapper,
  MobileFooterContainer,
  Flex,
  Logo,
  Price,
  DownloadIcon,
  Description,
  Subscribe,
  MobileLogoInput,
  MobileArrow,
  LinksWrapper,
  MobileLinks,
  MobileFooterHeader,
  MobileCategoriesColumn,
  ContactsHeader,
  ContactsWrapper,
  PhoneWrapper,
  MobilePayment,
  MobileMessengers,
} from './MobileFooter.style';

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
