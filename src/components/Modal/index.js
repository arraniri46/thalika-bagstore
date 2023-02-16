import { useEffect, useState } from "react";
import Button from "../Button";

const Modal = ({ open }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <>
      {isOpen && (
        <div className="absolute w-full h-screen bg-black/60 z-10 top-0 left-0">
          <div className="flex flex-col absolute w-96 h-60 border justify-center items-center  bg-primary top-[30%] left-[40%]">
            <div
              className="absolute top-2 right-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Button variant="fill" className="px-3 py-1">
                X
              </Button>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-textlight text-2xl font-semibold">Login</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Email"
                className="px-2 py-1"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Password"
                className="px-2 py-1"
              />
              <p className="text-sm text-textlight">
                Dont have an account? <b>Register</b>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
