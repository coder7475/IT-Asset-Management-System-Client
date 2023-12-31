import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import useSecureAxios from './../../../hooks/useSecureAxios';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useSecureAxios();
  // obserber of user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user in the auth state changed", currentUser);
      setUser(currentUser);
      // console.log(currentUser);
      setLoading(false);
      const userEmail = currentUser?.email || user?.email;
      const payload = { email: userEmail };

      if (currentUser) {
        // User is signed in

        axiosSecure.post("/create-token", payload).then(() => {
          // console.log("Token response: ", res.data);
        });
      } else {
        // User is signed out
        axiosSecure.get("/clear-token").then(() => {
          // cleared token
        })
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosSecure, user?.email]);

  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // sign up using firebase
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    loading,
    googleSignIn,
    createUser,
    logOut,
    logIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
