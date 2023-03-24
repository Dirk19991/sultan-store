import { Item } from '../context/GoodsContextProvider';

type StringNum = [string, number];

type ReturnCheckboxSorter = StringNum[];

export default function checkboxSorter(goods: Item[]): ReturnCheckboxSorter {
  const obj: Record<string, number> = {};

  for (let i = 0; i < goods.length; i++) {
    const manufacturer = goods[i].manufacturer;

    if (!obj[manufacturer]) {
      obj[manufacturer] = 1;
    } else {
      obj[manufacturer] += 1;
    }
  }
  return Object.entries(obj);
}
