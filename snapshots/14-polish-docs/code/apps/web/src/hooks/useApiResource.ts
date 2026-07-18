import { useEffect, useState } from 'react';

export function useApiResource<T>(loader: () => Promise<T>, dependencies: unknown[]) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function reload() {
    setIsLoading(true);
    setError(null);
    try {
      setData(await loader());
    } catch (caught) {
      setError(caught);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => { reload(); }, dependencies);
  return { data, error, isLoading, reload };
}
