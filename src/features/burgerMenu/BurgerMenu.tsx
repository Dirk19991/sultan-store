import styled from 'styled-components';
import Light from '../../components/Light';
import SemiBold from '../../components/SemiBold';
import YellowButton from '../../components/YellowButton';
import {
  Address,
  Column,
  Contacts,
  Mail,
} from '../../layout/header/upperHeader/UpperHeader.style';

const Wrapper = styled.div`
  display: flex;
  width: 320px;
  margin: 0 auto;
  flex-direction: column;
  padding-left: 13px;
  padding-top: 20px;
  gap: 10px;
  height 580px;
  background-color: var(--white);
  z-index: 10;
`;

const Sales = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  > div:first-child {
    margin-top: -7px;
  }

  margin-bottom: 9px;
`;

const Time = styled(Light)`
  margin-top: 5px;
`;

const OrderCall = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
  margin-bottom: 13px;
`;

const PhoneButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--yellow);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderCallText = styled.div`
  font-size: 10px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 7px;
  margin-top: -2px;
`;

export const DashedLine = styled.div`
  width: 290px;
  border: 1px dashed #3f4e65;
  opacity: 0.2;
  margin-bottom: 15px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuHeader = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 25px;
`;
const MenuItem = styled.li`
  line-height: 150%;
  margin-bottom: 20px;
`;

const PriceButton = styled(YellowButton)`
  width: 290px;
  height: 70px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: var(--white);
  margin-top: -10px;
`;

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
