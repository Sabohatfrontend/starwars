import React, { useState } from 'react';
import useCharacters from '../../hooks/useCharacters';
import { getCharacterId } from '../../utils/getCharacterId';
import './characterList.css';
import { Link } from 'react-router-dom';
import Pagination from '../pagination/pagination';

const CharacterList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { count, characters, loading } = useCharacters(currentPage);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>
        Total: <span>{count}</span>
      </h2>
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
      <Pagination
        currentPage={currentPage}
        totalPages={count / 10}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CharacterList;
