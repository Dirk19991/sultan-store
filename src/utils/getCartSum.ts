import { ShoppingCartItem } from '../context/ShoppingCartProvider';

export default function getCartSum(cart: ShoppingCartItem[]) {
  return cart
    .reduce(
      (acc, item) =>
        acc + parseFloat(item.price.replace(',', '.')) * item.quantity,
      0
    )
    .toFixed(2);
}
