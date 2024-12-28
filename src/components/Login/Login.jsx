import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState(null);
  console.log('🚀 ~ Login ~ user:', user);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const gitHubAuthProvider = new GithubAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loginUser = result.user;
        setUser(loginUser);
        // console.log('🚀 ~ handleGoogleLogin ~ user:', loginUser);
      })
      .catch((error) => {
        console.log('🚀 ~ handleGoogleLogin ~ error:', error);
      });
  };

  const hanleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log('🚀 ~ hanleSignOut ~ result:', result);
        setUser(null);
      })
      .catch((error) => {
        console.log('🚀 ~ hanleSignOut ~ error:', error);
      });
  };
  const handleGithub = () => {
    signInWithPopup(auth, gitHubAuthProvider)
      .then((result) => {
        console.log('🚀 ~ handleGithub ~ result:', result.user);
        setUser(result?.user);
      })
      .catch((error) => {
        console.log('🚀 ~ handleGithub ~ error:', error);
      });
  };
  return (
    <div>
      {user ? (
        <>
          <button onClick={hanleSignOut}>SignOut</button>
          <button onClick={hanleSignOut}>SignOut Github</button>
        </>
      ) : (
        <>
          <button onClick={handleGoogleLogin}>Google Login</button>
          <button onClick={handleGithub}>Github Login</button>
        </>
      )}
      {user && (
        <>
          <p>user info</p>
          {user?.email}
          {user?.displayName}
        </>
      )}
    </div>
  );
};

export default Login;
