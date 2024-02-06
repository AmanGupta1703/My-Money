import { useReducer, createContext } from 'react';

function authReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider, authReducer };