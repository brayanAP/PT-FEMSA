import axios, {AxiosRequestConfig} from 'axios';
import {useEffect, useState} from 'react';

const useFetch = <T>(url: string, config?: AxiosRequestConfig<T>) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<unknown>(undefined);

  useEffect(() => {
    const doFetch = async () => {
      const fetchData = async () => {
        try {
          setIsFetching(true);
          const response = await axios<T>(url, config);
          setData(response.data);
        } catch (e) {
          setError(e);
        } finally {
          setIsFetching(false);
        }
      };
      fetchData();
    };

    doFetch();
  }, [url, config]);

  return {
    data,
    isFetching,
    error,
  };
};

export default useFetch;
