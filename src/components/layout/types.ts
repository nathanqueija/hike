import { User } from '@/app/auth';

export type AuthenticatedLayoutProps = {
  user: User;
  onLogout: () => void;
  children: React.ReactNode;
};
