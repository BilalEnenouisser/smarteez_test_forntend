import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Filters({ applyFilters }) {
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate(); 

  const handleApplyFilters = () => {
    applyFilters({ status, species, gender });
  };

  const goToFavorites = () => {
    navigate('/favorites'); 
  };

  return (
    <div className="filters">
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select value={species} onChange={(e) => setSpecies(e.target.value)}>
        <option value="">All Species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        
      </select>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <button onClick={handleApplyFilters}>Apply Filters</button>
      <button onClick={goToFavorites}>Go to Favorites</button> 
    </div>
  );
}

export default Filters;
