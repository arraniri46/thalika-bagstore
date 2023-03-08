import { useState } from "react";
import DetailProductModal from "../DetailProductModal";
import Rating from "../Rating";

const ProductCard = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsOpen(!isOpen);
  };

  const dataChild = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex">
        <div className="grid grid-cols-2 gap-y-8 gap-x-6 lg:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.id}
              onClick={() => handleProductClick(product)}
              // href={`/${product.name.toLowerCase().split(" ").join("-")}`}
              className="group shadow-xl rounded-md sm:rounded-xl bg-textlight aspect-square hover:cursor-pointer"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 rounded-md sm:rounded-xl">
                <img
                  src={product.img}
                  alt="image"
                  className="h-full w-full object-cover object-center group-hover:opacity-75 group-hover:scale-125 duration-500"
                />
              </div>
              <div className="px-3 pb-3 ">
                <h3 className="mt-4 text-sm sm:text-base font-bold text-textdark">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm sm:text-base font-semibold text-textdark">
                  Rp{product.price.toLocaleString("id-ID")}
                </p>
                <div className="flex bg-secondary w-max px-2 py-1 mt-4 rounded">
                  <p className="text-xs text-textlight">Stok Tersedia</p>
                </div>
                <div className="mt-2">{/* <Rating /> */}</div>
              </div>
            </a>
          ))}
        </div>

        {selectedProduct && (
          // <DetailProduct dataProduct={selectedProduct} isOpen={isOpen} />
          <DetailProductModal
            dataProduct={selectedProduct}
            isOpen={isOpen}
            dataChild={dataChild}
          />
        )}
      </div>
    </>
  );
};

export default ProductCard;
