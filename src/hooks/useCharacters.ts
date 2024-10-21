import { useEffect, useState } from 'react';
import { fetchCharacters } from '../utils/api';
import { Character } from '../types/characters';

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data.results);
      setLoading(false);
    };
    loadCharacters();
  }, []);

  return { characters, loading };
};

export default useCharacters;
