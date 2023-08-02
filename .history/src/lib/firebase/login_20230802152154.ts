import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, User, AuthError } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function createUser(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    return user
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [Error, errorCode, errorMessage]
  });
}

export async function connectUser(email: string, password: string) {
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    return user
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [Error, errorCode, errorMessage]
  });
}

export async function disconnectUser() {
  await signOut(auth).then((response) => {
  return response
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  return [Error, errorCode, errorMessage]
});
}

export async function googleConnectUser(): Promise<[]> {
  await signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential!.accessToken;
    const user = result.user;
    return [token, user]
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [Error, errorCode, errorMessage]
  });
}

export async function googleConnectUser(): Promise<[string, User] | [Error, string, string]> {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    return [token!, user]; // Using non-null assertion operator (!) since token and user should be defined here.
  } catch (error: AuthError) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [error, errorCode, errorMessage];
  }
}