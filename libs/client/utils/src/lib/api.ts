interface Body<TVariables> {
  query: string;
  variables?: TVariables;
}

interface Error {
  message: string;
}

interface Response<TData> {
  data: TData;
  errors: Error[];
}

export const server = {
  fetch: async <TData = never, TVariables = never>(body: Body<TVariables>) => {
    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error('failed to fetch from server');
    }

    return res.json() as Promise<Response<TData>>;
  },
};
