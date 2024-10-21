import { useEffect, useState } from 'react';
import { fetchCharacterDetails } from '../utils/api';
import { Character } from '../types/characters';

const useCharacterDetails = (id: string) => {
  const [details, setDetails] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDetails = async () => {
      setLoading(true);
      const data = await fetchCharacterDetails(id);
      setDetails(data);
      setLoading(false);
    };
    loadDetails();
  }, [id]);

  return { details, loading };
};

export default useCharacterDetails;
