import { FormEvent, useState } from 'react';
import { api } from '../../api/http';

interface Props {
  onCreated: (companyId: string) => void;
  onCancel: () => void;
}

export function CreateCompanyForm({ onCreated, onCancel }: Props) {
  const [legalName, setLegalName] = useState('');
  const [primaryCountry, setPrimaryCountry] = useState('');
  const [accountOwnerEmail, setAccountOwnerEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);
    const result = await api.createClientCompany({ legalName, primaryCountry, accountOwnerEmail });
    onCreated(result.company.id);
  }

  return (
    <form className="page-panel form-stack" onSubmit={handleSubmit}>
      <div className="page-heading">
        <div>
          <p className="eyebrow">New client</p>
          <h1>Create a client company</h1>
        </div>
      </div>
      <label>Legal name<input value={legalName} onChange={(event) => setLegalName(event.target.value)} /></label>
      <label>Primary country<input value={primaryCountry} onChange={(event) => setPrimaryCountry(event.target.value)} /></label>
      <label>Account owner email<input value={accountOwnerEmail} onChange={(event) => setAccountOwnerEmail(event.target.value)} /></label>
      <div className="button-row">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button disabled={isSubmitting} type="submit">Create client</button>
      </div>
    </form>
  );
}
