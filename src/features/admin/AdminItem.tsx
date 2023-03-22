import { useState } from 'react';
import styled from 'styled-components';
import { CareType, Item } from '../../context/GoodsContextProvider';
import React from 'react';
import Select, { MultiValue } from 'react-select';

interface IAdminItem {
  item: Item;
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

function AdminItem(props: IAdminItem) {
  const { item } = props;

  const [editableItem, setEditableItem] = useState(item);
  const [editableCareType, setEditableCareType] = useState(item.careType);

  const options: Option[] = [
    { value: 'face', label: 'лицо' },
    { value: 'feet', label: 'ноги' },
    { value: 'hands', label: 'руки' },
    { value: 'body', label: 'тело' },
    { value: 'hygiene', label: 'гигиена' },
  ];

  const careTypes = {
    face: 'лицо',
    feet: 'ноги',
    hands: 'руки',
    body: 'тело',
    hygiene: 'гигиена',
  };

  const submitFormHandler = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);
    console.log(editableCareType);
  };

  const setCareTypesHandler = (
    choice: MultiValue<{
      value: CareType;
      label: string;
    }>
  ) => setEditableCareType(choice.map((elem) => elem.value));

  return (
    <Wrapper>
      <Form onSubmit={submitFormHandler} action='#'>
        <div>
          <Bold>ID:</Bold> {item.id}
        </div>
        <label>
          <Bold>Название:</Bold>{' '}
          <input name='title' defaultValue={editableItem.title} type='text' />
        </label>
        <label>
          <Bold>Тип размера:</Bold>{' '}
          <select
            defaultValue={
              editableItem.sizeType === 'weight' ? 'weight' : 'volume'
            }
            name='sizeType'
            id='sizeType'
          >
            <option value='weight'>Вес</option>
            <option value='volume'>Объем</option>
          </select>
        </label>
        <label>
          <Bold>Размер:</Bold>{' '}
          <input name='size' defaultValue={editableItem.size} type='text' />
        </label>
        <label>
          <Bold>Бренд:</Bold>{' '}
          <input name='brand' defaultValue={editableItem.brand} type='text' />
        </label>
        <label>
          <Bold>Производитель:</Bold>{' '}
          <input
            name='manufacturer'
            defaultValue={editableItem.manufacturer}
            type='text'
          />
        </label>
        <label>
          <Bold>Цена:</Bold>{' '}
          <input name='price' defaultValue={editableItem.price} type='text' />
        </label>

        <div>
          <Bold>Тип ухода:</Bold>{' '}
          <Select
            isMulti
            name='colors'
            options={options}
            onChange={(
              choice: MultiValue<{ value: CareType; label: string }>
            ) => setCareTypesHandler(choice)}
          />
        </div>
        <div>
          <Bold>Ссылка на маленькую картинку:</Bold> {item.imageSmall}
        </div>
        <div>
          <Bold>Ссылка на большую картинку:</Bold> {item.imageBig}
        </div>

        <div>
          <Bold>Штрих-код:</Bold> {item.barcode}
        </div>
        <SaveButton type='submit'>Сохранить изменения</SaveButton>
      </Form>
    </Wrapper>
  );
}
export default AdminItem;
