import { useState, useEffect } from 'react';
import axios from 'axios';

const useCategoryFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      const source = axios.CancelToken.source();
      source.cancel();
    };
  }, [url]);

  return { data, loading, error };
};

export default useCategoryFetch;
