import { Navigate, Outlet } from 'react-router-dom';

function RequireAuth() {
  if (false) return <Navigate to="/sign-in" />;
  return <Outlet />;
}

export default RequireAuth;