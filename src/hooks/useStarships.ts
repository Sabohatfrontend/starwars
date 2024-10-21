import { useEffect, useState } from 'react';
import { fetchStarships } from '../utils/api';
import { Starship } from '../types/starship';

const useStarships = (urls: string[] | undefined = []) => {
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    const starShips: Starship[] = [];
    const loadStarships = () => {
      urls.forEach(async (url) => {
        const data = await fetchStarships(url);
        starShips.push(data);
      });
      setStarships(starShips);
    };
    loadStarships();
  }, [urls]);

  return starships;
};

export default useStarships;
