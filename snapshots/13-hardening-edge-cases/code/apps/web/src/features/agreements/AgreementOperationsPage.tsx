import { useEffect, useState } from 'react';
import type { AgreementSearchResponse, WorkAgreementStatus } from '@atlas/shared/workAgreement';
import { api } from '../../api/http';

const statuses: Array<WorkAgreementStatus | 'all'> = ['all', 'draft', 'in_review', 'ready_for_signature', 'active', 'blocked'];
export function AgreementOperationsPage() {
  const [q, setQ] = useState(''); const [status, setStatus] = useState<WorkAgreementStatus | 'all'>('all'); const [page, setPage] = useState(1); const [result, setResult] = useState<AgreementSearchResponse | null>(null);
  useEffect(() => { api.searchWorkAgreements({ q, status, page, pageSize: 10 }).then(setResult); }, [q, status, page]);
  const totalPages = Math.max(1, Math.ceil((result?.total ?? 0) / (result?.pageSize ?? 10)));
  return <section className="page-panel" aria-labelledby="agreement-heading"><div className="page-heading"><div><p className="eyebrow">Agreement operations</p><h1 id="agreement-heading">Search and move agreements through review</h1></div></div><div className="filters"><label htmlFor="agreement-search">Search</label><input id="agreement-search" value={q} onChange={(event) => { setQ(event.target.value); setPage(1); }} /><label htmlFor="agreement-status">Status</label><select id="agreement-status" value={status} onChange={(event) => { setStatus(event.target.value as WorkAgreementStatus | 'all'); setPage(1); }}>{statuses.map((item) => <option key={item}>{item}</option>)}</select></div><div aria-live="polite">{result?.total === 0 ? 'No agreements match these filters.' : String(result?.total ?? 0) + ' agreements found.'}</div><div className="client-list">{result?.agreements.map((agreement) => <article className="client-row" key={agreement.id}><span>{agreement.workerName}</span><strong>{agreement.status}</strong><span>{agreement.workerCountry}</span></article>)}</div><div className="button-row"><button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button><span>Page {page} of {totalPages}</span><button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Next</button></div></section>;
}
