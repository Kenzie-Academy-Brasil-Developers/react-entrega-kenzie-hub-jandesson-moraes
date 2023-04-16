import { StyleInput } from "../../styles/input";

export const Inputs = ({ type, id, label, placeholder, register, error }) => {
  return (
    <StyleInput>
      {label ? <label htmlFor=""> {label} </label> : null}
      <input type={type} id={id} placeholder={placeholder} {...register} />
      {error ? <p>{error.message}</p> : null}
    </StyleInput>
  );
};
