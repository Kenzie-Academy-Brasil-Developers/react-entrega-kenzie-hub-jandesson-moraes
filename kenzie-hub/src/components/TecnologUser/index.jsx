import { StyleTitle2 } from "../../styles/typografy";

export const CardTecnologies = ({ profile, setEditingTech }) => {
  return (
    <li onClick={() => setEditingTech(profile) }>
      <StyleTitle2>{profile.title}</StyleTitle2>
      <p>{profile.status}</p>
    </li>
  );
};
