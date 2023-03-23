import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  CareType,
  Item,
  useGoodsContext,
} from '../../context/GoodsContextProvider';
import Select, { MultiValue } from 'react-select';

interface IAdminItem {
  item: Item | null;
}

interface Option {
  value: CareType;
  label: string;
}

const Wrapper = styled.div`
  width: 500px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Bold = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const SaveButton = styled.button`
  width: 180px;
  height: 20px;
`;

const FormError = styled.div`
  color: red;
`;

function AdminItem(props: IAdminItem) {
  const { item } = props;
  const { goods, updateItem } = useGoodsContext();

  const [editableCareType, setEditableCareType] = useState(
    item?.careType || null
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log('here');
    if (item) {
      console.log('there');
      setEditableCareType(item.careType);
      setError(false);
    }
  }, [item]);

  const options: Option[] = [
    { value: 'face', label: 'лицо' },
    { value: 'feet', label: 'ноги' },
    { value: 'hands', label: 'руки' },
    { value: 'body', label: 'тело' },
    { value: 'hygiene', label: 'гигиена' },
    { value: 'hair', label: 'волосы' },
    { value: 'gift', label: 'подарки' },
    { value: 'shaving', label: 'средства для бритья' },
    { value: 'mouth', label: 'полость рта' },
  ];

  const submitFormHandler = (e: any) => {
    e.preventDefault();
    setError(false);

    if (item === null) return;

    const formData = new FormData(e.target);

    const title = formData.get('title') as string;
    const sizeType = formData.get('sizeType') as 'volume' | 'weight';
    const size = formData.get('size') as string;
    const brand = formData.get('brand') as string;
    const manufacturer = formData.get('manufacturer') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;
    const careType = editableCareType as CareType[];
    const imageSmall = formData.get('imageSmall') as string;
    const imageBig = formData.get('imageBig') as string;
    const barcode = Number(formData.get('barcode') as string);

    interface Item {
      id: number;
      title: string;
      sizeType: 'volume' | 'weight';
      size: string;
      barcode: number;
      brand: string;
      manufacturer: string;
      price: string;
      description: string;
      careType: CareType[];
      imageSmall: string;
      imageBig: string;
    }

    if (
      title === '' ||
      size === '' ||
      brand === '' ||
      manufacturer === '' ||
      price === '' ||
      imageSmall === '' ||
      imageBig === ''
    ) {
      setError(true);
      return;
    }

    const updatedItem: Item = {
      id: item.id,
      title: title,
      sizeType: sizeType,
      size: size,
      barcode: barcode,
      brand: brand,
      manufacturer: manufacturer,
      price: price,
      description: description,
      careType: careType,
      imageSmall: imageSmall,
      imageBig: imageBig,
    };

    updateItem(item.id, updatedItem);
    localStorage.setItem('goods', JSON.stringify(goods));
  };

  const setCareTypesHandler = (
    choice: MultiValue<{
      value: CareType;
      label: string;
    }>
  ) => setEditableCareType(choice.map((elem) => elem.value));

  return (
    <Wrapper>
      {item !== null && (
        <Form onSubmit={submitFormHandler} action='#'>
          <div>
            <Bold>ID:</Bold> {item.id}
          </div>
          <label>
            <Bold>Название:</Bold>{' '}
            <input
              name='title'
              key={item.title}
              defaultValue={item.title}
              type='text'
            />
          </label>
          <label>
            <Bold>Тип размера:</Bold>{' '}
            <select
              defaultValue={item.sizeType === 'weight' ? 'weight' : 'volume'}
              key={item.sizeType === 'weight' ? 'weight' : 'volume'}
              name='sizeType'
              id='sizeType'
            >
              <option value='weight'>Вес</option>
              <option value='volume'>Объем</option>
            </select>
          </label>
          <label>
            <Bold>Размер:</Bold>{' '}
            <input
              name='size'
              key={item.size}
              defaultValue={item.size}
              type='text'
            />
          </label>
          <label>
            <Bold>Бренд:</Bold>{' '}
            <input
              name='brand'
              key={item.brand}
              defaultValue={item.brand}
              type='text'
            />
          </label>
          <label>
            <Bold>Производитель:</Bold>{' '}
            <input
              name='manufacturer'
              key={item.manufacturer}
              defaultValue={item.manufacturer}
              type='text'
            />
          </label>
          <label>
            <Bold>Цена:</Bold>{' '}
            <input
              name='price'
              key={item.price}
              defaultValue={item.price}
              type='text'
            />
          </label>
          <label>
            <Bold>Описание:</Bold>{' '}
            <input
              name='description'
              key={item.description}
              defaultValue={item.description}
              type='text'
            />
          </label>
          <div>
            <Bold>Тип ухода:</Bold>{' '}
            <Select
              defaultValue={options.filter((option) =>
                item.careType?.includes(option.value)
              )}
              key={item.careType?.reduce((acc, elem) => (acc += elem), '')}
              isMulti
              name='colors'
              options={options}
              onChange={(
                choice: MultiValue<{ value: CareType; label: string }>
              ) => setCareTypesHandler(choice)}
            />
          </div>
          <div>
            <Bold>Ссылка на маленькую картинку:</Bold>
            <input
              name='imageSmall'
              key={item.price}
              defaultValue={item.imageSmall}
              type='text'
            />
          </div>
          <div>
            <Bold>Ссылка на большую картинку:</Bold>
            <input
              name='imageBig'
              key={item.imageBig}
              defaultValue={item.imageBig}
              type='text'
            />
          </div>

          <div>
            <Bold>Штрих-код:</Bold>
            <input
              name='barcode'
              key={item.barcode}
              defaultValue={item.barcode}
              type='text'
            />
          </div>
          <SaveButton type='submit'>Сохранить изменения</SaveButton>
        </Form>
      )}
      {error && (
        <FormError>
          Ошибка! Проверьте типы данных и попробуйте еще раз.
        </FormError>
      )}
    </Wrapper>
  );
}
export default AdminItem;
