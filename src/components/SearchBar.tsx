import { useRecoilState } from 'recoil';
import { sortByAtom } from '../atoms/SortByAtom';
import { searchQueryAtom } from '../atoms/SearchQuery';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);
    const [sortBy, setSortBy] = useRecoilState(sortByAtom);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
    };

    return (
        <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            padding: '1rem',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            {/* Search Input */}
            <div style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
            }}>
                <svg 
                    style={{
                        position: 'absolute',
                        left: '1rem',
                        width: '20px',
                        height: '20px',
                        color: '#6b7280'
                    }}
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                    type="text"
                    placeholder="Search for dairy products..."
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 3rem',
                        borderRadius: '50px',
                        border: '2px solid #e5e7eb',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
            </div>

            {/* Filter Dropdown */}
            <div style={{ position: 'relative' }}>
                <select
                    value={sortBy}
                    onChange={handleSortChange}
                    style={{
                        padding: '0.75rem 2.5rem 0.75rem 1rem',
                        borderRadius: '50px',
                        border: '2px solid #e5e7eb',
                        fontSize: '1rem',
                        outline: 'none',
                        backgroundColor: 'white',
                        cursor: 'pointer',
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                >
                    <option value="default">Sort By</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="name-a-z">Name: A to Z</option>
                    <option value="name-z-a">Name: Z to A</option>
                    <option value="rating-high-low">Rating: High to Low</option>
                    <option value="rating-low-high">Rating: Low to High</option>
                </select>
            </div>
        </div>
    );
}


export default SearchBar;