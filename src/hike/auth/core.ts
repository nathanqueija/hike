import { signInWithPopup } from 'firebase/auth';
import { addDoc, doc, updateDoc } from 'firebase/firestore';

import { User } from '@/hike/auth';
import { auth, authProviders, usersCollection } from '@/hike/firebase';

export const upsertUser = async (user: User) => {
  if (user.id) {
    const userRef = doc(usersCollection, user.id);
    await updateDoc(userRef, user);
  } else {
    await addDoc(usersCollection, user);
  }

  return user;
};

export const signIn = async () => {
  const userResponse = await signInWithPopup(auth, authProviders.google);

  return await upsertUser({
    id: userResponse.user?.uid,
    displayName: userResponse.user?.displayName,
    email: userResponse.user?.email,
    photoURL: userResponse.user?.photoURL,
  });
};

export const signOut = () => auth.signOut();
