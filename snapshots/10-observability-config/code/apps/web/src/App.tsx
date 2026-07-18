import { useEffect, useState } from 'react';
import { AuthProvider, useAuth } from './auth/AuthProvider';
import { LoginPage } from './auth/LoginPage';
import { setApiAuthToken } from './api/http';
import { CompanyDetailPage } from './features/companies/CompanyDetailPage';
import { CompanyListPage } from './features/companies/CompanyListPage';
import { CreateCompanyForm } from './features/companies/CreateCompanyForm';

type Screen = { name: 'companies' } | { name: 'create-company' } | { name: 'company-detail'; companyId: string };

function ProductShell() {
  const { token, user, logout } = useAuth();
  const [screen, setScreen] = useState<Screen>({ name: 'companies' });
  useEffect(() => setApiAuthToken(token), [token]);
  if (!token || !user) return <LoginPage />;
  return (
    <main className="shell">
      <header className="topbar"><strong>Atlas</strong><span>{user.name} - {user.role}</span><button onClick={logout}>Sign out</button></header>
      {screen.name === 'companies' && <CompanyListPage onCreateCompany={() => setScreen({ name: 'create-company' })} onSelectCompany={(companyId) => setScreen({ name: 'company-detail', companyId })} />}
      {screen.name === 'create-company' && <CreateCompanyForm onCancel={() => setScreen({ name: 'companies' })} onCreated={(companyId) => setScreen({ name: 'company-detail', companyId })} />}
      {screen.name === 'company-detail' && <CompanyDetailPage companyId={screen.companyId} onBack={() => setScreen({ name: 'companies' })} />}
    </main>
  );
}

export function App() {
  return <AuthProvider><ProductShell /></AuthProvider>;
}
