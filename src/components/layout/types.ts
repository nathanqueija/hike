import { User } from '@/hike/auth';

export type AuthenticatedLayoutProps = {
  user: User;
  onLogout: () => void;
  children: React.ReactNode;
};
