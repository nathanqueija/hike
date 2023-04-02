import { slice } from '@/app/auth/state';

export const useUser = () => slice((state) => state.user);
