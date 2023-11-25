import auth from '../firebase/firebase.config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  }

  const authInfo = {
    user,
    loading,
    googleSignIn
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;