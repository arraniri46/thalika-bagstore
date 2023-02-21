import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import SearchBar from "../SearchBar";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dataFromChild = () => {
    return setIsOpen(false);
  };

  return (
    <>
      <nav className="flex h-14 w-full bg-secondary justify-between items-center px-6 sticky top-0 z-10">
        <div className="flex">
          <span className="font-bold text-xl text-textlight">
            <a href="/">Thalika</a>
          </span>
          <span className="font-light text-xl text-terniary">
            <a href="/">Bagstore</a>
          </span>
        </div>
        <div>
          <ul className="flex gap-x-6 text-lg font-medium text-textlight ">
            <li className="hover:underline hover:text-terniary">
              <Link href="/#new-arrivals">New Arrivals</Link>
            </li>
            <li className="hover:underline hover:text-terniary">
              <Link href="/#featured-items">Featured Items</Link>
            </li>
            <li className="hover:text-terniary relative gap-x-2">
              <p
                onClick={() => {
                  setDropdown(!dropdown);
                }}
                className="flex items-center gap-x-2 hover:cursor-pointer"
              >
                Category
                <Image
                  src="/down-arrow.svg"
                  width={14}
                  height={14}
                  alt="more"
                ></Image>
              </p>

              {dropdown && (
                <ul className="absolute font-light text-base text-textlight mt-2 bg-secondary p-3 w-36 flex flex-col gap-y-3">
                  <li className="hover:text-terniary">
                    <a href="/category/slingbag">Slingbag</a>
                  </li>
                  <li className="hover:text-terniary">
                    <a href="/category/handbag">Handbag</a>
                  </li>
                  <li className="hover:text-terniary">
                    <a href="/category/backpack">Backpack</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="flex gap-x-6">
          <Button className="font-semibold relative">
            <Image
              src="/cart.svg"
              width={36}
              height={36}
              alt="cart-icon"
            ></Image>
            <span className="absolute bottom-0 right-0 bg-textdark text-textlight text-xs px-1 rounded-full">
              4
            </span>
          </Button>

          <Button className="font-semibold" onClick={() => setIsOpen(!isOpen)}>
            <Image
              src="/user-icon-circle.svg"
              width={36}
              height={36}
              alt="login-icon"
            ></Image>
          </Button>
        </div>
        <Modal open={isOpen} dataFromChild={dataFromChild} />
      </nav>
    </>
  );
};

export default Navbar;
