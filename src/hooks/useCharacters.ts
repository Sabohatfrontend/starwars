import { useEffect, useState } from 'react';
import { fetchCharacters } from '../utils/api';

const useCharacters = (url: string) => {
  const [data, setData] = useState<ReadableStream<Uint8Array> | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetchCharacters();
        setData(response);
        setErrorMessage(false);
      } catch {
        setErrorMessage(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, errorMessage };
};

export default useCharacters;
