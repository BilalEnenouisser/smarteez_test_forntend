import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/api';

function CharacterDetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacter();
  }, [id]);

  const fetchCharacter = async () => {
    const data = await getCharacterById(id);
    setCharacter(data);
  };

  if (!character) return <div>Loading...</div>;

  return (
    

<div className="character-card canterCard">
        <h1 className='title1'>Details</h1>

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
      
      
  </div>


  );
}

export default CharacterDetailsPage;
