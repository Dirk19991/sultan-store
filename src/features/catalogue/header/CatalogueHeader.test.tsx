import { render, screen } from '@testing-library/react';
import CatalogueHeader from './CatalogueHeader';
import userEvent from '@testing-library/user-event';

test('should have 700 font-weight when chosen', () => {
  const setCareType = () => {};
  const setSelectedSort = () => {};

  render(
    <CatalogueHeader
      careType='body'
      setCareType={setCareType}
      setSelectedSort={setSelectedSort}
    />
  );

  const bodyCare = screen.getByText(/Уход за телом/i);
  expect(bodyCare).toHaveStyle('font-weight: 700');
});

test('should correctly show sorting option when chosen', async () => {
  const setCareType = () => {};
  const setSelectedSort = () => {};
  render(
    <CatalogueHeader
      careType='body'
      setCareType={setCareType}
      setSelectedSort={setSelectedSort}
    />
  );
  await userEvent.selectOptions(screen.getByRole('combobox'), ['priceUp']);
  expect(
    (screen.getByRole('option', { name: 'Цена ▴' }) as HTMLOptionElement)
      .selected
  ).toBe(true);
});
