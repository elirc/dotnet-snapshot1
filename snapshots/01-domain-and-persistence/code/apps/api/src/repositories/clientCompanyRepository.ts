import type { ClientCompany } from '@atlas/shared/clientCompany';
import { clientCompanyRecords } from '../data/clientCompanyRecords';

export interface ClientCompanyRepository {
  findAll(): Promise<ClientCompany[]>;
  findById(id: string): Promise<ClientCompany | null>;
}

export class InMemoryClientCompanyRepository implements ClientCompanyRepository {
  async findAll() {
    return [...clientCompanyRecords];
  }

  async findById(id: string) {
    return clientCompanyRecords.find((company) => company.id === id) ?? null;
  }
}

export const clientCompanyRepository = new InMemoryClientCompanyRepository();
