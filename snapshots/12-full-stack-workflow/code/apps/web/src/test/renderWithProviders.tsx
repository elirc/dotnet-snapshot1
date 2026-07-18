import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { QueryClientProvider } from '../query/queryClient';
import { AuthProvider } from '../auth/AuthProvider';

export function renderWithProviders(ui: ReactElement) {
  return render(<QueryClientProvider><AuthProvider>{ui}</AuthProvider></QueryClientProvider>);
}
