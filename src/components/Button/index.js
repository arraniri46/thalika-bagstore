const Button = ({ className, children, variant }) => {
  const addClassName = className ? `${className}` : "";

  const variants = {
    outline: `border-2 border-primary text-textlight hover:bg-primary py-1`,
    fill: `bg-terniary text-textlight hover:bg-primary py-1`,
  };

  const pickedVariant = variants[variant];

  return (
    <>
      <button className={`${addClassName} ${pickedVariant}`}>{children}</button>
    </>
  );
};

export default Button;
