import Image from "next/image";

const brands = [
  { name: "chanel", img: "/images/brands/chanel-logo.png" },
  { name: "dandg", img: "/images/brands/d&g-logo.png" },
  { name: "dior", img: "/images/brands/dior-logo.png" },
  { name: "gucci", img: "/images/brands/gucci-logo.png" },
  { name: "hermes", img: "/images/brands/hermes-logo.png" },
  { name: "lv", img: "/images/brands/lv-logo.png" },
  { name: "prada", img: "/images/brands/prada-logo.png" },
];

const Brands = () => {
  return (
    <>
      <div className="flex items-center bg-textlight h-36 justify-between gap-x-2 mt-8 px-6">
        {brands.map((brand, index) => (
          <Image key={index} src={brand.img} width={120} height={100}></Image>
        ))}
      </div>
    </>
  );
};

export default Brands;
