import { useState } from 'react';
import { CompanyDetailPage } from './features/companies/CompanyDetailPage';
import { CompanyListPage } from './features/companies/CompanyListPage';
import { CreateCompanyForm } from './features/companies/CreateCompanyForm';

type Screen =
  | { name: 'companies' }
  | { name: 'create-company' }
  | { name: 'company-detail'; companyId: string };

export function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'companies' });

  return (
    <main className="shell">
      {screen.name === 'companies' && (
        <CompanyListPage
          onCreateCompany={() => setScreen({ name: 'create-company' })}
          onSelectCompany={(companyId) => setScreen({ name: 'company-detail', companyId })}
        />
      )}
      {screen.name === 'create-company' && (
        <CreateCompanyForm
          onCancel={() => setScreen({ name: 'companies' })}
          onCreated={(companyId) => setScreen({ name: 'company-detail', companyId })}
        />
      )}
      {screen.name === 'company-detail' && (
        <CompanyDetailPage companyId={screen.companyId} onBack={() => setScreen({ name: 'companies' })} />
      )}
    </main>
  );
}
