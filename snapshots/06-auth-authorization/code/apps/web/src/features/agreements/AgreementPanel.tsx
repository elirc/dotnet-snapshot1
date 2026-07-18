import { FormEvent, useEffect, useState } from 'react';
import type { WorkAgreement } from '@atlas/shared/workAgreement';
import { api } from '../../api/http';

interface Props { clientCompanyId: string; }

export function AgreementPanel({ clientCompanyId }: Props) {
  const [agreements, setAgreements] = useState<WorkAgreement[]>([]);
  const [workerName, setWorkerName] = useState('');
  const [workerCountry, setWorkerCountry] = useState('');
  const [roleTitle, setRoleTitle] = useState('');
  const [startDate, setStartDate] = useState('');

  async function loadAgreements() {
    const result = await api.listAgreementsForCompany(clientCompanyId);
    setAgreements(result.agreements);
  }

  useEffect(() => { loadAgreements(); }, [clientCompanyId]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    await api.createWorkAgreement({ clientCompanyId, workerName, workerCountry, roleTitle, startDate });
    setWorkerName(''); setWorkerCountry(''); setRoleTitle(''); setStartDate('');
    await loadAgreements();
  }

  return (
    <section className="sub-panel">
      <h2>Work agreements</h2>
      {agreements.length === 0 ? <p>No agreements yet.</p> : agreements.map((agreement) => (
        <article className="agreement-row" key={agreement.id}>
          <strong>{agreement.workerName}</strong>
          <span>{agreement.roleTitle}</span>
          <span>{agreement.workerCountry}</span>
          <em>{agreement.status}</em>
        </article>
      ))}
      <form className="compact-form" onSubmit={handleSubmit}>
        <input placeholder="Worker name" value={workerName} onChange={(event) => setWorkerName(event.target.value)} />
        <input placeholder="Worker country" value={workerCountry} onChange={(event) => setWorkerCountry(event.target.value)} />
        <input placeholder="Role title" value={roleTitle} onChange={(event) => setRoleTitle(event.target.value)} />
        <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
        <button type="submit">Add agreement</button>
      </form>
    </section>
  );
}
