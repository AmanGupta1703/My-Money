import { useState } from 'react';

// firestore
import { projectAuth } from '../firebase/config';

// context
import { useAuthContext } from './useAuthContext';

function useSignup() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  async function signup(email, password, displayName) {
    setError(null);
    setIsPending(true);

    try {
      // signup the user (with email and password)
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error('Could not complete signup');
      }

      // add `displayName` to the `user` object
      await res.user.updateProfile({ displayName });

      // add to `user` property in context
      dispatch({ type: 'LOGIN', payload: res.user });

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
