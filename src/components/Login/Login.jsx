import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState(null);
  console.log('🚀 ~ Login ~ user:', user);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
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
  return (
    <div>
      {user ? (
        <button onClick={hanleSignOut}>SignOut</button>
      ) : (
        <button onClick={handleGoogleLogin}>Google Login</button>
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
