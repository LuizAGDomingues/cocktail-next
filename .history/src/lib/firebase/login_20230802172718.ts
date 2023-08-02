import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function createUser(email: string, password: string): Promise<string | [Error, string, string]> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
    return user.uid;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [errorCode, errorMessage];
  }
}

export async function connectUser(email: string, password: string): Promise<string | [Error, string, string]> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user.uid;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [errorCode, errorMessage];
  }
}

export async function disconnectUser(): Promise<void | [Error, string, string]> {
  try {
    const response = await signOut(auth);
    return response;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [errorCode, errorMessage];
  }
}

export async function googleConnectUser(): Promise<string | [Error, string, string]> {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    return user.uid;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [errorCode, errorMessage];
  }
}