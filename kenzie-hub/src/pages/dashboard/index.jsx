import { useNavigate, useParams } from "react-router-dom";
import { StyleHeadline, StyleTitle2 } from "../../styles/typografy";
import Logo from "../../assets/Logo.png";
import { StyleHeaderDashobard } from "../../styles/header";
import { toast } from "react-toastify";
import { useState } from "react";
import { StyleDashboardSection } from "../../styles/sections";

export const PageDashboard = () => {
  const { name, course_module } = useParams();
  const [user, setUser] = useState(null);

  const navegate = useNavigate();

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navegate("/");
    toast.success("Usuário deslogado");
  };

  return (
    <>
      <StyleHeaderDashobard>
        <nav>
          <img src={Logo} alt="" />
          <button type="submit" onClick={() => logout()}>
            Sair
          </button>
        </nav>
      </StyleHeaderDashobard>
      <StyleDashboardSection>
        <section className="section1">
          <div>
            <StyleTitle2>Olá, {name}</StyleTitle2>
            <p>{course_module}</p>
          </div>
        </section>
        <section className="section2">
          <div>
            <StyleTitle2>Que pena! Estamos em desenvolvimento :( </StyleTitle2>
            <StyleHeadline>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </StyleHeadline>
          </div>
        </section>
      </StyleDashboardSection>
    </>
  );
};
