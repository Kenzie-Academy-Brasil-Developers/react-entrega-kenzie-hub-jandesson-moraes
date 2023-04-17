import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { TechContext } from "../../../providers/techContext";
import { Select } from "../../Select";
import { StyleModalUpdate } from "../../../styles/modalUpdate";
import { Inputs } from "..";
import { StyleTitle3 } from "../../../styles/typografy";

export const TechUpdateForm = () => {
  const {
    removeTech,
    edintingTech,
    setEditingTech,
    editTech, setEditTech,
    updateTech,
  } = useContext(TechContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      status: edintingTech.status,
    },
  });

  const submit = (formData) => {
    updateTech(formData, edintingTech.id);
  };


  return (
    <StyleModalUpdate>
      <div role="dialog">
        <nav>
          <StyleTitle3>Tecnologia Detalhes</StyleTitle3>
          <button onClick={() => setEditingTech(null)}>X</button>
        </nav>
        <form onSubmit={handleSubmit(submit)}>
          <h2>{edintingTech.title}</h2>

          <label>Nome do projeto</label>
          <input
            type="text"
            placeholder={edintingTech.title}
            {...register("title")}
          />

          <label> Status </label>
          <Select {...register("status")}>
            <option value="">Selecionar nível</option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>

          <div>
            <button className="btn-1" type="submit">
              Salvar alterações
            </button>
            <button type="submit"
              className="btn-2"
              onClick={() => [removeTech(edintingTech.id), setEditingTech(null)]}>
              Excluir
            </button>
          </div>
        </form>
      </div>
    </StyleModalUpdate>
  );
};
