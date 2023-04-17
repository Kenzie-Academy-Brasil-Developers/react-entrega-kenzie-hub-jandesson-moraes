import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/userContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return <div>Carregando...</div>;
    }

    if (!user) {
      navigate("/");
    }
  }, []);

  return user ? <Outlet /> : <Navigate to="/" />;
};
