import { setUser } from '@/app/auth/state';
import { Event, EventType, State } from '@/app/auth/types';

export const reducer = (state: State, event: Event) => {
  switch (event.type) {
    case EventType.AUTH_STATE_CHANGED:
      return setUser(state, event.payload);

    case EventType.LOGOUT_REQUESTED:
      return setUser(state, null);
  }
};
