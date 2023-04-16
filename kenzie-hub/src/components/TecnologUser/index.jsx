import { StyleTitle2 } from "../../styles/typografy";

export const CardTecnologies = ({ profile }) => {
  return (
    <li>
      <StyleTitle2>{profile.title}</StyleTitle2>
      <p>{profile.status}</p>
    </li>
  );
};
