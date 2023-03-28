import { ShoppingCartItem } from '../context/ShoppingCartProvider';

export default function getCartSum(cart: ShoppingCartItem[]) {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
}
