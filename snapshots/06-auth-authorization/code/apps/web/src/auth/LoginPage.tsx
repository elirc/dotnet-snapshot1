import { useAuth } from './AuthProvider';

export function LoginPage() {
  const { loginAs } = useAuth();
  return (
    <main className="shell login-panel">
      <p className="eyebrow">Demo authentication</p>
      <h1>Choose an operator role</h1>
      <div className="button-row">
        <button onClick={() => loginAs('admin')}>Admin</button>
        <button onClick={() => loginAs('operator')}>Operator</button>
        <button onClick={() => loginAs('viewer')}>Viewer</button>
      </div>
    </main>
  );
}
