import {atom} from "recoil";

export interface CartItems {
    quantity: number;
    itemId: number[],
}

export const CartItemAtom = atom<CartItems>({
  key: "CartItemsAtom",
  default: {
    quantity: 0,
    itemId: [],
  },
});