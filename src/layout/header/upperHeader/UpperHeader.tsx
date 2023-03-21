import styled from 'styled-components';
import Light from '../../../components/Light';
import SemiBold from '../../../components/SemiBold';

const Wrapper = styled.div`
  min-height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`;

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 43px;
`;

const Address = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Mail = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Links = styled.ul`
  display: flex;
  gap: 60px;
`;

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
