import Layout from "@/layouts/Layout";
import Link from "next/link";
import Card from "@/components/Card";

import { useSelector } from "react-redux";
import { useState } from "react";

const Explore = () => {
  const dataProducts = useSelector((state) => state.productsData.data);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Layout title="Explore | Thalika Bagstore">
        <div className="container max-w-6xl items-center bg-textlight h-screen p-4 mt-8">
          <div className="flex flex-col gap-y-2 ">
            <p className="text-lg font-semibold text-textdark">
              Showing results...
            </p>
            <div className="flex flex-col md:flex-row min-h-[80vh] ">
              <div className="flex md:flex-col md:w-2/12 bg-secondary p-6 justify-around md:justify-start">
                <div className="flex flex-col">
                  <p className="text-lg font-extrabold text-textlight">
                    Relevance
                  </p>
                  <ul className="text-base text-slate-200 mt-2 flex flex-col gap-y-2 active:underline">
                    <li className="hover:text-textlight">
                      <Link href="/trending">Trending</Link>
                    </li>
                    <li className="hover:text-textlight">
                      <Link href="/most-buyed">Best Seller</Link>
                    </li>
                    <li className="hover:text-textlight">
                      <Link href="/lowest">Price: Low to high</Link>
                    </li>
                    <li className="hover:text-textlight">
                      <Link href="/highest">Price: High to low</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col md:mt-12">
                  <p className="text-lg font-extrabold text-textlight">
                    Categories
                  </p>
                  <ul className="text-base text-slate-200 mt-2 flex flex-col gap-y-2 active:underline">
                    <li className="hover:text-textlight">
                      <Link href="/new-arrivals">New Arrivals</Link>
                    </li>
                    <li className="hover:text-textlight">
                      <Link href="/featured">Featured Items</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:w-10/12 px-4 overflow-y-scroll h-[80vh]">
                <Card products={dataProducts} />
              </div>
            </div>
            <div className="bg-primary w-full flex"></div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Explore;
