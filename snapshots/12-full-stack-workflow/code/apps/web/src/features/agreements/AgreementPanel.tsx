import { FormEvent, useState } from 'react';
import type { WorkAgreementStatus } from '@atlas/shared/workAgreement';
import { api } from '../../api/http';
import { useCompanyAgreements } from './useAgreementQueries';

interface Props { clientCompanyId: string; }
const statuses: WorkAgreementStatus[] = ['draft', 'in_review', 'ready_for_signature', 'active', 'blocked'];

export function AgreementPanel({ clientCompanyId }: Props) {
  const { data, isLoading, changeStatus, reload } = useCompanyAgreements(clientCompanyId);
  const [workerName, setWorkerName] = useState('');
  const [workerCountry, setWorkerCountry] = useState('');
  const [roleTitle, setRoleTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    await api.createWorkAgreement({ clientCompanyId, workerName, workerCountry, roleTitle, startDate });
    setWorkerName(''); setWorkerCountry(''); setRoleTitle(''); setStartDate('');
    await reload();
  }
  const agreements = data?.agreements ?? [];
  return (
    <section className="sub-panel"><h2>Work agreements</h2>{isLoading ? <p>Loading agreements...</p> : agreements.map((agreement) => (
      <article className="agreement-row" key={agreement.id}><strong>{agreement.workerName}</strong><span>{agreement.roleTitle}</span><select value={agreement.status} onChange={(event) => changeStatus(agreement, event.target.value as WorkAgreementStatus)}>{statuses.map((status) => <option key={status}>{status}</option>)}</select></article>
    ))}<form className="compact-form" onSubmit={handleSubmit}><input placeholder="Worker name" value={workerName} onChange={(event) => setWorkerName(event.target.value)} /><input placeholder="Worker country" value={workerCountry} onChange={(event) => setWorkerCountry(event.target.value)} /><input placeholder="Role title" value={roleTitle} onChange={(event) => setRoleTitle(event.target.value)} /><input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} /><button type="submit">Add agreement</button></form></section>
  );
}
