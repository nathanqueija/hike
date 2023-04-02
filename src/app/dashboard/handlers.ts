import { setUser, slice } from '@/app/auth/state';
import { registerEvent } from '@/app/events';

registerEvent('dashboard/route-requested', (payload) => {
  slice.setState((state) => setUser(state, payload.user));
});
