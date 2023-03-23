import { useState } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import { Item, useGoodsContext } from '../../context/GoodsContextProvider';
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
  margin-bottom: 20px;
`;

const GoodsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Select = styled.select`
  width: 400px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

function Admin() {
  const { goods, addItem, removeItem } = useGoodsContext();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const selectedItemHandler = (value: string) => {
    const item = goods.find((item) => item.id === +value) || goods[0];
    setSelectedItem(item);
  };

  return (
    <Container>
      <Wrapper>
        <AdminHeader>Страница администратора</AdminHeader>
        <AdminSubheader>Текущий список товаров:</AdminSubheader>

        <GoodsWrapper>
          <Select
            onChange={(e) => selectedItemHandler(e.target.value)}
            defaultValue='choose'
            name='select'
            id=''
          >
            <option disabled value='choose'>
              Выберите товар
            </option>
            {goods.map((elem) => (
              <option key={elem.id} value={elem.id}>
                {elem.title}
              </option>
            ))}
          </Select>
          <AdminItem item={selectedItem} />
        </GoodsWrapper>
      </Wrapper>
    </Container>
  );
}
export default Admin;
