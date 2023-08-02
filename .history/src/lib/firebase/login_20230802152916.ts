import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { app } from "./firebase";
import Error from "next/error";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function createUser(email: string, password: string): Promise<User | [Error, string, string]> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [new Error, errorCode, errorMessage];
  }
}

export async function connectUser(email: string, password: string): Promise<User | [Error, string, string]> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [new Error, errorCode, errorMessage];
  }
}

export async function disconnectUser(): Promise<void | [Error, string, string]> {
  try {
    const response = await signOut(auth);
    return response;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [new Error, errorCode, errorMessage];
  }
}

export async function googleConnectUser(): Promise<[string, User] | [Error, string, string]> {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    return [token!, user];
  } catch (error: ) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [new Error, errorCode, errorMessage];
  }
}