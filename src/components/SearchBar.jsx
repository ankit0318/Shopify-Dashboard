import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef(null);

  // Handle clicks outside the search component to collapse it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search logic here
    console.log('Searching for:', searchTerm);
    // You could call an API or filter data based on the search term
  };

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      // Focus on input when expanded
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      {isExpanded ? (
        <form 
          onSubmit={handleSearch}
          className="flex items-center bg-white dark:bg-gray-700 rounded-full overflow-hidden transition-all duration-300 shadow-md"
          style={{ width: isExpanded ? '400px' : '40px' }}
        >
          <input
            id="search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-full px-3 py-2 outline-none border-none bg-transparent dark:text-gray-200"
          />
          <button 
            type="button"
            onClick={() => {
              setSearchTerm('');
              setIsExpanded(false);
            }}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <IoMdClose />
          </button>
        </form>
      ) : (
        <button
          onClick={toggleSearch}
          className="text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-gray-700"
          type="button"
          aria-label="Search"
        >
          <AiOutlineSearch />
        </button>
      )}
    </div>
  );
};

export default SearchBar;