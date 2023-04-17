import { Navigate } from "react-router-dom";
import { StyleTitle2, StyleTitle3 } from "../../styles/typografy";
import Logo from "../../assets/Logo.png";
import { TiPlus } from "react-icons/ti";
import { StyleHeaderDashobard } from "../../styles/header";
import { ToastContainer } from "react-toastify";
import { StyleDashboardSection } from "../../styles/dashbard";
import { api } from "../../services";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/userContext";
import { TechContext } from "../../providers/techContext";
import { CardTecnologies } from "../../components/TecnologUser";
import { TechCreateForm } from "../../components/Input/DashboardForm";
import { TechUpdateForm } from "../../components/Input/TechUpdateForm";
import { StyleHeadline } from "../../styles/typografy";

export const PageDashboard = () => {
  const { user, loading, logout } = useContext(UserContext);
  const {
    tech,
    editTech,
    setEditTech,
    isCreateTechModal,
    setIsCreateTechModal,
    edintingTech,
    setEditingTech,
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
      {edintingTech ? <TechUpdateForm /> : null}
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
            <StyleHeadline>{user.course_module}</StyleHeadline>
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
                    setEditingTech={setEditingTech}
                  />
                ))}
              </ul>
            </>
        </section>
      </StyleDashboardSection>
    </>
  );
};
