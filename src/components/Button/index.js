const Button = ({ className, children, variant, onClick }) => {
  const addClassName = className ? `${className}` : "";

  const variants = {
    outline: `border-2 border-secondary hover:bg-secondary py-1`,
    fill: `bg-secondary text-textlight hover:bg-terniary py-1`,
  };

  const pickedVariant = variants[variant];

  return (
    <>
      <button className={`${addClassName} ${pickedVariant}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
