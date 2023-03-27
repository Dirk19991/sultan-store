import { Context, createContext, useContext, useState } from 'react';
import json from '../data/data.json';
import { Item } from './GoodsContextProvider';

export interface ShoppingCartItem extends Item {
  quantity: number;
}

interface IShoppingCartContext {
  items: ShoppingCartItem[] | [];
  addItem: (object: Item) => void;
  removeItem: (id: number) => void;
  decreaseItems: (object: Item) => void;
}

export const ShoppingCartContext = createContext<IShoppingCartContext>({
  items: [],
  addItem: (object) => [],
  removeItem: (id) => [],
  decreaseItems: (object) => [],
});

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

function ShoppingCartProvider({ children }: any) {
  const [items, setItems] = useState<ShoppingCartItem[] | []>([]);

  const addItem = (object: Item) => {
    if (items.find((item) => item.id === object.id)) {
      const mappedItems = items.map((item) => {
        if (item.id === object.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setItems(mappedItems);
    } else {
      let cartItem = {
        ...object,
        quantity: 1,
      };
      setItems([...items, cartItem]);
    }
  };

  const decreaseItems = (object: Item) => {
    if (items.find((item) => item.id === object.id)) {
      const mappedItems = items.map((item) => {
        if (item.id === object.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      const filteredMappedItems = mappedItems.filter(
        (item) => item.quantity > 0
      );
      setItems(filteredMappedItems);
    }
  };

  const removeItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const shoppingCartValue = {
    items,
    addItem,
    removeItem,
    decreaseItems,
  };

  return (
    <ShoppingCartContext.Provider value={shoppingCartValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
export default ShoppingCartProvider;
