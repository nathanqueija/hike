import { signInFx, signOutFx } from '@/app/auth/fx';
import {
  setSignInStatus,
  setSignOutStatus,
  setUser,
  slice,
} from '@/app/auth/state';
import { registerEvent } from '@/app/events';
import { navigateFx } from '@/app/router';

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
