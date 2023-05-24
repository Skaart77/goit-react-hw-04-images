import { useState } from 'react';
import { toast } from 'react-toastify';
import { BiSearch } from 'react-icons/bi';

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };
  // Викликається під час відправлення форми
  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Enter your search query!');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <BiSearch size={30} />
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={searchQuery}
        />
      </form>
    </header>
  );
}

export default Searchbar;
