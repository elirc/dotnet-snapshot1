export type UserRole = 'admin' | 'operator' | 'viewer';

export interface CurrentUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
