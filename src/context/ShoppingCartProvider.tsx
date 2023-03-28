import { Context, createContext, useContext, useState } from 'react';
import json from '../data/data.json';
import { Item } from './GoodsContextProvider';

export interface ShoppingCartItem extends Item {
  quantity: number;
}

interface IShoppingCartContext {
  items: ShoppingCartItem[] | [];
  addCartItem: (object: Item) => void;
  removeCartItem: (id: number) => void;
  decreaseCartItems: (object: Item) => void;
}

export const ShoppingCartContext = createContext<IShoppingCartContext>({
  items: [],
  addCartItem: (object) => [],
  removeCartItem: (object) => [],
  decreaseCartItems: (id) => [],
});

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

function ShoppingCartProvider({ children }: any) {
  const [items, setItems] = useState<ShoppingCartItem[] | []>([]);

  const addCartItem = (object: Item) => {
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

  const removeCartItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const decreaseCartItems = (object: Item) => {
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

  const shoppingCartValue = {
    items,
    addCartItem,
    removeCartItem,
    decreaseCartItems,
  };

  return (
    <ShoppingCartContext.Provider value={shoppingCartValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
export default ShoppingCartProvider;
