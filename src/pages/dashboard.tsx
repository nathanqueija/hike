import Link from 'next/link';

import { AuthenticatedLayout } from '@/containers/layout';

const DashboardPage = () => {
  return (
    <AuthenticatedLayout>
      <Link href='/api/auth/google/api'>Connect to Google Calendar</Link>
    </AuthenticatedLayout>
  );
};

export default DashboardPage;
