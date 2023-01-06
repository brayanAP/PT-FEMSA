import {useMemo} from 'react';
import {Movements, Movement} from '../types/base';
import useFetch from './useFetch';

type Filter = (movement: Movement) => boolean;

const useFetchMovements = (filter?: Filter) => {
  const {data, isFetching} = useFetch<Movements>(
    'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
  );

  const movements = useMemo(() => {
    if (!data) {
      return undefined;
    }
    const sortMovements = data.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    if (filter) {
      return sortMovements.filter(filter);
    }

    return sortMovements;
  }, [data, filter]);

  return {
    movements,
    isFetchingMovements: isFetching,
  };
};

export default useFetchMovements;
