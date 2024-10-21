import { useEffect, useState } from 'react';
import { fetchCharacters } from '../utils/api';
import { Character } from '../types/characters';

const useCharacters = (currentPage: number = 1) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const loadCharacters = async () => {
      const data = await fetchCharacters(currentPage);
      setCharacters(data.results);
      setCount(data.count);
      setLoading(false);
    };
    loadCharacters();
  }, [currentPage]);

  return { count, characters, loading };
};

export default useCharacters;
