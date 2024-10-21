import { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/api';
import { Movie } from '../types/movie';

const useMovies = (id: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(id);
      setMovies(data.results);
    };
    loadMovies();
  }, [id]);

  return movies;
};

export default useMovies;
