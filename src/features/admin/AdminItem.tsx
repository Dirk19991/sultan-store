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
  setSelectedItem: React.Dispatch<React.SetStateAction<Item | null>>;
  setOption: React.Dispatch<React.SetStateAction<string>>;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Option {
  value: CareType;
  label: string;
}

export const Wrapper = styled.div`
  width: 500px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Bold = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const SaveButton = styled.button`
  width: 180px;
  height: 30px;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
  width: 180px;
  height: 30px;
  margin-bottom: 10px;
`;

export const AddButton = styled.button`
  width: 180px;
  height: 30px;
`;

export const FormError = styled.div`
  color: red;
`;

export const Input = styled.input`
  width: 400px;
  padding: 5px;
`;

export const StyledSelect = styled.select`
  width: 400px;
  padding: 5px;
`;

export const Label = styled.label`
  display: flex;
  width: 700px;
  justify-content: space-between;
  align-items: center;
`;

function AdminItem(props: IAdminItem) {
  const { item, setSelectedItem, setOption, success, setSuccess } = props;
  const { goods, addItem, updateItem, removeItem } = useGoodsContext();

  const [editableCareType, setEditableCareType] = useState<CareType[] | null>(
    item?.careType || null
  );
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (item) {
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
    console.log(updatedItem);

    const lastId = goods.sort((a, b) => b.id - a.id)[0].id;
    if (item.id === lastId + 1) {
      addItem(updatedItem);
      localStorage.setItem('goods', JSON.stringify([...goods, updatedItem]));
      setOption('choose');
      setSelectedItem(null);
      setSuccess(true);
    } else {
      updateItem(item.id, updatedItem);
      localStorage.setItem('goods', JSON.stringify(goods));
      setOption('choose');
      setSelectedItem(null);
      setSuccess(true);
    }
  };

  const deleteItemHandler = () => {
    if (!item) return;
    removeItem(item.id);
    localStorage.setItem('goods', JSON.stringify(goods));
    setSelectedItem(null);
    setOption('choose');
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
          <Label>
            <Bold>Название:</Bold>{' '}
            <Input
              name='title'
              key={item.title}
              defaultValue={item.title}
              type='text'
            />
          </Label>
          <Label>
            <Bold>Тип размера:</Bold>{' '}
            <StyledSelect
              defaultValue={item.sizeType === 'weight' ? 'weight' : 'volume'}
              key={item.sizeType === 'weight' ? 'weight' : 'volume'}
              name='sizeType'
              id='sizeType'
            >
              <option value='weight'>Вес</option>
              <option value='volume'>Объем</option>
            </StyledSelect>
          </Label>
          <Label>
            <Bold>Размер:</Bold>{' '}
            <Input
              name='size'
              key={item.size}
              defaultValue={item.size}
              type='text'
            />
          </Label>
          <Label>
            <Bold>Бренд:</Bold>{' '}
            <Input
              name='brand'
              key={item.brand}
              defaultValue={item.brand}
              type='text'
            />
          </Label>
          <Label>
            <Bold>Производитель:</Bold>{' '}
            <Input
              name='manufacturer'
              key={item.manufacturer}
              defaultValue={item.manufacturer}
              type='text'
            />
          </Label>
          <Label>
            <Bold>Цена:</Bold>{' '}
            <Input
              name='price'
              key={item.price}
              defaultValue={item.price}
              type='text'
            />
          </Label>
          <Label>
            <Bold>Описание:</Bold>{' '}
            <Input
              name='description'
              key={item.description}
              defaultValue={item.description}
              type='text'
            />
          </Label>
          <Label>
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
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: '400px',
                  borderColor: 'black',
                }),
              }}
            />
          </Label>
          <Label>
            <Bold>Ссылка на маленькую картинку:</Bold>
            <Input
              name='imageSmall'
              key={item.price}
              defaultValue={item.imageSmall}
              type='text'
            />
          </Label>
          <Label>
            <Bold>Ссылка на большую картинку:</Bold>
            <Input
              name='imageBig'
              key={item.imageBig}
              defaultValue={item.imageBig}
              type='text'
            />
          </Label>

          <Label>
            <Bold>Штрих-код:</Bold>
            <Input
              name='barcode'
              key={item.barcode}
              defaultValue={item.barcode}
              type='text'
            />
          </Label>
          <SaveButton type='submit'>Сохранить изменения</SaveButton>
        </Form>
      )}
      {success && <div>Успешно!</div>}
      {item && (
        <DeleteButton onClick={deleteItemHandler} type='submit'>
          Удалить товар
        </DeleteButton>
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
