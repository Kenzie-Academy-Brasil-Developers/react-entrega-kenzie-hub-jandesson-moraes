import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { Inputs } from "../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { StyleButton } from "../../styles/button";
import { StyleHeaderLogin } from "../../styles/header";
import { StyleLogin } from "../../styles/login";
import { useContext, useState } from "react";
import { StyleTitle1 } from "../../styles/typografy";
import { schemaLogin } from "./validatorLogin";
import { api } from "../../services";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../providers/userContext";

export const PageLogin = () => {
  const { signIn, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaLogin),
  });

  // const loginForm = async (data) => {
  //   try {
  //     setLoading(true)
  //     const response = await api.post("/sessions", data);
  //     setUser(response.data.user);
  //     localStorage.setItem("@token", response.data.token);
  //     toast.success(`Usuario ${response.data.user.name} logado com sucesso!`);
  //     setTimeout(() => {
  //       navegate("/dashboard/:id");
  //     }, 4990);
  //   } catch (error) {
  //     toast.error("Ops! Algo deu errado");
  //   } finally {
  //     setLoading(false)
  //   }
  // };

  return (
    <>
      <ToastContainer />
      <StyleHeaderLogin>
        <img src={Logo} alt="Kenzie Hub" />
      </StyleHeaderLogin>
      <StyleLogin>
        <StyleTitle1 onClick={toast}>Login</StyleTitle1>
        <form onSubmit={handleSubmit(signIn)}>
          <Inputs
            label="Email"
            id="email"
            type="email"
            placeholder="Digite o seu email"
            register={register("email")}
            error={errors.email}
          />

          <Inputs
            label="Senha"
            id="password"
            type="password"
            placeholder="Digite sua senha"
            register={register("password")}
            error={errors.password}
          />

          <StyleButton type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
            </StyleButton>
          <div>
            <span>Ainda não possui uma conta?</span>
            <Link to="/register">Cadastre-se</Link>
          </div>
        </form>
      </StyleLogin>
    </>
  );
};
