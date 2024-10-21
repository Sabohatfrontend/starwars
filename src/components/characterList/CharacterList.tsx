import React, { useEffect, useState } from 'react';
import useCharacters from '../../hooks/useCharacters';
import { getCharacterId } from '../../utils/getCharacterId';
import './characterList.css';
import { Link, useSearchParams } from 'react-router-dom';
import Pagination from '../pagination/pagination';
import Loading from '../loading/loading';

const CharacterList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const [currentPage, setCurrentPage] = useState<number>(
    page ? Number(searchParams.get('page')) : 1
  );
  const { count, characters, loading } = useCharacters(currentPage);

  useEffect(() => {
    setSearchParams((params) => {
      params.set('page', currentPage.toString());
      return params;
    });
  }, [currentPage, setSearchParams]);

  if (loading) return <Loading />;

  return (
    <div>
      <p className="total-text">
        Total: <span>{count}</span>
      </p>
      <ul className="character-lists">
        {characters.map((character) => (
          <li className="character-item" key={character.url}>
            <Link
              title={`About ${character.name}`}
              className="character-link"
              to={getCharacterId(character.url)}
            >
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
