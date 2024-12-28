import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
      <Link to="/">home </Link>
      <Link to="/login">Login </Link>
    </div>
  );
};

export default Home;
