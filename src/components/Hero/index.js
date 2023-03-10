import Link from "next/link";
import Button from "../Button";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 h-60 sm:h-max mt-4 md:mt-8">
        <div className="row-span-2 w-full relative group overflow-hidden">
          <img
            src="/images/header-image.jpg"
            alt="hero"
            className="w-full h-full object-cover object-center group-hover:scale-125 duration-500"
          ></img>
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-gray-800 to-transparent p-8">
            <p className="text-xl sm:text-4xl text-textlight mt-6 font-bold ">
              Jelajahi Koleksi <br />
              Tas Wanita <br /> Terbaru
            </p>
          </div>
        </div>
        <div className="w-full group overflow-hidden">
          <img
            src="/images/banner-2.jpg"
            alt="hero"
            className="w-full h-52 object-cover group-hover:scale-125 duration-500"
          ></img>
        </div>
        <div className="w-full group overflow-hidden">
          <img
            src="/images/banner-3.jpg"
            alt="hero"
            className="h-52 w-full object-cover group-hover:scale-125 duration-500"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
