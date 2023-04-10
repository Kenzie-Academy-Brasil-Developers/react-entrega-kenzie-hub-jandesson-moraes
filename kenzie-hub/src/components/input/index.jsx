import { forwardRef } from "react";
import { StyleInput } from "../../styles/input";

export const Inputs = forwardRef(({ id, label, children, ...rest }, ref) => {
  return (
    <StyleInput>
      {label ? <label htmlFor={id}> {label} </label> : null}
      <input id={id} ref={ref} {...rest} />
      {children}
    </StyleInput>
  );
});
