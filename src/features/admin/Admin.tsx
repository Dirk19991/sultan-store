import styled from 'styled-components';
import Container from '../../components/Container';
import { useGoodsContext } from '../../context/GoodsContextProvider';
import AdminItem from './AdminItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
`;

const AdminHeader = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  color: var(--black);
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const AdminSubheader = styled.h2`
  font-weight: 500;
  font-size: 30px;
  line-height: 120%;
  color: var(--black);
  text-transform: uppercase;
`;

const GoodsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

function Admin() {
  const { goods, addItem, removeItem } = useGoodsContext();

  return (
    <Container>
      <Wrapper>
        <AdminHeader>Страница администратора</AdminHeader>
        <AdminSubheader>Текущий список товаров:</AdminSubheader>

        <GoodsWrapper>
          {goods.map((item) => (
            <AdminItem key={item.id} item={item} />
          ))}
        </GoodsWrapper>
      </Wrapper>
    </Container>
  );
}
export default Admin;
