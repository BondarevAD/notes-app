import { Navigate } from "react-router-dom";
import { useUserContext } from "./UserContextProvider";

export const ProtectedRoute = ({ children }) => {
  const {
    user: { email },
  } = useUserContext();
  if (!email) {
    return <Navigate to="/login" />;
  }
  return children;
};
