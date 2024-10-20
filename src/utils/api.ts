const API_URL = 'https://sw-api.starnavi.io';

export const fetchCharacters = async () => {
  const response = await fetch(`${API_URL}/people`);
  return response.body;
};

export const fetchCharacterDetails = async (id: string) => {
  const response = await fetch(`${API_URL}/people/${id}`);
  return response.body;
};

export const fetchMovies = async (id: string) => {
  const response = await fetch(`${API_URL}/films/?characters__in=${id}`);
  return response.body;
};

export const fetchStarships = async (id: string) => {
  const response = await fetch(`${API_URL}/starships/${id}/`);
  return response.body;
};
