import React from 'react';
import { Movie } from '../../types/movie';
import { Starship } from '../../types/starship';
import { Character } from '../../types/characters';

import { ReactFlow } from '@xyflow/react';
import { Slide } from './customNode';

const nodeTypes = {
  slide: Slide,
};

const Graph: React.FC<{
  character: Character;
  movies: Movie[];
  starships: Starship[];
}> = ({ character, movies, starships }) => {
  const initialNodes = [
    {
      id: character.url,
      data: { label: character.name },
      position: { x: 250, y: 25 },
    },
    ...movies.map((movie) => ({
      id: `${movie.url}`,
      data: { label: movie.title },
      position: { x: 100, y: 50 },
    })),
    ...starships.map((starship) => ({
      id: `${starship.url}`,
      data: { label: starship.name },
      position: { x: 400, y: 0 },
    })),
  ];

  const initialEdges = [
    ...movies.map((movie) => ({
      id: `${character.url}-${movie.url}`,
      source: character.url,
      target: `${movie.url}`,
    })),
    ...starships.map((starship) => ({
      id: `${character.url}-${starship.url}`,
      source: `${character.url}`,
      target: `${starship.url}`,
    })),
  ];

  const rfStyle = {
    backgroundColor: '#B8CEFF',
  };

  return (
    <ReactFlow
      nodes={initialNodes}
      edges={initialEdges}
      nodeTypes={nodeTypes}
      style={rfStyle}
      fitView
      minZoom={0.1}
    />
  );
};

export default Graph;
