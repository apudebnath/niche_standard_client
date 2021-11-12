import { useEffect, useState } from "react";
import initAuthentication from "../Pages/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState();


    const auth = getAuth();

    // Create User with Email and Password
    const registerUserWithEmail = (email, password, name, history) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then( result => {
           const newUser = {email, displayName:name};
           setUser(newUser);
           saveUser(email, name)
           // send name to firebase-
           updateProfile(auth.currentUser, {
               displayName: name
           })
           .then(() => {

           })
           .catch(() => {
               
           })
           history.replace('/');
           setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setLoading(false));
    }

    // SignIN user with Email and Password
    const loginWithEmail = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            setUser(user);
            const destination = location?.state?.from || "/";
            history.push(destination);
            setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message);
             
        })
        .finally(() => setLoading(false));
    }
    //Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user);

            } else {
                setUser({})
            }
            setLoading(false);
        });
        return ()=> unSubscribe;
    }, []);
    
//Find Admin
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])

//Save user in Database
    const saveUser = (email, displayName) => {
        const user = {email, displayName};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {

        })
    }

    // Logout User
    const logOutUser = () => {
        setLoading(true);
        signOut(auth)
        .then(() => {

          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setLoading(false));
    }

    return {
        user,
        admin,
        loading,
        authError,
        registerUserWithEmail,
        loginWithEmail,
        logOutUser,
    }
};
 
export default useFirebase;