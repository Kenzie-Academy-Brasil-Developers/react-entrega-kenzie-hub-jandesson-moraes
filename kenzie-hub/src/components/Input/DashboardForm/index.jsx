import { useForm } from "react-hook-form";
import { Inputs } from "..";
import { useContext } from "react";
import { TechContext } from "../../../providers/techContext";
import { Select } from "../../Select";
import { StyleModalCreate } from "../../../styles/modalCreateTech";
import { StyleButton } from "../../../styles/button";
import { StyleTitle3 } from "../../../styles/typografy";

export const TechCreateForm = () => {
  const { techCreate, setIsCreateTechModal } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    techCreate(data);
  };

  return (
    <StyleModalCreate >
      <div role="dialog">
        <nav>
          <StyleTitle3>Cadastrar Tecnologia</StyleTitle3>
          <button onClick={() => setIsCreateTechModal(false)}>X</button>
        </nav>
        <form onSubmit={handleSubmit(submit)}>
          <Inputs
            type="text"
            id="title"
            label="Nome"
            placeholder="Título"
            register={register("title")}
          />
          <label> Selecionar status </label>
          <Select id="status" register={register("status")}>
            <option value="">Selecionar nível</option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <StyleButton type="submit">Cadastrar Tecnologia</StyleButton>
        </form>
      </div>
    </StyleModalCreate>
  );
};
