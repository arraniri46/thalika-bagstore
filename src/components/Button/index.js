const Button = ({ className, children, variant, onClick }) => {
  const addClassName = className ? `${className}` : "";

  const variants = {
    outline: `border-2 border-secondary hover:bg-secondary hover:text-textlight py-1 rounded`,
    filldark: `bg-secondary text-textlight hover:bg-secondary/90 px-2 py-1 rounded font-bold`,
    fill: `bg-textlight text-secondary hover:bg-gray-200 px-2 py-1 rounded font-bold`,
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
