export const getCharacterId = (url: string) => {
  const characterId = url
    .replace('https://swapi.dev/api/people/', '')
    .replace('/', '');
  return characterId;
};
