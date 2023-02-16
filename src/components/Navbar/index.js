import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import SearchBar from "../SearchBar";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <>
      <nav className="flex h-14 w-full bg-secondary justify-between items-center px-6 sticky top-0 z-10">
        <div className="flex">
          <span className="font-bold text-xl text-textlight">
            <a href="/">Thalika</a>
          </span>
          <span className="font-light text-xl text-primary">
            <a href="/">Bagstore</a>
          </span>
        </div>
        <div>
          <ul className="flex gap-x-6 text-lg font-medium text-textlight ">
            <li className="hover:underline hover:text-terniary">
              <Link href="/">New Arrivals</Link>
            </li>
            <li className="hover:underline hover:text-terniary">
              <Link href="/">Featured Items</Link>
            </li>
            <li className="hover:underline hover:text-terniary relative">
              <Link
                href=""
                onClick={() => {
                  setDropdown(!dropdown);
                }}
              >
                Category
              </Link>
              {dropdown && (
                <ul className="absolute text-textlight mt-2 bg-secondary p-3">
                  <li>
                    <a href="/category/slingbag">Slingbag</a>
                  </li>
                  <li>
                    <a href="/category/handbag">Handbag</a>
                  </li>
                  <li>
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
        <div className="flex gap-x-6" onClick={() => setIsOpen(!isOpen)}>
          <Button className="font-semibold">
            <Image src="/cart.svg" width={32} height={32}></Image>
          </Button>

          <Button className="font-semibold">
            <Image src="/user-icon.svg" width={32} height={32}></Image>
          </Button>
        </div>
        <Modal open={isOpen} />
      </nav>
    </>
  );
};

export default Navbar;
