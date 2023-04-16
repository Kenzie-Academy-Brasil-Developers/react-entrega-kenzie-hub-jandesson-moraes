import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { TechContext } from "../../../providers/techContext";
import { Select } from "../../Select";
import { StyleModalUpdate } from "../../../styles/modalUpdate";
import { Inputs } from "..";
import { StyleTitle3 } from "../../../styles/typografy";

export const TechUpdateForm = () => {
  const { editTech, setEditTech, updateTech, removeTech } =
    useContext(TechContext);

  const [disabled, setDisabled] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      status: editTech.status,
    },
  });

  const submit = (data) => {
    updateTech(data, editTech.id);
  };

  const clickDisabled = () => {
    setDisabled(true);
  };

  return (
    <StyleModalUpdate>
      <div role="dialog">
        <nav>
          <StyleTitle3>Tecnologia Detalhes</StyleTitle3>
          <button onClick={() => setEditTech(null)}>X</button>
        </nav>
        <form onSubmit={handleSubmit(submit)}>
          <h2>{editTech.title}</h2>
          <Inputs
            type="text"
            id="title"
            label="Nome do projeto"
            placeholder={editTech.title}
            register={register("title")}
          />

          <label> Status </label>
          <Select id="status" register={register("status")}>
            <option value="">Selecionar nível</option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>

          <div>
            <button className="btn-1" type="submit">
              Salvar alterações
            </button>
            <button
              className="btn-2"
              onClick={() => [removeTech(editTech.id), setEditTech(null)]}>
              Excluir
            </button>
          </div>
        </form>
      </div>
    </StyleModalUpdate>
  );
};
