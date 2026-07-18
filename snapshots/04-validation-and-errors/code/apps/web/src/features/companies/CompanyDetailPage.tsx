import { useEffect, useState } from 'react';
import type { ClientCompany } from '@atlas/shared/clientCompany';
import { api } from '../../api/http';

interface Props {
  companyId: string;
  onBack: () => void;
}

export function CompanyDetailPage({ companyId, onBack }: Props) {
  const [company, setCompany] = useState<ClientCompany | null>(null);

  useEffect(() => {
    api.getClientCompany(companyId).then((result) => setCompany(result.company));
  }, [companyId]);

  if (!company) return <p>Loading company...</p>;

  return (
    <section className="page-panel">
      <button className="link-button" onClick={onBack}>Back to clients</button>
      <p className="eyebrow">{company.status}</p>
      <h1>{company.legalName}</h1>
      <dl className="detail-grid">
        <div><dt>Primary country</dt><dd>{company.primaryCountry}</dd></div>
        <div><dt>Account owner</dt><dd>{company.accountOwnerEmail}</dd></div>
        <div><dt>Created</dt><dd>{new Date(company.createdAt).toLocaleDateString()}</dd></div>
      </dl>
    </section>
  );
}
