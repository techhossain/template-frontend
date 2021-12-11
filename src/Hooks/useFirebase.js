import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react"
import initAuthentication from "../Firebase/Firebase.init";

initAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [successMsg, setSuccessMsg] = useState('');
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  // Google Login
  const googleSignIn = (navigate, redirect_uri) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const email = user.email;
        const name = user.displayName;
        setUser(user);
        console.log(user, email, name);
        saveUserToDb(email, name, "PUT");
        navigate(redirect_uri);
      }).catch((error) => {
        // Handle Errors here.
        console.log(error.message);
      }).finally(() => { setIsLoading(false) });

  }

  // Registration with the email & Password
  const formRegister = (email, password, name, navigate) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const newUser = { email, displayName: name }
        setUser(newUser);
        // save to db
        saveUserToDb(email, name, "POST");

        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error.code);
      });
  }

  const saveUserToDb = (email, displayName, method) => {

    console.log(email, displayName, method);

    const user = { email, displayName }

    fetch('http://localhost:5000/users', {
      method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then((data) => {
        const msg = "User created Successfully";
        setSuccessMsg(msg);
      });
  }


  // Login with the email & Password
  const formLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Load Admin
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))

  }, [user.email]);


  // Firebase state change schedulers
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)

      } else {
        setUser({})
      }
      setIsLoading(false);
    });
  }, []);

  // Login out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setUser({});
    }).catch((error) => {
      console.log(error.message)
    }).finally(() => { setIsLoading(false) });
  }
  return { user, setUser, error, setError, logOut, formRegister, formLogin, isLoading, setIsLoading, googleSignIn, successMsg, admin }
}

export default useFirebase;