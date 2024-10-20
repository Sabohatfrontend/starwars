import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<ReadableStream<Uint8Array> | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(url);
        setData(response.body);
      } catch {
        setErrorMessage(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, errorMessage };
};

export default useFetch;
