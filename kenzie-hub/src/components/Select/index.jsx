export const Select = ({ children, label, id, register, error }) => {
  return (
    <>
        {label ? <label htmlFor="id"> {label} </label> : null}
        <select id={id} {...register}> {children} </select>
        {error ? <p> {error.message} </p> : null}
    </>
  );
};
