import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="login" state={{ from: location }}></Navigate>
  );
};

export default RequireAuth;
