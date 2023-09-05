import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // Initialize your state as an object with a username property
  const [state, setState] = useState({ username: "michaeljordan" });

  const changeUsername = (username) => {
    // Update only the username property, preserving the rest of the state
    setState({ ...state, username });
  };

  

  return (
    <AuthContext.Provider value={{
        state,
        changeUsername
    }}>
      {/* Wrap the AuthContext.Provider around children */}
      {children}
    </AuthContext.Provider>
  );
}
