import {atom} from "recoil";

export interface CartItems {
    quantity: number;
    itemId: number[],
}

export const CartItemsAtom = atom<CartItems>({
  key: "CartItemsAtom",
  default: {
    quantity: 0,
    itemId: [],
  },
});