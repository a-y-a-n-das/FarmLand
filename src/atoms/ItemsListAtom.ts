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
        const responseAllItems = await axios.get("/items");
        return responseAllItems.data.items as Item[];
    },
  }),
});



export default ItemsListAtom;
