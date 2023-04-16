import { Link } from "react-router-dom";
import { PageLogin } from "../../pages/login";

export const Back = () => {
  return (
    <Link to="/" element={<PageLogin />}>
      Sair
    </Link>
  );
};
