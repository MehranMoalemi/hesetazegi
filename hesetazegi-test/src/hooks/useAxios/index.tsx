import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface Response<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

function useAxios<T>(config: AxiosRequestConfig): Response<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    axios(config)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [config]);

  return { data, isLoading, error };
}

export default useAxios;