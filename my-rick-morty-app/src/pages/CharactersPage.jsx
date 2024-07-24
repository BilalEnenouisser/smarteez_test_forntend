import React, { useEffect, useState } from 'react';
import { getCharacters } from '../services/api';
import CharacterCard from '../components/CharacterCard';
import Pagination from '../components/Pagination';
import Filters from '../components/Filters';
import '../CharactersPage.css';

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchCharacters();
  }, [page, filters]);

  const fetchCharacters = async () => {
    const data = await getCharacters(page, { ...filters, name: search });
    setCharacters(data.results);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1 className='title1'>Rick and Morty Characters</h1>
      <input type="text" value={search} onChange={handleSearch} placeholder="Search by name" />
      <Filters applyFilters={applyFilters} />
      <div className="character-list">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
}

export default CharactersPage;
