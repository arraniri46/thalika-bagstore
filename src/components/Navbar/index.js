import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../Button";
import LoginModal from "../Modal/LoginModal";
import SearchBar from "../SearchBar";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const dataFromChild = () => {
    return setIsOpen(false);
  };

  const handleHamburgerMenu = () => {};

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex h-14 md:h-16 w-full justify-between items-center px-3 sticky top-0 z-10 border-b ${
          scrollTop >= 100 ? `bg-textlight` : `bg-textlight`
        }`}
      >
        <div className="flex md:w-1/6">
          <span className="font-bold text-xl text-textdark">
            <a href="/">Thalika</a>
          </span>
          <span className="font-light text-xl text-primary">
            <a href="/">Bagstore</a>
          </span>
        </div>
        {/* responsive nav */}
        <div
          className={`absolute md:static md:flex top-0 h-screen w-3/4 md:h-max md:w-4/6 p-6 md:p-0 justify-around items-center z-10 ${
            activeNav
              ? `right-0 duration-300 bg-textlight`
              : `-right-3/4 scale-x-0 md:scale-x-100 duration-300`
          }`}
        >
          <div className="flex">
            <ul className="flex flex-col py-12 gap-y-4 text-lg font-medium text-secondary md:gap-x-6 md:flex-row md:py-0">
              <li className="hover:underline hover:text-terniary">
                <Link href="/new-arrivals">New Arrivals</Link>
              </li>
              <li className="hover:underline hover:text-terniary">
                <Link href="/featured-items">Featured Items</Link>
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
                  <ul className="absolute font-light text-base text-secondary w-full md:text-textlight mt-2 bg-textlight md:bg-secondary p-3 md:w-36 flex flex-col gap-y-3">
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
            <Button
              variant="fill"
              className="absolute right-3 top-3 px-4 py-2 md:hidden"
              onClick={() => setActiveNav(!activeNav)}
            >
              X
            </Button>
          </div>
          <div className="hidden md:flex">
            <SearchBar />
          </div>
        </div>
        {/* end responsive nav */}
        <div className="flex md:w-1/6 gap-x-3 md:gap-x-6 justify-end">
          <Link href="/cart" className="font-semibold relative">
            <Button className="flex">
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
          </Link>

          <Button variant="outline" className="font-semibold px-2">
            <Link href="/login">Login</Link>
          </Button>
          <Button
            className="font-semibold md:hidden"
            onClick={() => setActiveNav(true)}
          >
            <Image
              src="/hamburger-menu.svg"
              width={36}
              height={36}
              alt="login-icon"
            ></Image>
          </Button>
        </div>
        {/* <LoginModal open={isOpen} dataFromChild={dataFromChild} /> */}
      </nav>
    </>
  );
};

export default Navbar;
