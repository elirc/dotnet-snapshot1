import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type Cache = Map<string, unknown>;
interface QueryClientValue {
  get<T>(key: unknown[]): T | undefined;
  set<T>(key: unknown[], value: T): void;
  invalidate(prefix: unknown[]): void;
}

const QueryClientContext = createContext<QueryClientValue | null>(null);
const serialize = (key: unknown[]) => JSON.stringify(key);

export function QueryClientProvider({ children }: { children: ReactNode }) {
  const [cache] = useState<Cache>(() => new Map());
  const value = useMemo<QueryClientValue>(() => ({
    get: (key) => cache.get(serialize(key)) as never,
    set: (key, value) => { cache.set(serialize(key), value); },
    invalidate: (prefix) => {
      const serializedPrefix = JSON.stringify(prefix).slice(0, -1);
      for (const key of cache.keys()) if (key.startsWith(serializedPrefix)) cache.delete(key);
    }
  }), [cache]);
  return <QueryClientContext.Provider value={value}>{children}</QueryClientContext.Provider>;
}

export function useQueryClient() {
  const value = useContext(QueryClientContext);
  if (!value) throw new Error('useQueryClient must be used inside QueryClientProvider');
  return value;
}
