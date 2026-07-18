import type { CurrentUser } from '@atlas/shared/user';

export const demoTokens = new Map<string, CurrentUser>([
  ['demo-admin-token', { id: 'user_admin', name: 'Maya Admin', email: 'maya.admin@atlas.example', role: 'admin' }],
  ['demo-operator-token', { id: 'user_operator', name: 'Omar Operator', email: 'omar.operator@atlas.example', role: 'operator' }],
  ['demo-viewer-token', { id: 'user_viewer', name: 'Vera Viewer', email: 'vera.viewer@atlas.example', role: 'viewer' }]
]);
