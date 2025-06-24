import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { User } from '../types/user';

export async function signInWithEmailPassword(
  email: string,
  password: string,
): Promise<User> {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    const userUid = userCredential.user.uid;
    return getUser(userUid);
  } catch (error: any) {
    if (error.code === 'auth/invalid-email') {
      throw new Error('Invalid email');
    }
    if (error.code === 'auth/user-not-found') {
      throw new Error('User not found');
    }
    if (error.code === 'auth/wrong-password') {
      throw new Error('Wrong password');
    }
    throw new Error('An error occurred');
  }
}

export async function signUpWithEmailPassword(
  username: string,
  email: string,
  password: string,
): Promise<User> {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const userUid = userCredential.user.uid;
    
    await firestore().collection('users').doc(userUid).set({
      uid: userUid,
      username,
      email,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    
    return {
      uid: userUid,
      username,
      email,
      profilePicturePath: undefined,
      createdAt: new Date(),
    } as User;
  } catch (error: any) {
    console.log(error);
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('Email already in use');
    }
    if (error.code === 'auth/invalid-email') {
      throw new Error('Invalid email');
    }
    if (error.code === 'auth/weak-password') {
      throw new Error('Weak password');
    }
    throw new Error('An error occurred');
  }
}

export async function getUser(uid: string): Promise<User> {
  try {
    const doc = await firestore().collection('users').doc(uid).get();
    if (doc.exists()) {
      const data = doc.data();
      return {
        uid: data?.uid || '',
        username: data?.username || '',
        email: data?.email || '',
        profilePicturePath: data?.profilePicturePath || undefined,
        createdAt: data?.createdAt?.toDate() || new Date(),
      } as User;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
}
