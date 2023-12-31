import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider,   sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from '../firebase';

export const authContext = createContext();


export const useAuth = () => {
    const context = useContext(authContext);
    if (!context)
        throw new Error('useAuth debe estar dentro del proveedor AuthProvider');
    return context;
};


export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);






    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);


    const signup = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);


    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);


    const loginWithGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };







    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();

    }, []);


    const logout = () => signOut(auth);






    return (<authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle,         resetPassword,
    }}>
        {children}
    </authContext.Provider>
    );
}