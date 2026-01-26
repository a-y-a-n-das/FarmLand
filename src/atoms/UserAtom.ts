import { atom, selector } from "recoil";
import axios from "axios";
import type { Item } from "../sections/ItemsSection";

export interface cartItem {
    id: number;
    userId: number;
    itemId: number;
    quantity: number;
    item: Item;
}


export const SignInAtom = atom<boolean>({
  key: "SignInAtom",
  default: false,
});

export const CartItemCountAtom = atom<number>({
  key: "CartItemCountAtom",
  default: 0,
});

export const CartAtom = atom<cartItem[]>({
  key: "CartItemsAtom",
  default: selector({
    key: "CartItemsAtom/Default",
    get: async() => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return [];

        const { data } = await axios.get("/user/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return data.cartItems ?? [];
      } catch (err) {
        console.error("Failed to fetch cart", err);
        localStorage.removeItem("token");
        return [];

      }
    },
  }),
});
