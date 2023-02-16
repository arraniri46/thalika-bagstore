import Image from "next/image";
import { useRouter } from "next/router";

const products = [
  {
    name: "Louis Vuitton",
    price: 180000,
    img: "/images/products/product-1.jpg",
  },
  {
    name: "Hermes Bag Luxury",
    price: 250000,
    img: "/images/products/product-2.jpg",
  },
  {
    name: "Louis Vuitton",
    price: 180000,
    img: "/images/products/product-1.jpg",
  },
  {
    name: "Hermes Bag Luxury",
    price: 250000,
    img: "/images/products/product-2.jpg",
  },
  {
    name: "Louis Vuitton",
    price: 180000,
    img: "/images/products/product-1.jpg",
  },
  {
    name: "Hermes Bag Luxury",
    price: 250000,
    img: "/images/products/product-2.jpg",
  },
  {
    name: "Louis Vuitton",
    price: 180000,
    img: "/images/products/product-1.jpg",
  },
  {
    name: "Hermes Bag Luxury",
    price: 250000,
    img: "/images/products/product-2.jpg",
  },
];

const NewArrivals = () => {
  return (
    <>
      <div className="flex flex-col bg-textlight p-8 h-screen">
        <h2 className="text-2xl font-bold text-secondary">New Arrivals</h2>
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <a key={index} href="/" className="group shadow-lg bg-textlight">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.img}
                    alt="image"
                    className="h-full w-full object-cover object-center group-hover:opacity-75 group-hover:scale-125 duration-500"
                  />
                </div>
                <div className="px-3 pb-3 ">
                  <h3 className="mt-4 text-sm text-secondary">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-base font-medium text-secondary">
                    {product.price}
                  </p>
                  <div className="bg-secondary w-max px-2 rounded">
                    <p className="mt-1 text-xs text-textlight">Stok Tersedia</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex self-center mt-6 ">
          <a
            href="/new-arrivals"
            className="text-xl font-semibold text-secondary animate-bounce flex flex-col items-center"
          >
            Explore More
            <Image src="/down-icon.png" width={26} height={26}></Image>
          </a>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
