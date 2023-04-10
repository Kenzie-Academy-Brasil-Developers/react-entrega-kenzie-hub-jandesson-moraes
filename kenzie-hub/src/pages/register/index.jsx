import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "../../components/input";
import { StyleFormRegister } from "../../styles/formRegister";
import Logo from "../../assets/Logo.png";
import { StyleHeadline, StyleTitle1 } from "../../styles/typografy";
import { StyleButton } from "../../styles/button";
import { StyleSelect } from "../../styles/select";
import { StyleHeaderRegister } from "../../styles/header";
import { schemaRegister } from "./validatorRegister";
import { useState } from "react";
import { api } from "../../services";
import { toast, ToastContainer } from "react-toastify";

export const RegisterPage = () => {
  const [user, setUser] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaRegister),
  });

  const navegate = useNavigate();

  const submit = async (data) => {
    try {
      const response = await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      setUser(response.data);
      navegate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <>
      <ToastContainer />
      <StyleHeaderRegister>
        <img src={Logo} alt="Kenzie Hub" />
        <Link to="/">Voltar</Link>
      </StyleHeaderRegister>
      <StyleFormRegister>
        <StyleTitle1>Crie sua conta</StyleTitle1>
        <StyleHeadline>Rapido e grátis, vamos nessa</StyleHeadline>
        <form onSubmit={handleSubmit(submit)}>
          <Inputs
            id="name"
            type="text"
            label="Nome"
            placeholder="Digite aqui seu nome"
            error={errors.name?.message}
            {...register("name")}
          />

          <Inputs
            id="email"
            type="text"
            label="Email"
            placeholder="Digite aqui seu email"
            error={errors.email?.message}
            {...register("email")}
          />

          <Inputs
            id="password"
            type="password"
            label="Senha"
            placeholder="Digite aqui sua senha"
            error={errors.password?.message}
            {...register("password")}></Inputs>

          <Inputs
            id="passwordConfirm"
            type="password"
            label="Confirmar Senha"
            placeholder="Digite novamente sua senha"
            error={errors.passwordConfirm?.message}
            {...register("passwordConfirm")}
          />

          <Inputs
            id="bio"
            type="text"
            label="Bio"
            placeholder="Fale sobre você"
            error={errors.bio?.message}
            {...register("bio")}
          />

          <Inputs
            id="contact"
            type="text"
            label="Contato"
            placeholder="Opção de contato"
            error={errors.contact?.message}
            {...register("contact")}
          />

          <label htmlFor="course_module">Selecionar Modulo</label>

          <StyleSelect id="course_module" {...register("course_module")}>
            <option value="m1">Selecione o módulo</option>
            <option value="m1">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="m2">Segundo módulo (Frontend Avançado)</option>
            <option value="m3">Terceiro módulo (Introdução ao Backend)</option>
            <option value="m4">Quarto módulo (Backend Avançado)</option>
          </StyleSelect>

          <StyleButton type="submit">Cadastrar</StyleButton>
        </form>
      </StyleFormRegister>
    </>
  );
};
