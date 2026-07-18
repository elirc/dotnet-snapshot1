import { useEffect, useState } from 'react';
import type { ClientCompanyListItem } from '@atlas/shared/clientCompany';
import { api } from '../../api/http';

interface Props {
  onSelectCompany: (id: string) => void;
  onCreateCompany: () => void;
}

export function CompanyListPage({ onSelectCompany, onCreateCompany }: Props) {
  const [companies, setCompanies] = useState<ClientCompanyListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.listClientCompanies()
      .then((result) => setCompanies(result.companies))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>Loading client companies...</p>;

  return (
    <section className="page-panel">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Client companies</p>
          <h1>Manage employer-of-record clients</h1>
        </div>
        <button onClick={onCreateCompany}>Create client</button>
      </div>

      <div className="client-list">
        {companies.map((company) => (
          <button className="client-row action-row" key={company.id} onClick={() => onSelectCompany(company.id)}>
            <span>{company.legalName}</span>
            <strong>{company.status}</strong>
            <span>{company.openAgreementCount} open agreements</span>
          </button>
        ))}
      </div>
    </section>
  );
}
