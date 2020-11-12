import { useEffect, useState } from 'react';
import { server } from './api';

interface State<TData> {
  data: TData | null;
}

export const useQuery = <TData = never>(query: string) => {
  const [state, setState] = useState<State<TData>>({
    data: null,
  });

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await server.fetch<TData>({ query });
      setState({ data });
    };

    fetchApi();
  }, [query]);

  return state;
};
