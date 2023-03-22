import { Context, createContext, useContext, useState } from 'react';
import data from '../data/data.json';

export type CareType = 'face' | 'feet' | 'hands' | 'body' | 'hygiene';

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
}

export const GoodsContext = createContext<IGoodsContext>({
  goods: [],
  addItem: (object) => [],
  removeItem: (id) => [],
});

export const useGoodsContext = () => useContext(GoodsContext);

function GoodsContextProvider({ children }: any) {
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

  const goodsValue = {
    goods,
    addItem,
    removeItem,
  };

  return (
    <GoodsContext.Provider value={goodsValue}>{children}</GoodsContext.Provider>
  );
}
export default GoodsContextProvider;
