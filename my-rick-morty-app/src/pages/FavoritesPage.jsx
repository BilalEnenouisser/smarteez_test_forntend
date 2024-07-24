import React from 'react';
import CharacterCard from '../components/CharacterCard';
import useFavorites from '../hooks/useFavorites';

function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1 className='title1'>Favorites</h1>
      <div className="character-list">
        {favorites.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
