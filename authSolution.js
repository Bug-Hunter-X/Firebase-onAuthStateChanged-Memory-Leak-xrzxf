import { onAuthStateChanged, getAuth } from "firebase/auth";

const auth = getAuth();
let unsubscribe;

const userStatus = (user) => {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user.uid)
  } else {
    // User is signed out
    console.log('User is signed out');
  }
};

const setupAuthListener = () => {
  unsubscribe = onAuthStateChanged(auth, userStatus);
};

const cleanupAuthListener = () => {
  if (unsubscribe) {
    unsubscribe();
    console.log('Unsubscribed from onAuthStateChanged');
  }
};

export { setupAuthListener, cleanupAuthListener };