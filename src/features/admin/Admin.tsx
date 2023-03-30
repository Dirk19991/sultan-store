import { useState } from 'react';
import Container from '../../components/Container';
import { Item, useGoodsContext } from '../../context/GoodsContextProvider';
import {
  AdminHeader,
  Wrapper,
  AdminSubheader,
  GoodsWrapper,
  Select,
  Add,
} from './Admin.style';
import AdminItem from './adminItem/AdminItem';

function Admin() {
  const { goods } = useGoodsContext();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  // по умолчанию показываем disabled option "Выберите товар"
  const [option, setOption] = useState<string>('choose');

  // для сообщения "Успешно!" после редактирования или добавления товара
  const [success, setSuccess] = useState<boolean>(false);

  const selectedItemHandler = (value: string) => {
    setSuccess(false);

    if (value === 'add') {
      const lastId = goods.sort((a, b) => b.id - a.id)[0].id;
      const newItem: Item = {
        id: lastId + 1,
        title: '',
        sizeType: 'volume',
        size: '',
        barcode: 0,
        brand: '',
        manufacturer: '',
        price: '',
        description: '',
        careType: [],
        imageSmall: '',
        imageBig: '',
      };
      setSelectedItem(newItem);
    } else {
      const item = goods.find((item) => item.id === +value) || null;
      setSelectedItem(item);
    }
  };

  return (
    <Container>
      <Wrapper>
        <AdminHeader>Страница администратора</AdminHeader>
        <AdminSubheader>Текущий список товаров:</AdminSubheader>
        <GoodsWrapper>
          <Select
            onChange={(e) => {
              selectedItemHandler(e.target.value);
              setOption(e.target.value);
            }}
            value={option}
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
            <Add value='add'>Добавить новый товар</Add>
          </Select>
          <AdminItem
            success={success}
            setSuccess={setSuccess}
            setOption={setOption}
            setSelectedItem={setSelectedItem}
            item={selectedItem}
          />
        </GoodsWrapper>
      </Wrapper>
    </Container>
  );
}
export default Admin;
