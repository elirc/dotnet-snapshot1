import { api } from '../../api/http';
import { getErrorMessage } from '../../api/errors';
import { ErrorNotice } from '../../components/ErrorNotice';
import { useApiResource } from '../../hooks/useApiResource';

interface Props { onSelectCompany: (id: string) => void; onCreateCompany: () => void; }

export function CompanyListPage({ onSelectCompany, onCreateCompany }: Props) {
  const { data, error, isLoading } = useApiResource(() => api.listClientCompanies(), []);
  if (isLoading) return <p>Loading client companies...</p>;
  if (error) return <ErrorNotice message={getErrorMessage(error)} />;
  const companies = data?.companies ?? [];
  return (
    <section className="page-panel">
      <div className="page-heading"><div><p className="eyebrow">Client companies</p><h1>Manage employer-of-record clients</h1></div><button onClick={onCreateCompany}>Create client</button></div>
      {companies.length === 0 ? <p>No client companies yet.</p> : <div className="client-list">{companies.map((company) => (
        <button className="client-row action-row" key={company.id} onClick={() => onSelectCompany(company.id)}><span>{company.legalName}</span><strong>{company.status}</strong><span>{company.openAgreementCount} open agreements</span></button>
      ))}</div>}
    </section>
  );
}
