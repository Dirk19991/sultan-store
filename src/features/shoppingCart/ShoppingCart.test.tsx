import { getByText, render, screen, waitFor } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';
import userEvent from '@testing-library/user-event';
import {
  IShoppingCartContext,
  ShoppingCartContext,
} from '../../context/ShoppingCartProvider';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

const customRender = (ui: any, { providerProps, ...renderOptions }: any) => {
  return render(
    <ShoppingCartContext.Provider value={providerProps}>
      {ui}
    </ShoppingCartContext.Provider>,
    renderOptions
  );
};

describe('Testing Shopping Cart', () => {
  let providerProps: IShoppingCartContext;

  const mockTranshbinButton = vi.fn();
  beforeEach(
    () =>
      (providerProps = {
        items: [
          {
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
            quantity: 3,
          },
          {
            id: 7,
            title: 'Крем для ног EVO с мочевиной',
            sizeType: 'volume',
            size: '75 мл',
            barcode: 4604049989758,
            brand: 'EVO',
            manufacturer: 'ОАО Аванта',
            price: '52,99',
            description:
              'Мочевина и дополнительные активные компоненты - масло оливы и кокоса - питают кожу, восстанавливают ее мягкость и эластичность, препятствуют потере влаги. Натуральный комплекс экстрактов чистотела, коры дуба, шалфея и хвои способствует устранению потертостей и раздражений, предотвращает развитие грибковой микрофлоры и неприятного запаха ног.',
            careType: ['feet'],
            imageSmall: './goods/evoFeet/evoFeet_small.jpeg',
            imageBig: './goods/evoFeet/evoFeet_big.jpeg',
            quantity: 2,
          },
        ],
        addCartItem: () => [],
        removeCartItem: mockTranshbinButton,
        decreaseCartItems: () => [],
        removeAllItems: () => [],
      })
  );

  test('Should correctly show descriptions', () => {
    customRender(<ShoppingCart />, { providerProps });

    expect(
      screen.getByText(/Черный жемчуг для всех типов кожи – крем для борьбы/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Мочевина и дополнительные активные компоненты/i)
    ).toBeInTheDocument();
  });

  test('Should correctly count sums of each product', () => {
    customRender(<ShoppingCart />, { providerProps });
    expect(screen.getByText(/105.98 ₸/i)).toBeInTheDocument();
    expect(screen.getByText(/180.00 ₸/i)).toBeInTheDocument();
  });

  test('Should show correct images', () => {
    customRender(<ShoppingCart />, { providerProps });

    const blackPearl = screen.getByAltText(
      'Черный жемчуг для всех типов кожи'
    ) as HTMLImageElement;
    expect(blackPearl.src).toContain('goods/blackPearlAll/blackPearlAll_big');

    const evoFeet = screen.getByAltText(
      'Крем для ног EVO с мочевиной'
    ) as HTMLImageElement;
    expect(evoFeet.src).toContain('goods/evoFeet/evoFeet_big');
  });

  test('Should show correct weight', () => {
    customRender(<ShoppingCart />, { providerProps });
    expect(screen.getByText(/75 мл/i)).toBeInTheDocument();
    expect(screen.getByText(/160 г/i)).toBeInTheDocument();
  });

  test('Trashbin button works', async () => {
    customRender(<ShoppingCart />, { providerProps });
    const trashbin1 = screen.getAllByTestId('trashbin')[0];
    const trashbin2 = screen.getAllByTestId('trashbin')[1];
    await userEvent.click(trashbin1);
    await userEvent.click(trashbin2);
    expect(mockTranshbinButton).toHaveBeenCalledWith(3);
    expect(mockTranshbinButton).toHaveBeenCalledWith(7);
  });

  test('Should show message after clicking order button', async () => {
    customRender(<ShoppingCart />, { providerProps });
    await userEvent.click(screen.getByTestId('makeOrder'));
    expect(screen.getByText(/СПАСИБО ЗА ЗАКАЗ!/i)).toBeInTheDocument();
  });
});
