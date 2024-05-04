import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { createContext } from "react";
import { Bounce, toast } from "react-toastify";


const firebaseConfig = {
    apiKey: "AIzaSyAFlKljv_wsuqp96vFnR1itdIW5B4AOpe0",
    authDomain: "netflix-clone-6e388.firebaseapp.com",
    projectId: "netflix-clone-6e388",
    storageBucket: "netflix-clone-6e388.appspot.com",
    messagingSenderId: "343380541093",
    appId: "1:343380541093:web:8d5459148ec6baa1d4974c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }

const FirebaseContext = createContext();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {

    const signUp = async (name, email, password) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, 'user'), {
                uid: user.uid,
                name,
                authProvider: 'local',
                email,
            });
        } catch (error) {
            toast.error(error.code.split('/')[1].split('-').join(" "), {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);

        } catch (error) {
            toast.error('invalid credential', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    return (
        <FirebaseContext.Provider value={{ signUp, login, logout }}>
            {children}
        </FirebaseContext.Provider>
    )
}

