import Light from '../../../components/Light';
import SemiBold from '../../../components/SemiBold';
import useMediaQuery from '../../../hooks/useMediaQuery';

import {
  Address,
  Column,
  Contacts,
  Links,
  Mail,
  Wrapper,
} from './UpperHeader.style';

function UpperHeader() {
  const tabletMedia = useMediaQuery('(max-width: 1050px)');

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
      <Links tablet={tabletMedia}>
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
    </Wrapper>
  );
}
export default UpperHeader;
