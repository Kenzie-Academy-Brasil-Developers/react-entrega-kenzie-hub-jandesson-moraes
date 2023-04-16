import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "../../components/Input";
import { StyleFormRegister } from "../../styles/formRegister";
import Logo from "../../assets/Logo.png";
import { StyleHeadline, StyleTitle1 } from "../../styles/typografy";
import { StyleButton } from "../../styles/button";
import { StyleHeaderRegister } from "../../styles/header";
import { api } from "../../services";
import { toast, ToastContainer } from "react-toastify";
import { schema } from "./validatorRegister";
import { Select } from "../../components/Select";
import { useState } from "react";

export const RegisterPage = () => {
  const navegate = useNavigate();
  const [loading, setloading] = useState(false)
  
  const {register, handleSubmit, formState: { errors },
  } = useForm({
    resolver: zodResolver(schema)
  });

  const userRegister = async (formData) => {
    try {
      setloading(true)
      const response = await api.post("/users", formData);
      console.log(response.data)
      toast.success("Conta criada com sucesso!");

      setTimeout(() => {        
        navegate("/");
      },3990)

    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setloading(false)
    }
  };

  const submit = (formData) => {
    userRegister(formData)
  }

  return (
    <>
      <ToastContainer 
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <StyleHeaderRegister>
        <img src={Logo} alt="Kenzie Hub" />
        <Link to="/">Voltar</Link>
      </StyleHeaderRegister>
      <StyleFormRegister>
        <StyleTitle1>Crie sua conta</StyleTitle1>
        <StyleHeadline>Rapido e grátis, vamos nessa</StyleHeadline>
        <form onSubmit={handleSubmit(submit)}>

            <Inputs type="text" id="name" label="Nome" placeholder="Digite aqui seu nome" register={register("name")} error={errors.name}/>
            <Inputs type="email" id="email" label="Email" placeholder="Digite aqui seu email" register={register("email")} error={errors.email}/>
            <Inputs type="password" id="password" label="Senha" placeholder="Digite aqui sua senha" register={register("password")} error={errors.password}/>
            <Inputs type="password" id="confirm" label="Confirmar Senha"placeholder="Digite novamente sua senha" register={register("confirm")} error={errors.confirm} />
            <Inputs type="text" id="bio" label="Bio" placeholder="Fale sobre você" register={register("bio")} error={errors.bio} />
            <Inputs type="text" id="contact" label="Contato" placeholder="Opção de contato" register={register("contact")} error={errors.contact}  />

            <label htmlFor="">Selecionar Modulo</label>
            <Select className="selectStyled" id="course_module" register={register("course_module")} error={errors.course_module} >
                <option value="">Selecionar Modulo</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </Select>

          <StyleButton type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </StyleButton>
        </form>
      </StyleFormRegister>
    </>
  );
};
