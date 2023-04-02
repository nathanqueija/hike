import { Status } from '@/hike/types';

export interface State {
  user: User | null;
  signOut: { status: Status };
  signIn: { status: Status };
}

export interface User {
  id?: string | undefined;
  displayName: string | null | undefined;
  email: string | null | undefined;
  photoURL: string | null | undefined;
  createdAt?: string;
  lastLogin?: string;
}

export type Events =
  | { type: 'auth/auth-changed'; payload: { user: User | null } }
  | { type: 'auth/logout-requested' }
  | { type: 'auth/signin-requested' }
  | { type: 'auth/signout-status-changed'; payload: { status: Status } }
  | { type: 'auth/signin-status-changed'; payload: { status: Status } };
