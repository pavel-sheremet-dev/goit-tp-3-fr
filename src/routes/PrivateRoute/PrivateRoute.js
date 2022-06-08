import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { routes } from 'routes';
const { signUp } = routes.routes;
export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={signUp.absolutePath} />;
}
