import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Button from "../Button";

export default function LoginModal({ open, dataFromChild }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  function closeModal() {
    setIsOpen(false);
    dataFromChild();
  }

  return (
    <>
      {isOpen && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-60" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="relative container max-w-xl transform overflow-hidden rounded-md bg-textlight px-8 md:px-32 pt-10 pb-14 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-sm font-medium leading-6 text-gray-600"
                    >
                      Thalika Bagstore
                    </Dialog.Title>

                    <div className="absolute top-4 right-4">
                      <Button
                        variant="outline"
                        className="px-3 py-1"
                        onClick={() => {
                          setIsOpen(!isOpen);
                          dataFromChild();
                        }}
                      >
                        X
                      </Button>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <p className="text-textdark text-xl font-semibold">
                        Login to continue...
                      </p>
                      <div className="flex flex-col">
                        <label className="text-sm font-light">Email</label>
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder="ex: john@gmail.com"
                          className="px-2 py-1 border-2 border-secondary rounded focus:placeholder:text-transparent placeholder:text-sm placeholder:font-light"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-light">Password</label>
                        <input
                          type="password"
                          name=""
                          id=""
                          placeholder="********"
                          className="px-2 py-1 border-2 border-secondary rounded focus:placeholder:text-transparent"
                        />
                      </div>
                      <Button
                        variant="filldark"
                        className="px-4 py-2 w-full bg-secondary"
                      >
                        Login
                      </Button>
                    </div>

                    <p className="text-sm text-textdark mt-2">
                      Dont have an account?{" "}
                      <Link
                        href="/register"
                        className="text-primary font-semibold"
                      >
                        Register
                      </Link>
                    </p>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
}
