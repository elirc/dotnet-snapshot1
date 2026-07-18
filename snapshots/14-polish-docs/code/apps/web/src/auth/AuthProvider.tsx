import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import type { CurrentUser } from '@atlas/shared/user';

const demoUsers: Record<string, { token: string; user: CurrentUser }> = {
  admin: { token: 'demo-admin-token', user: { id: 'user_admin', name: 'Maya Admin', email: 'maya.admin@atlas.example', role: 'admin' } },
  operator: { token: 'demo-operator-token', user: { id: 'user_operator', name: 'Omar Operator', email: 'omar.operator@atlas.example', role: 'operator' } },
  viewer: { token: 'demo-viewer-token', user: { id: 'user_viewer', name: 'Vera Viewer', email: 'vera.viewer@atlas.example', role: 'viewer' } }
};

interface AuthContextValue { token: string | null; user: CurrentUser | null; loginAs: (key: keyof typeof demoUsers) => void; logout: () => void; }
const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<{ token: string; user: CurrentUser } | null>(null);
  const value = useMemo(() => ({ token: session?.token ?? null, user: session?.user ?? null, loginAs: (key: keyof typeof demoUsers) => setSession(demoUsers[key]), logout: () => setSession(null) }), [session]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error('useAuth must be used inside AuthProvider');
  return value;
}
