import Image from "next/image";
import { products } from "data/products";
import ProductCard from "../ProductCard";

const NewArrivals = () => {
  return (
    <>
      <div className="flex flex-col bg-textlight px-6 md:px-0 py-4">
        <h2 className="text-lg font-bold text-secondary">New Arrivals</h2>
        <hr />
        <div className="flex justify-center mt-10">
          <ProductCard products={products} />
        </div>
        <div className="flex self-center mt-6 ">
          <a
            href="/new-arrivals"
            className="text-lg font-semibold text-textdark animate-bounce flex flex-col items-center"
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
