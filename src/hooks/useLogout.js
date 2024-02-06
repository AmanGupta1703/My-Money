import { useState } from 'react';

// firbase
import { projectAuth } from '../firebase/config';

// auth context hook
import { useAuthContext } from './useAuthContext';

function useLogout() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  async function logout() {
    try {
      setError(null);
      setIsPending(true);

      await projectAuth.signOut();

      // dispatch a logout action
      dispatch({ type: 'LOGOUT' });

      setError(null);
      setIsPending(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  }

  return { error, isPending, logout };
}

export { useLogout };
