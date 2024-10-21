import React from 'react';
import Graph from '../../components/graph/graph';
import { useParams } from 'react-router-dom';
import useCharacterDetails from '../../hooks/useCharacterDetails';
import useMovies from '../../hooks/useMovies';
import useStarships from '../../hooks/useStarships';

const CharacterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { details, loading } = useCharacterDetails(id ? id : '');
  const starships = useStarships(details?.starships);
  console.log(starships);
  const movies = useMovies(id ? id : '');
  if (loading) return <div>Loading details...</div>;
  return details !== null ? (
    <Graph character={details} movies={movies} starships={starships} />
  ) : (
    <></>
  );
};

export default CharacterDetails;
