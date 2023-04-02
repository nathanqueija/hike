import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from 'firebase/firestore';

import { User } from '@/hike/auth';
import { firebaseConfig } from '@/hike/env';
import { dispatch } from '@/hike/events';

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export const authProviders = {
  google: googleAuthProvider,
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const init = () => {
  // Adding listener to auth state changes. It will dispatch an event to the auth store.
  onAuthStateChanged(auth, (user) =>
    dispatch('auth/auth-changed', {
      user: user
        ? {
            id: user?.uid,
            displayName: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
            lastLogin: user.metadata.lastSignInTime,
            createdAt: user.metadata.creationTime,
          }
        : null,
    })
  );
};

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

export const usersCollection = createCollection<User>('users');
