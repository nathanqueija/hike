import { AuthenticatedLayout as PureAuthenticatedLayout } from '@/components/layout';

import { useUser } from '@/app/auth';
import { dispatch } from '@/app/events';
import LandingPage from '@/pages';

export const AuthenticatedLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = useUser();

  const onLogout = () => dispatch('auth/logout-requested');

  return user ? (
    <PureAuthenticatedLayout user={user} onLogout={onLogout}>
      {children}
    </PureAuthenticatedLayout>
  ) : (
    <LandingPage />
  );
};
