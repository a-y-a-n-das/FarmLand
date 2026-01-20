import { atom, selector } from "recoil";
import axios from "axios";
import type { Item } from "../sections/ItemsSection";

export const SignInAtom = atom<boolean>({
  key: "SignInAtom",
  default: false,
});

export const CartItemCountAtom = atom<number>({
  key: "CartItemCountAtom",
  default: 0,
});

export const CartAtom = atom<Item[]>({
  key: "CartItemsAtom",
  default: selector({
    key: "CartItemsAtom/Default",
    get: () => {
      const fetchCart = async () => {
        const response = await axios.get("/user/cart", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        if (response.status === 200) return response.data.cartItems;
        else return [];
      };
      return fetchCart();
    },
  }),
});
