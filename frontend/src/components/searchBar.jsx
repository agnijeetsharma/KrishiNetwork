import  { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <div className="w-screen mb-10 text-center bg-green200  fixed shadow-2xl">
            <div className="flex justify-center space-x-2">
                <input
                    className="w-1/3 h-9 border-2 mb-4 border-green-300 rounded-2xl px-4 focus:outline-none focus:border-green-500"
                    type="text"
                    placeholder="Search for crops etc..."
                    value={query}
                    onChange={handleChange}
                    aria-label="Search"
                />
                <button
                    className="border-2 mb-4 border-green-300 rounded-2xl px-4 py-1 transition-colors duration-200 hover:bg-green-300 hover:text-white"
                    onClick={handleSearch}
                    aria-label="Search button"
                >
                    Search
                </button>
            </div>
        </div>
    );
};
