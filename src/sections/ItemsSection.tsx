import ItemCard from '../components/ItemCard';
import { useRecoilValue } from 'recoil';
import ItemsListAtom, { type Item } from '../atoms/ItemsListAtom';
import { sortByAtom } from '../atoms/SortByAtom';
import { searchQueryAtom } from '../atoms/SearchQuery';



export default function ItemsSection() {
    const items: Item[] = useRecoilValue(ItemsListAtom);
    const sortBy: string = useRecoilValue(sortByAtom);
    const searchQuery: string = useRecoilValue(searchQueryAtom);

    const filteredItems = items.filter(item =>
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
    

  return (
    <div className="items-section">
      {/* Item cards will go here */}
      <div className={`section-header text-center mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 grid`}>
        {sortedItems.map(item => (
          <ItemCard 
            key={item.id}
            imageUrl={item.image}
            title={item.name}
            price={item.price}
            rating={item.rating}
            inStock={item.inStock}
          />
        ))}
        </div>
    </div>
  );
}
