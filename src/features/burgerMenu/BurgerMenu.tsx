import Light from '../../components/Light';
import SemiBold from '../../components/SemiBold';
import {
  Address,
  Column,
  Mail,
} from '../../layout/header/upperHeader/UpperHeader.style';
import {
  Wrapper,
  Sales,
  Time,
  OrderCall,
  PhoneButton,
  OrderCallText,
  DashedLine,
  Menu,
  MenuHeader,
  MenuItem,
  PriceButton,
} from './BurgerMenu.style';

function BurgerMenu() {
  return (
    <Wrapper>
      <Address>
        <div>
          <img src='./icons/location.svg' alt='location' />
        </div>
        <Column>
          <SemiBold>г. Кокчетав, ул. Ж. Ташенова 129Б</SemiBold>
          <Light>(Рынок Восточный)</Light>
        </Column>
      </Address>
      <Mail>
        <div>
          <img src='./icons/mail.svg' alt='mail' />
        </div>
        <Column>
          <SemiBold>
            <a href='mailto:opt.sultan@mail.ru'>opt.sultan@mail.ru</a>
          </SemiBold>
          <Light>На связи в любое время</Light>
        </Column>
      </Mail>
      <Sales>
        <div>
          <img src='./icons/phone.svg' alt='phone' />
        </div>
        <Column>
          <SemiBold>Отдел продаж</SemiBold>
          <Light>
            <a href='tel:+380987654321'>+7 (777) 490-00-91</a>
          </Light>
          <Time>время работы: 9:00-20:00</Time>
        </Column>
      </Sales>
      <OrderCall>
        <PhoneButton>
          <img src='./icons/phoneWhite.svg' alt='phone' />
        </PhoneButton>
        <OrderCallText>Заказать звонок</OrderCallText>
      </OrderCall>
      <DashedLine />
      <Menu>
        <MenuHeader>Меню сайта:</MenuHeader>
        <ul>
          <MenuItem>О компании</MenuItem>
          <MenuItem>Доставка и оплата</MenuItem>
          <MenuItem>Возврат</MenuItem>
          <MenuItem>Контакты</MenuItem>
        </ul>
      </Menu>
      <PriceButton>
        <div>Прайс-лист</div>
        <div>
          <img src='./icons/download.svg' alt='download' />
        </div>
      </PriceButton>
    </Wrapper>
  );
}
export default BurgerMenu;
