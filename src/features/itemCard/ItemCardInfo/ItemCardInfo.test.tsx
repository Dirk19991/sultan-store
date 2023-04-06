import { render, screen } from '@testing-library/react';
import ItemCardInfo from './ItemCardInfo';
import userEvent from '@testing-library/user-event';
import { Item } from '../../../context/GoodsContextProvider';

const item: Item = {
  id: 3,
  title: 'Черный жемчуг для всех типов кожи',
  sizeType: 'weight',
  size: '160 г',
  barcode: 546463797548,
  brand: 'Черный жемчуг',
  manufacturer: 'Юнилевер',
  price: '60',
  description:
    'Черный жемчуг для всех типов кожи – крем для борьбы с возрастными изменениями, учитывающий потребности кожи женщин и мужчин старше 30 лет.',
  careType: ['face', 'body', 'feet', 'hands'],
  imageSmall: './goods/blackPearlAll/blackPearlAll_small.jpeg',
  imageBig: './goods/blackPearlAll/blackPearlAll_big.jpeg',
};

test('characteristics button should work', async () => {
  render(<ItemCardInfo currentItem={item} />);
  await userEvent.click(screen.getByText(/Характеристики/i));
  expect(screen.getByText(/Кол-во в коробке/i)).toBeInTheDocument();
});

test('description button should work', async () => {
  render(<ItemCardInfo currentItem={item} />);
  await userEvent.click(screen.getByText(/Описание/i));
  expect(
    screen.getByText(
      /крем для борьбы с возрастными изменениями, учитывающий потребности кожи женщин/i
    )
  ).toBeInTheDocument();
});

test('increase button should work', async () => {
  render(<ItemCardInfo currentItem={item} />);
  await userEvent.click(screen.getByTestId('increase'));
  expect(screen.getByTestId('quantity')).toHaveTextContent('2');
});

it('decrease button shouldn`t get lower than 1', async () => {
  render(<ItemCardInfo currentItem={item} />);
  await userEvent.click(screen.getByTestId('decrease'));
  expect(screen.getByTestId('quantity')).toHaveTextContent('1');
});
