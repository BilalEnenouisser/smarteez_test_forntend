import React, { useState } from 'react';

function Filters({ applyFilters }) {
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');

  const handleApplyFilters = () => {
    applyFilters({ status, species, gender });
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
        {/* Add more species options as needed */}
      </select>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <button onClick={handleApplyFilters}>Apply Filters</button>
     
    </div>
  );
}

export default Filters;