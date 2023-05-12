import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loggingUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false);
    })
    return () => {
        return unsubscribe;
    }
  }, [])

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  const updateUser = (name, url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: url
    })
  }  

  const authInfo = {
    user,
    loading,
    createUser,
    loggingUser,
    logoutUser,
    updateUser
  }
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
