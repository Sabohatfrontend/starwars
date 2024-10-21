import React from 'react';
import useCharacters from '../../hooks/useCharacters';
import { getCharacterId } from '../../utils/getCharacterId';
import './characterList.css';
import { Link } from 'react-router-dom';

const CharacterList: React.FC = () => {
  const { characters, loading } = useCharacters();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul className="character-lists">
        {characters.map((character) => (
          <li className="character-item" key={character.url}>
            <Link className="character-link" to={getCharacterId(character.url)}>
              <img
                className="character-image"
                src={`https://starwars-visualguide.com/assets/img/characters/${getCharacterId(character.url)}.jpg`}
                alt="Character image"
              />
              <p className="character-name">{character.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
