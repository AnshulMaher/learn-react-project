import { Navigate, Outlet } from 'react-router-dom';

function RequireAuth() {
  const userLoggedIn = false;
  if (!userLoggedIn) return <Navigate to="/sign-in" />;
  return <Outlet />;
}

export default RequireAuth;