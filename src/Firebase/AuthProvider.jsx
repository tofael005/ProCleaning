import { createContext, useEffect, useState, useContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.config";

const CreateAuth = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authData = {
        user,
        loading,
        createUser,
        signIn
    }

    return <CreateAuth.Provider value={authData}>
        {children}
    </CreateAuth.Provider>
}

const useAuth = () => {
    return useContext(CreateAuth);
}

export { AuthProvider, useAuth}