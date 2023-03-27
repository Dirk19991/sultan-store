import { Context, createContext, useContext, useState } from 'react';
import json from '../data/data.json';

export type CareType =
  | 'face'
  | 'feet'
  | 'hands'
  | 'body'
  | 'hygiene'
  | 'hair'
  | 'gift'
  | 'shaving'
  | 'mouth'
  | 'tan'
  | 'paper';

export interface Item {
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

interface IGoodsContext {
  goods: Item[] | [];
  addItem: (object: Item) => void;
  removeItem: (id: number) => void;
  updateItem: (id: number, object: Item) => void;
}

export const GoodsContext = createContext<IGoodsContext>({
  goods: [],
  addItem: (object) => [],
  removeItem: (id) => [],
  updateItem: (id, object) => [],
});

export const useGoodsContext = () => useContext(GoodsContext);

function GoodsContextProvider({ children }: any) {
  let data;

  let obj = localStorage.getItem('goods');

  if (obj) {
    data = JSON.parse(obj);
  } else {
    data = json;
  }

  const [goods, setGoods] = useState<Item[] | []>(data as Item[]);

  const addItem = (object: Item) => {
    setGoods((prev) => {
      return [...prev, object];
    });
  };

  const removeItem = (id: number) => {
    setGoods((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const updateItem = (id: number, object: Item) => {
    setGoods((prev) =>
      prev.map((oldItem) => {
        if (oldItem.id !== id) {
          return oldItem;
        } else {
          const item = prev.filter((item) => item.id === id)[0];

          item.title = object.title;
          item.sizeType = object.sizeType;
          item.size = object.size;
          item.brand = object.brand;
          item.manufacturer = object.manufacturer;
          item.price = object.price;
          item.careType = object.careType;
          item.imageSmall = object.imageSmall;
          item.imageBig = object.imageBig;
          item.barcode = object.barcode;
          return item;
        }
      })
    );
  };

  const goodsValue = {
    goods,
    addItem,
    removeItem,
    updateItem,
  };

  return (
    <GoodsContext.Provider value={goodsValue}>{children}</GoodsContext.Provider>
  );
}
export default GoodsContextProvider;
