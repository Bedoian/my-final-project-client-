import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)
const auth=getAuth(app)
const AuthProvider = ({ children }) => {
    const[user,setUser]=useState(null)
    const[loading,setloading]=useState(true)
    const googleProvider=new GoogleAuthProvider()

    const googleSignIn=()=>{
        setloading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // create user with email and password
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in with email and password
    const signIn=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setloading(true)
        return signOut(auth)
    }
    // add photo and name
    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
        })
    }
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('currentuser',currentUser);
            setloading(false)
        })
        return ()=>{
            return unsubscribe
        }
    },[])
    const authInfo={
        user,
        loading,
        googleSignIn,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;