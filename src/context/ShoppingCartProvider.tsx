import { Context, createContext, useContext, useState } from 'react';
import json from '../data/data.json';
import { Item } from './GoodsContextProvider';

export interface ShoppingCartItem extends Item {
  quantity: number;
}

export interface IShoppingCartContext {
  items: ShoppingCartItem[] | [];
  addCartItem: (object: Item, number?: number) => void;
  removeCartItem: (id: number) => void;
  decreaseCartItems: (object: Item) => void;
  removeAllItems: () => void;
}

export const ShoppingCartContext = createContext<IShoppingCartContext>({
  items: [],
  addCartItem: (object, number?) => [],
  removeCartItem: (object) => [],
  decreaseCartItems: (id) => [],
  removeAllItems: () => [],
});

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

function ShoppingCartProvider({ children }: any) {
  let cart;

  let obj = localStorage.getItem('cart');

  if (obj) {
    cart = JSON.parse(obj);
  } else {
    cart = [];
  }

  const [items, setItems] = useState<ShoppingCartItem[] | []>(
    cart as ShoppingCartItem[] | []
  );

  const addCartItem = (object: Item, number: number = 1) => {
    if (items.find((item) => item.id === object.id)) {
      const mappedItems = items.map((item) => {
        if (item.id === object.id) {
          return {
            ...item,
            quantity: item.quantity + number,
          };
        }
        return item;
      });
      setItems(mappedItems);
      localStorage.setItem('cart', JSON.stringify(mappedItems));
    } else {
      let cartItem = {
        ...object,
        quantity: number,
      };
      setItems([...items, cartItem]);
      localStorage.setItem('cart', JSON.stringify([...items, cartItem]));
    }
  };

  const removeCartItem = (id: number) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
    localStorage.setItem('cart', JSON.stringify(filteredItems));
  };

  const removeAllItems = () => {
    setItems([]);
    localStorage.setItem('cart', JSON.stringify([]));
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
      localStorage.setItem('cart', JSON.stringify(filteredMappedItems));
    }
  };

  const shoppingCartValue = {
    items,
    addCartItem,
    removeCartItem,
    decreaseCartItems,
    removeAllItems,
  };

  return (
    <ShoppingCartContext.Provider value={shoppingCartValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
export default ShoppingCartProvider;
