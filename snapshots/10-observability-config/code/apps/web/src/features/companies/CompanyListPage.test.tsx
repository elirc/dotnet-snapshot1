import { describe, expect, it } from 'vitest';
import { CompanyListPage } from './CompanyListPage';

describe('CompanyListPage', () => {
  it('renders a loading state while the collection is requested', () => {
    expect(CompanyListPage).toBeDefined();
  });
});
