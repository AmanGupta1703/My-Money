const { useState } = require('react');

// firestore
import { projectAuth } from '../firebase/config';

function useSignup() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  async function signup(email, password, displayName) {
    setError(null);
    setIsPending(true);

    try {
      // signup the user (with email and password)
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(res.user); // created user

      if (!res) {
        throw new Error('Could not complete signup');
      }

      // add `displayName` to the `user` object
      await res.user.updateProfile({ displayName });

      setError(null);
      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  }

  return { error, isPending, signup };
}

export { useSignup };
