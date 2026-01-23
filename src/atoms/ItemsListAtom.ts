import { atom, selector} from "recoil";
import axios from "axios";

interface Item {
    
    id: number;
    name: string;
    price: number;
    unit: string;
    imageUrl: string;
    category: string;
    description: string;
    inStock: boolean;
    rating: number;
    quantity: number;
    itemId?: number;
}

const ItemsListAtom = atom<Item[]>({
  key: "ItemsListAtom",
  default: selector({
    key: "ItemsListAtom/Default",
    get: async () => {
      const token = String(localStorage.getItem('token'));
      
      async function getItems() {
        if(!token || token === "null") {
        const responseAllItems = await axios.get("/items");
        return responseAllItems.data.items;
        }
        if(token) {
          const responseUserItems = await axios.get("/user/cart", {
            headers: {
              'content-type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });

          const responseAllItems = await axios.get("/items");
          if(responseUserItems.status !== 200 ) {
            return responseAllItems.data.items;
          }

          const items = responseAllItems.data.items.map((item: Item) => {
            const userItem = responseUserItems.data.cartItems.find((cartItem: Item) => cartItem.itemId === item.id);
            if(userItem) {
              return { ...item, quantity: userItem.quantity };
            } else {
              return { ...item, quantity: 0 };
            }
          });
          return items;
      }

    };
    const items: Item[] = await getItems();
    return items;
    },
  }),
});



export default ItemsListAtom;
