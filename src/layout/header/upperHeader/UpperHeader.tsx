import Light from '../../../components/Light';
import SemiBold from '../../../components/SemiBold';
import {
  Address,
  Column,
  Contacts,
  Links,
  Mail,
  Wrapper,
} from './UpperHeader.style';

function UpperHeader() {
  return (
    <Wrapper>
      <Contacts>
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
      </Contacts>
      <Links>
        <li>О компании</li>
        <li>Доставка и оплата</li>
        <li>Возврат</li>
        <li>Контакты</li>
      </Links>
    </Wrapper>
  );
}
export default UpperHeader;
