/** @format */

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";

export const authContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      const loggedUser = { email: currentUser?.email };
      if (currentUser) {
        console.log("user ace", currentUser);
        setUser(currentUser);
      try {
          const res = await axios.post('https://restaurant-ec162.web.app/jwt', loggedUser, { withCredentials: true });
          console.log('token', res.data.token); // Assuming the token is in res.data.token
        } catch (error) {
          console.error('Error fetching token:', error.response ? error.response.data : error.message);
        }
      } else {
        try {
          await axios.post('https://restaurant-ec162.web.app/logout', {}, { withCredentials: true });
          console.log('User logged out');
        } catch (error) {
          console.error('Error during logout:', error.response ? error.response.data : error.message);
        }
        setUser(null);
      }
      setLoading(false);
    });   
       

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loading,
    signIn,
    logOut,
    signInWithGoogle,
  };

  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
