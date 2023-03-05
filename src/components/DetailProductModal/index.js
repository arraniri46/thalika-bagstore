import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import Button from "../Button";
import GalleryCarousel from "../GalleryCarousel";
import Rating from "../Rating";

export default function DetailProductModal({ isOpen, dataProduct, dataChild }) {
  const [open, setOpen] = useState(true);
  let [countItem, setCountItem] = useState(1);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setOpen(false);
            dataChild();
            setCountItem(1);
          }}
        >
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
                <Dialog.Panel className="container max-w-6xl transform overflow-hidden rounded-lg bg-white px-6 pt-4 pb-12 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold text-textdark"
                    >
                      Detail Product
                    </Dialog.Title>
                    <Button
                      variant="filldark"
                      className="px-3 py-1"
                      onClick={() => {
                        setOpen(false);
                        dataChild();
                        setCountItem(1);
                      }}
                    >
                      X
                    </Button>
                  </div>
                  <div className="mt-2 flex flex-col md:flex-row gap-x-12">
                    {/* <Image
                      src={dataProduct.img}
                      width={680}
                      height={200}
                      alt="image"
                      className="rounded-md"
                    ></Image> */}
                    <div className="w-full md:w-4/6">
                      <GalleryCarousel />
                    </div>
                    <div className="flex flex-col w-full md:w-2/6 p-2 md:p-0 -mt-12 md:mt-0">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold ">
                          {dataProduct.name}
                        </h3>
                        <Rating />
                        <h4 className="mt-6 mb-2 font-bold">Description</h4>
                        <p className=" ">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Rerum dolores cum perferendis quod enim
                          distinctio porro sit repudiandae at deleniti!
                        </p>
                      </div>
                      <div className="flex flex-col justify-between mt-4 md:mt-12 gap-y-2">
                        <p className="font-bold">Color</p>
                        <div className="flex gap-x-2 mb-6">
                          <span className="w-8 h-8 bg-black rounded-full hover:cursor-pointer"></span>
                          <span className="w-8 h-8 bg-orange-800 rounded-full hover:cursor-pointer"></span>
                          <span className="w-8 h-8 bg-red-300 rounded-full hover:cursor-pointer"></span>
                          <span className="w-8 h-8 bg-pink-600 rounded-full hover:cursor-pointer"></span>
                        </div>
                      </div>
                      <div className="flex flex-col w-full h-full justify-end items-end">
                        <div className="flex mb-6 justify-between w-full">
                          <div className="flex items-center gap-x-3">
                            <button
                              className="px-2 text-textlight text-xl bg-secondary hover:bg-primary"
                              onClick={() => setCountItem(--countItem)}
                              disabled={countItem == 1}
                            >
                              -
                            </button>
                            <p className="text-lg">{countItem}</p>
                            <button
                              className="px-2 text-textlight text-xl bg-secondary hover:bg-primary"
                              onClick={() => setCountItem(++countItem)}
                            >
                              +
                            </button>
                          </div>
                          <p className="text-2xl md:text-3xl font-extrabold text-textdark">
                            Rp
                            {(dataProduct.price * countItem).toLocaleString(
                              "id-ID"
                            )}
                          </p>
                        </div>
                        <div className="flex gap-x-4 ">
                          <Button
                            variant="outline"
                            className="py-2 px-4 text-textdark font-semibold hover:text-textlight"
                          >
                            Add to cart
                          </Button>
                          <Button variant="filldark" className="py-2 px-4">
                            Checkout
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex w-full mt-4 right-0 justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-secondary px-4 py-2 text-sm font-medium text-textlight hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                      //   onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
