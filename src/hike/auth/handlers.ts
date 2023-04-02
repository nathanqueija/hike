import { signInFx, signOutFx } from '@/hike/auth/fx';
import {
  setSignInStatus,
  setSignOutStatus,
  setUser,
  slice,
} from '@/hike/auth/state';
import { registerEvent } from '@/hike/events';
import { navigateFx } from '@/hike/router';

registerEvent('auth/auth-changed', (payload) => {
  const currentUser = slice.getState().user;

  if (currentUser?.id !== payload.user?.id) {
    if (!payload.user) navigateFx('/');
    slice.setState((state) => setUser(state, payload.user));
  }
});

registerEvent('auth/logout-requested', () => {
  signOutFx();
});

registerEvent('auth/signin-requested', () => {
  signInFx();
});

registerEvent('auth/signout-status-changed', (payload) => {
  slice.setState((state) => setSignOutStatus(state, payload.status));
});

registerEvent('auth/signin-status-changed', (payload) => {
  slice.setState((state) => setSignInStatus(state, payload.status));

  if (payload.status === 'done') navigateFx('/dashboard');
});
