const API_URL = 'https://swapi.dev/api/';

export const fetchCharacters = async () => {
  const response = await fetch(`${API_URL}/people/`);
  return response.json();
};

export const fetchCharacterDetails = async (id: string) => {
  const response = await fetch(`${API_URL}/people/${id}`);
  return response.json();
};

export const fetchMovies = async (id: string) => {
  const response = await fetch(`${API_URL}/films/?characters__in=${id}`);
  return response.json();
};

export const fetchStarships = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};
