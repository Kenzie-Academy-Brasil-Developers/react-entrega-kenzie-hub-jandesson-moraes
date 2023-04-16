import { useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../services";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const autoLogin = async () => {
        try {
          const { data } = await api.get("/users");

          api.defaults.headers.common.authorization = `Bearer${token}`;

          setUser(data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      };
      autoLogin();
    }
  }, []);

  const signIn = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      const { user: useResponse, token } = response.data;

      api.defaults.headers.common.authorization = `Bearer${token}`;

      localStorage.setItem("@TOKEN", token);
      setUser(useResponse);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
    toast.success("Usuário deslogado");
  };

  return (
    <>
      <ToastContainer />
      <UserContext.Provider
        value={{ signIn, user, setUser, loading, setLoading, logout }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
