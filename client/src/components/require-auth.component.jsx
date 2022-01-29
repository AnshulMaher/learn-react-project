import { Navigate, Outlet } from 'react-router-dom';

function RequireAuth() {
  const userLoggedIn = !!localStorage.getItem('access_token');
  if (!userLoggedIn) return <Navigate to="/sign-in" />;
  return <Outlet />;
}

export default RequireAuth;