import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { Inputs } from "../../components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { StyleButton } from "../../styles/button";
import { StyleHeaderLogin } from "../../styles/header";
import { StyleLogin } from "../../styles/login";
import { useState } from "react";
import { StyleTitle1 } from "../../styles/typografy";
import { schemaLogin } from "./validatorLogin";
import { api } from "../../services";
import { toast, ToastContainer } from "react-toastify";

export const PageLogin = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState([]);

  const navegate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaLogin),
  });

  const loginForm = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      toast.success(`Usuario ${response.data.user.name} logado com sucesso!`);
      setTimeout(() => {
        navegate("/dashboard");
      }, 4990);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const submit = (data) => {
    loginForm(data);
  };

  return (
    <>
      <ToastContainer />
      <StyleHeaderLogin>
        <img src={Logo} alt="Kenzie Hub" />
      </StyleHeaderLogin>
      <StyleLogin>
        <StyleTitle1 onClick={toast}>Login</StyleTitle1>
        <form onSubmit={handleSubmit(submit)}>
          <Inputs
            label="Email"
            id="email"
            type="text"
            placeholder="Digite o seu email"
            error={errors.email?.message}
            {...register("email")}
          />

          <Inputs
            label="Senha"
            id="password"
            type="password"
            placeholder="Digite sua senha"
            rror={errors.password?.message}
            {...register("password")}
          />

          <StyleButton type="submit">Entrar</StyleButton>
          <div>
            <span>Ainda não possui uma conta?</span>
            <Link to="/register">Cadastre-se</Link>
          </div>
        </form>
      </StyleLogin>
    </>
  );
};
