import { CareType } from './../context/GoodsContextProvider';
import { Item } from '../context/GoodsContextProvider';

// применяются сразу все выбранные фильтры по очереди

export default function filterGoods(
  goods: Item[],
  min: number = 0,
  max: number = 10000,
  manufacturer: string,
  checkedManufacturers: string[],
  careType: CareType | ''
) {
  let filterPrice = goods.filter((item) => {
    const price = parseFloat(item.price.replace(',', '.'));
    return price >= min && price <= max;
  });

  let filterManufacturer = filterPrice.filter((item) => {
    return item.manufacturer.toLowerCase().includes(manufacturer.toLowerCase());
  });

  let filterCheckedManufacturers = filterManufacturer.filter((item) => {
    if (checkedManufacturers.length === 0) {
      return item;
    } else {
      console.log(checkedManufacturers.includes(item.manufacturer));
      return checkedManufacturers.includes(item.manufacturer);
    }
  });

  let filterCareType = filterCheckedManufacturers.filter((item) => {
    if (careType === '') {
      return item;
    } else {
      return item.careType.includes(careType);
    }
  });

  return filterCareType;
}
