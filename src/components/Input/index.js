const Input = ({ children, type = "text" }) => {
  return (
    <>
      <div className="flex flex-col w-full gap-y-1">
        <label htmlFor="username" className="text-sm font-light">
          {children}
        </label>
        <input
          type={type}
          className="px-4 py-1 text-secondary rounded outline-2 border border-secondary outline-primary"
        />
      </div>
    </>
  );
};

export default Input;
