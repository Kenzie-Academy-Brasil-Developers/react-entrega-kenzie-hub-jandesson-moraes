import { Navigate } from "react-router-dom";
import { StyleHeadline, StyleTitle2 } from "../../styles/typografy";
import Logo from "../../assets/Logo.png";
import { TiPlus } from "react-icons/ti";
import { StyleHeaderDashobard } from "../../styles/header";
import { ToastContainer } from "react-toastify";
import { StyleDashboardSection } from "../../styles/sections";
import { api } from "../../services";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/userContext";
import { TechContext } from "../../providers/techContext";
import { CardTecnologies } from "../../components/TecnologUser";
import { TechCreateForm } from "../../components/Input/DashboardForm";
import { TechUpdateForm } from "../../components/Input/TechUpdateForm";

export const PageDashboard = () => {
  const { user, loading, logout } = useContext(UserContext);
  const {
    tech,
    editTech,
    setEditTech,
    isCreateTechModal,
    setIsCreateTechModal,
  } = useContext(TechContext);

  useEffect(() => {
    const getUsers = async () => {
      const token = localStorage.getItem("@TOKEN");
      try {
        const { data } = await api.get("/users", token);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {editTech ? <TechUpdateForm /> : null}
      {isCreateTechModal ? <TechCreateForm /> : null}
      <ToastContainer />
      <StyleHeaderDashobard>
        <div>
          <img src={Logo} alt="" />
          <button type="submit" onClick={logout}>
            Sair
          </button>
        </div>
      </StyleHeaderDashobard>
      <StyleDashboardSection>
        <nav>
          <div>
            <StyleTitle2>Olá, {user.name}</StyleTitle2>
            <p>{user.course_module}</p>
          </div>
        </nav>
        <section className="section2">
            <>
              <div>
                <StyleTitle2>Tecnologias</StyleTitle2>
                <button onClick={() => setIsCreateTechModal(true)}>
                  <TiPlus color="white" />
                </button>
              </div>
              <ul>
                {tech.map((profile) => (
                  <CardTecnologies
                    key={profile.id}
                    profile={profile}
                    onClick={() => setEditTech(profile)}
                  />
                ))}
              </ul>
            </>
        </section>
      </StyleDashboardSection>
    </>
  );
};
