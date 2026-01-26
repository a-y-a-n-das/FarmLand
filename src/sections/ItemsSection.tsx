import ItemCard from '../components/ItemCard';
import { useRecoilState, useRecoilValue } from 'recoil';
import ItemsListAtom from '../atoms/ItemsListAtom';
import { sortByAtom } from '../atoms/SortByAtom';
import { searchQueryAtom } from '../atoms/SearchQuery';
import axios from 'axios';
import { CartAtom, type cartItem } from '../atoms/UserAtom';

export interface Item{
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
    item?: Item;
}

export default function ItemsSection() {
    const items = useRecoilValue<Item[]>(ItemsListAtom);
    const [userCartItems, setUserCartItems] = useRecoilState(CartAtom);
    const sortBy: string = useRecoilValue(sortByAtom);
    const searchQuery: string = useRecoilValue(searchQueryAtom);
    
    const filteredItems = items.filter((item:Item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())    );

    const sortedItems = [...filteredItems].sort((a, b) =>
        sortBy === 'price-low-high'
            ? a.price - b.price
            : sortBy === 'price-high-low'
            ? b.price - a.price
            : sortBy === 'rating-high-low'
            ? b.rating - a.rating
            : sortBy === 'rating-low-high'
            ? a.rating - b.rating
            : sortBy === 'name-a-z'
            ? a.name.localeCompare(b.name)
            : sortBy === 'name-z-a'
            ? b.name.localeCompare(a.name)
            : 0 // default sorting (by relevance)
    );


    const addToCart = async (itemId: number,) => {
      const token: string =  String(localStorage.getItem('token'));

      if(token === "null" || !token){
        alert("Please sign in to add items to cart");
        return;
      }

      const response = await axios.post('/user/addtocart',
        {
          itemId: itemId,
          quantity: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });
      
        setUserCartItems((prevItems) => {
          const item = items.find((itm: Item) => itm.id === itemId);
          if(item){
            return [...prevItems, {...item, quantity: 1, itemId: item.id}] as cartItem[];
          }
          return prevItems;
        });
      if(response.status === 200){
        console.log("Item added to cart");
      } 
    };


    const increaseQuantity = async (itemId: number,) => {
      const token = localStorage.getItem('token');
      const response = await axios.post('/user/incrementquantity',
        {
          itemId: itemId,
          quantity: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });

      if(response.status === 200){
        setUserCartItems((prevItems: cartItem[]) => {
          return prevItems.map((item: cartItem) => {
            if(item.id === itemId){
              return {...item, quantity: item.quantity + 1} as cartItem;
            }
            return item;
          });
        });
      } 

    };

    const decreaseQuantity = async (itemId: number,) => {
      const token = localStorage.getItem('token');
      const response = await axios.post('/user/decrementquantity',
        {
          itemId: itemId,
          quantity: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });

      if(response.status === 200){
        setUserCartItems((prevItems: cartItem[]) => {
          return prevItems.map((item: cartItem) => {
            if(item.id === itemId){
              return {...item, quantity: item.quantity - 1};
            }
            else if(item.quantity == 1){ 
              return null;
            }
            return item;
          }).filter(item => item !== null);
        });
      } 

    };

    

  return (
    <div className="items-section">
      {/* Item cards will go here */}
      <div className={`section-header text-center mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 grid`}>
        {sortedItems.map(item => {
          const itemInCart: cartItem | undefined = userCartItems.find((cartItem: cartItem) => cartItem.id === item.id);
          
          return(

            <ItemCard 
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.name}
            price={item.price}
            rating={item.rating}
            inStock={item.inStock}
            onAddToCart={() => addToCart(item.id)}
            onIncreaseQuantity={() => increaseQuantity(item.id)}
            onDecreaseQuantity={() => decreaseQuantity(item.id)}
            quantity={itemInCart ? itemInCart.quantity : 0}
            />
          ) 
})}
        </div>
    </div>
  );
}
