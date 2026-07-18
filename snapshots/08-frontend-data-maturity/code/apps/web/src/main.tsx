import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { QueryClientProvider } from './query/queryClient';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
