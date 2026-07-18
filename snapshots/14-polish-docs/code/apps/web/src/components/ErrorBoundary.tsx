import { Component, ReactNode } from 'react';

export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return <main className="shell"><div className="error-notice" role="alert"><strong>Something broke in this view.</strong><p>Refresh the page or return to the client list.</p><button onClick={() => this.setState({ hasError: false })}>Try again</button></div></main>;
    return this.props.children;
  }
}
