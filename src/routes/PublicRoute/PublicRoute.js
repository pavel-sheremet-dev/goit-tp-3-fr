import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { routes } from 'routes';
const { signUp } = routes.routes;

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = signUp.absolutePath,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
