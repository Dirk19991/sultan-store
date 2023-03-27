import { Item } from '../context/GoodsContextProvider';
import { Selectors } from '../features/catalogue/Catalogue';

export default function sortGoods(goods: Item[], selectedSort: Selectors) {
  if (selectedSort === 'nameDown') {
    return goods.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  }
  if (selectedSort === 'nameUp') {
    return goods.sort((a, b) => {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      return 0;
    });
  }
  if (selectedSort === 'priceUp') {
    return goods.sort((a, b) => {
      if (
        parseFloat(a.price.replace(',', '.')) <
        parseFloat(b.price.replace(',', '.'))
      )
        return -1;
      if (
        parseFloat(a.price.replace(',', '.')) >
        parseFloat(b.price.replace(',', '.'))
      )
        return 1;

      return 0;
    });
  }
  if (selectedSort === 'priceDown') {
    return goods.sort((a, b) => {
      if (
        parseFloat(a.price.replace(',', '.')) >
        parseFloat(b.price.replace(',', '.'))
      )
        return -1;
      if (
        parseFloat(a.price.replace(',', '.')) <
        parseFloat(b.price.replace(',', '.'))
      )
        return 1;
      return 0;
    });
  }
  return goods;
}
