import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be within a AuthContextProvider.');
  }

  return context;
}

export { useAuthContext };
