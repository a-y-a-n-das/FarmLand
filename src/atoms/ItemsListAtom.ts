import { atom, selector} from "recoil";
import axios from "axios";

interface Item {

    id: number;
    name: string;
    price: number;
    unit: string;
    image: string;
    category: string;
    description: string;
    inStock: boolean;
    rating: number;
    quantity: number;
  
}

const ItemsListAtom = atom<Item[]>({
  key: "ItemsListAtom",
  default: selector({
    key: "ItemsListAtom/Default",
    get: async () => {
      const response = await axios.get("/items");
      return response.data.items;
    },
  }),
});



// const ItemsListAtom = atom<Item[]>({
//   key: "ItemsListAtom",
//   default: [
//     {
//       id: 1,
//       name: "Organic Tomatoes",
//       price: 4.99,
//       unit: "kg",
//       image:
//         "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
//       category: "Vegetables",
//       description: "Fresh organic tomatoes from local farms",
//       inStock: true,
//       rating: 4.5,
//     },
//     {
//       id: 2,
//       name: "Farm Fresh Eggs",
//       price: 6.99,
//       unit: "dozen",
//       image:
//         "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400",
//       category: "Dairy & Eggs",
//       description: "Free-range eggs from happy hens",
//       inStock: true,
//       rating: 4.8,
//     },
//     {
//       id: 3,
//       name: "Raw Honey",
//       price: 12.99,
//       unit: "500g",
//       image:
//         "https://images.unsplash.com/photo-1587049352846-4a222e784295?w=400",
//       category: "Pantry",
//       description: "Pure raw honey from local beekeepers",
//       inStock: true,
//       rating: 4.7,
//     },
//     {
//       id: 4,
//       name: "Organic Carrots",
//       price: 3.49,
//       unit: "kg",
//       image:
//         "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400",
//       category: "Vegetables",
//       description: "Crunchy organic carrots",
//       inStock: true,
//       rating: 4.3,
//     },
//     {
//       id: 5,
//       name: "Fresh Milk",
//       price: 5.99,
//       unit: "liter",
//       image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
//       category: "Dairy & Eggs",
//       description: "Farm fresh whole milk",
//       inStock: false,
//       rating: 4.6,
//     },
//     {
//       id: 6,
//       name: "Organic Apples",
//       price: 5.99,
//       unit: "kg",
//       image:
//         "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400",
//       category: "Fruits",
//       description: "Crisp organic apples",
//       inStock: true,
//       rating: 4.4,
//     },
//   ],
// });

export default ItemsListAtom;
