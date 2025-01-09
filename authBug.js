const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/manage-users
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// unsubscribe from onAuthStateChanged to prevent memory leaks
// unsubscribe();