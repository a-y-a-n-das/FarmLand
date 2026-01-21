import axios from "axios";
import { atom, selector } from "recoil";

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

export interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  priceAtOrder: number;
  item: Item;
  image: string;
}

export interface Order {
  id: number;
  orderItems: OrderItem[];
  isDelivered: boolean;
  deliveryDate: string; // Delivery date if delivered, order date if not
  createdAt: string;
  totalAmount: number;
}


export const OrderHistoryAtom = atom<Order[]>({
  key: "OrderHistoryAtom",
  default: selector({
    key: "OrderHistoryAtom/Default",
    get: async () => {
      try {
        const response = await axios.get("/user/order-history", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        if (response.status === 200) {
          return response.data.orderHistory;
        } else {
          return [];
        }
      } catch (error) {
        console.error("Error fetching order history:", error);
        return [];
      }
    },
  }),
})
  


// export const OrderHistoryAtom = atom<Order[]>({
//   key: "OrderHistoryAtom",
//   default: [
//     {
//       id: 1,
//       amount: 45.97,
//       items: [
//         {
//           id: 1,
//           name: "Organic Tomatoes",
//           quantity: 2,
//           price: 4.99,
//           image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
//         },
//         {
//           id: 2,
//           name: "Farm Fresh Eggs",
//           quantity: 3,
//           price: 6.99,
//           image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400",
//         },
//         {
//           id: 3,
//           name: "Raw Honey",
//           quantity: 1,
//           price: 12.99,
//           image: "https://images.unsplash.com/photo-1587049352846-4a222e784295?w=400",
//         },
//       ],
//       isDelivered: true,
//       date: "2026-01-15",
//       orderDate: "2026-01-12",
//     },
//     {
//       id: 2,
//       amount: 28.47,
//       items: [
//         {
//           id: 4,
//           name: "Organic Carrots",
//           quantity: 3,
//           price: 3.49,
//           image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400",
//         },
//         {
//           id: 6,
//           name: "Organic Apples",
//           quantity: 2,
//           price: 5.99,
//           image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400",
//         },
//       ],
//       isDelivered: false,
//       date: "2026-01-10",
//       orderDate: "2026-01-10",
//     },
//     {
//       id: 3,
//       amount: 67.93,
//       items: [
//         {
//           id: 5,
//           name: "Fresh Milk",
//           quantity: 4,
//           price: 5.99,
//           image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
//         },
//         {
//           id: 2,
//           name: "Farm Fresh Eggs",
//           quantity: 5,
//           price: 6.99,
//           image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400",
//         },
//       ],
//       isDelivered: true,
//       date: "2026-01-08",
//       orderDate: "2026-01-05",
//     },
//   ],
// });