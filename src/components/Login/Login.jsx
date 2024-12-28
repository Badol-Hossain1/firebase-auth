import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('🚀 ~ handleGoogleLogin ~ user:', user);
      })
      .catch((error) => {
        console.log('🚀 ~ handleGoogleLogin ~ error:', error);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleLogin}>Google Login</button>
    </div>
  );
};

export default Login;
