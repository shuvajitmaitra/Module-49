import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
  const [userData, setUserData] = useState(null);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        console.log(user);
        setUserData(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("error message: ", errorMessage);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(setUserData(null))
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };

  // handle github sign in

  const handleGItHubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUserData(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      {userData ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Google Login</button>
          <button onClick={handleGItHubSignIn}>GitHub Login</button>
        </div>
      )}
      {userData && (
        <div>
          <img src={userData.photoURL} alt="" />
          <h2>Name: {userData.displayName} </h2>
          <h4>Email: {userData.email} </h4>
        </div>
      )}
    </div>
  );
};

export default Login;
