import type { ClientCompany } from '@atlas/shared/clientCompany';
import { clientCompanyRecords } from '../data/clientCompanyRecords';

export interface ClientCompanyRepository {
  findAll(): Promise<ClientCompany[]>;
  findById(id: string): Promise<ClientCompany | null>;
  create(company: ClientCompany): Promise<ClientCompany>;
  update(id: string, patch: Partial<ClientCompany>): Promise<ClientCompany | null>;
  archive(id: string, archivedAt: string): Promise<boolean>;
}

export class InMemoryClientCompanyRepository implements ClientCompanyRepository {
  async findAll() {
    return clientCompanyRecords.filter((company) => !company.archivedAt).map((company) => ({ ...company }));
  }

  async findById(id: string) {
    const company = clientCompanyRecords.find((candidate) => candidate.id === id && !candidate.archivedAt);
    return company ? { ...company } : null;
  }

  async create(company: ClientCompany) {
    clientCompanyRecords.push(company);
    return { ...company };
  }

  async update(id: string, patch: Partial<ClientCompany>) {
    const index = clientCompanyRecords.findIndex((company) => company.id === id && !company.archivedAt);
    if (index === -1) return null;
    clientCompanyRecords[index] = { ...clientCompanyRecords[index], ...patch };
    return { ...clientCompanyRecords[index] };
  }

  async archive(id: string, archivedAt: string) {
    const updated = await this.update(id, { archivedAt, status: 'paused', updatedAt: archivedAt });
    return Boolean(updated);
  }
}

export const clientCompanyRepository = new InMemoryClientCompanyRepository();
