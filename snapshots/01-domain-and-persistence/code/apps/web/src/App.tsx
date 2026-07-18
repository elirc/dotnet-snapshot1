import { useEffect, useState } from 'react';
import type { DashboardSummary } from '@atlas/shared/dashboard';

export function App() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);

  useEffect(() => {
    fetch('/api/dashboard-summary')
      .then((response) => response.json())
      .then(setSummary)
      .catch(() => setSummary(null));
  }, []);

  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Global workforce operations</p>
        <h1>Client onboarding, work agreements, and local compliance in one operator console.</h1>
      </section>

      <section className="metrics" aria-label="Platform metrics">
        <div>
          <span>{summary?.activeClients ?? '--'}</span>
          <p>Active clients</p>
        </div>
        <div>
          <span>{summary?.pendingAgreements ?? '--'}</span>
          <p>Pending agreements</p>
        </div>
        <div>
          <span>{summary?.countriesCovered ?? '--'}</span>
          <p>Countries covered</p>
        </div>
      </section>

      <section className="client-list" aria-label="Client snapshot">
        <h2>Client snapshot</h2>
        {summary?.clientCards.map((client) => (
          <article className="client-row" key={client.id}>
            <div>
              <h3>{client.legalName}</h3>
              <p>{client.country}</p>
            </div>
            <strong>{client.status}</strong>
            <span>{client.openAgreements} open agreements</span>
          </article>
        ))}
      </section>
    </main>
  );
}
