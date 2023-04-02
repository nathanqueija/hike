import { slice } from '@/hike/auth/state';

export const useUser = () => slice((state) => state.user);
