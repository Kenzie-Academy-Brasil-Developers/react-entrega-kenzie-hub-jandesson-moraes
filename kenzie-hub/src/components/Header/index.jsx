import { Back } from "../Back";
import Logo from "../../assets/Logo.png";
import { StyleHeader } from "../../styles/header";

export const Header = () => {
  return (
    <StyleHeader>
      <img src={Logo} alt="" />
      <Back />
    </StyleHeader>
  );
};
