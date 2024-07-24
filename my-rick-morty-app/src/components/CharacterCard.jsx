import React from 'react';
import { Link } from 'react-router-dom';
import useFavorites from '../hooks/useFavorites';
import '../CharacterCard.css';

function CharacterCard({ character }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === character.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(character);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div className="character-card">
      <Link to={`/character/${character.id}`} className="character-link">
        <div className="character-image-container">
          <img src={character.image} alt={character.name} className="character-image" />
        </div>
        <div className="character-info">
          <h2 className="character-name">{character.name}</h2>
          <div className="infoCar">
          <p className="character-species">{character.species}</p>
          -
          <p className="character-status">{character.status}</p>
          -
          <p className="character-gender">{character.gender}</p>
          </div>
          
        </div>
      </Link>
      <button onClick={toggleFavorite} className="favorite-button">
        {isFavorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
      </button>
    </div>
  );
}

export default CharacterCard;
