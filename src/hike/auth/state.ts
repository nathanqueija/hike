import produce from 'immer';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { State, User } from '@/hike/auth/types';
import { Status } from '@/hike/types';

export const slice = create<State>()(
  devtools(
    (_set, _get) => ({
      user: null,
      signIn: { status: 'idle' },
      signOut: { status: 'idle' },
    }),
    { name: 'auth' }
  )
);

export const setUser = (state: State, user: User | null) =>
  produce(state, (draft: State) => {
    draft.user = user;
  });

export const setSignInStatus = (state: State, status: Status) =>
  produce(state, (draft: State) => {
    draft.signIn.status = status;
  });

export const setSignOutStatus = (state: State, status: Status) =>
  produce(state, (draft: State) => {
    draft.signIn.status = status;
  });
