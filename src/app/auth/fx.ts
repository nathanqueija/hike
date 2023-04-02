import { signIn, signOut } from '@/app/auth';
import { dispatch } from '@/app/events';

export const signOutFx = async () => {
  dispatch('auth/signout-status-changed', { status: 'pending' });
  try {
    await signOut();

    dispatch('auth/signout-status-changed', { status: 'done' });
  } catch {
    dispatch('auth/signout-status-changed', { status: 'fail' });
  }
};

export const signInFx = async () => {
  dispatch('auth/signin-status-changed', { status: 'pending' });
  try {
    await signIn();

    dispatch('auth/signin-status-changed', { status: 'done' });
  } catch {
    dispatch('auth/signin-status-changed', { status: 'fail' });
  }
};
