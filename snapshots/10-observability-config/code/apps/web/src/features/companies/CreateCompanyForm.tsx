import { FormEvent, useState } from 'react';
import { api } from '../../api/http';
import { ApiClientError, getErrorMessage } from '../../api/errors';
import { ErrorNotice } from '../../components/ErrorNotice';

interface Props {
  onCreated: (companyId: string) => void;
  onCancel: () => void;
}

export function CreateCompanyForm({ onCreated, onCancel }: Props) {
  const [legalName, setLegalName] = useState('');
  const [primaryCountry, setPrimaryCountry] = useState('');
  const [accountOwnerEmail, setAccountOwnerEmail] = useState('');
  const [error, setError] = useState<unknown>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fieldErrors = error instanceof ApiClientError ? error.fieldErrors : {};

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    if (!legalName.trim() || !primaryCountry.trim() || !accountOwnerEmail.trim()) {
      setError(new Error('Please complete every field before creating a client.'));
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await api.createClientCompany({ legalName, primaryCountry, accountOwnerEmail });
      onCreated(result.company.id);
    } catch (caught) {
      setError(caught);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="page-panel form-stack" onSubmit={handleSubmit}>
      <div className="page-heading"><div><p className="eyebrow">New client</p><h1>Create a client company</h1></div></div>
      {error && <ErrorNotice message={getErrorMessage(error)} />}
      <label>Legal name<input value={legalName} onChange={(event) => setLegalName(event.target.value)} /></label>
      {fieldErrors.legalName?.map((message) => <p className="field-error" key={message}>{message}</p>)}
      <label>Primary country<input value={primaryCountry} onChange={(event) => setPrimaryCountry(event.target.value)} /></label>
      {fieldErrors.primaryCountry?.map((message) => <p className="field-error" key={message}>{message}</p>)}
      <label>Account owner email<input value={accountOwnerEmail} onChange={(event) => setAccountOwnerEmail(event.target.value)} /></label>
      {fieldErrors.accountOwnerEmail?.map((message) => <p className="field-error" key={message}>{message}</p>)}
      <div className="button-row"><button type="button" onClick={onCancel}>Cancel</button><button disabled={isSubmitting} type="submit">Create client</button></div>
    </form>
  );
}
