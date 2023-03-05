import Layout from "@/layouts/Layout";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

import { useSelector } from "react-redux";
import { useState } from "react";
import ProductsFilter from "@/components/Products/ProductsFilter";

const Explore = () => {
  const dataProducts = useSelector((state) => state.productsData.data);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Layout title="Explore | Thalika Bagstore">
        <div className="container max-w-6xl items-center bg-textlight h-screen p-4 mt-8">
          <div className="flex flex-col gap-y-2 ">
            <div className="flex flex-col md:flex-row min-h-[80vh] ">
              <ProductsFilter />
              <div className="flex flex-col md:w-10/12 px-4 overflow-y-scroll h-[80vh] gap-y-4">
                <p className="text-lg font-semibold text-textdark">
                  Showing results...
                </p>
                <ProductCard products={dataProducts} />
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
