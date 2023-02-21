import Image from "next/image";
import { products } from "data/products";
import Card from "../Card";

const NewArrivals = () => {
  return (
    <>
      <div className="flex flex-col bg-textlight px-8 py-4">
        <h2 className="text-2xl font-bold text-textdark">New Arrivals</h2>
        <hr />
        <div className="flex justify-center mt-10">
          <Card products={products} />
        </div>
        <div className="flex self-center mt-6 ">
          <a
            href="/new-arrivals"
            className="text-xl font-semibold text-textdark animate-bounce flex flex-col items-center"
          >
            Explore More
            <Image
              src="/down-icon.png"
              width={26}
              height={26}
              alt="more"
            ></Image>
          </a>
        </div>
        <hr />
      </div>
    </>
  );
};

export default NewArrivals;
