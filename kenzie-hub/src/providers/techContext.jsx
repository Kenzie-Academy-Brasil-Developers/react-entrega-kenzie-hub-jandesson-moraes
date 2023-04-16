import { createContext, useEffect, useState } from "react";
import { api } from "../services";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [tech, setTech] = useState([]);
  const [editTech, setEditTech] = useState(true);
  const [createTech, setCreateTech] = useState(null);
  const [isCreateTechModal, setIsCreateTechModal] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const dashBoardForm = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setTech(response.data.techs);
        } catch (error) {
          console.log(error);
        }
      };
      dashBoardForm();
    }
  }, []);

  const techCreate = async (data) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia criada com sucesso!");
      setTech([...tech, response.data]);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado!");
    }
  };

  const updateTech = async (data, techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.put(`/users/techs/${techId}}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia atualizada com sucesso!");

      const newUpdate = tech.map((techs) => {
        if (techId === techs.id) {
          return { ...techs, ...data };
        } else {
          return techs;
        }
      });
      setTech(newUpdate);
    } catch (error) {
      console.log(error);
      toast.error("Ops! algo deu errado!");
    }
  };

  const removeTech = async (techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.delete(`/users/techs/${techId}}`, {
        headers: {
          Authorization: `Bearer${token}`,
        },
      });

      toast.success("Tecnologia removida com sucesso!");
      const newTech = tech.filter((techs) => techs.id !== techId);

      setTech(newTech);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        tech,
        setTech,
        createTech,
        techCreate,
        setCreateTech,
        editTech,
        setEditTech,
        updateTech,
        removeTech,
        isCreateTechModal,
        setIsCreateTechModal,
      }}>
      {children}
    </TechContext.Provider>
  );
};
