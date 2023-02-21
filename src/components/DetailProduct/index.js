import { getProductById } from "@/store/slices/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../Button";

const DetailProduct = ({ isOpen, dataProduct }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      {open && (
        <div className="flex inset-0 justify-center items-center fixed bg-black/40">
          <div className="flex flex-col container max-w-5xl h-[70vh] bg-primary absolute">
            <div
              className="flex w-full justify-end px-2 py-2"
              onClick={() => setOpen(!open)}
            >
              <Button variant="fill" className="px-3">
                X
              </Button>
            </div>
            <div className="flex flex-col">
              <h2>Detail Product</h2>
              <div className="flex">
                <div className="w-4/6">
                  <Image
                    src={dataProduct.img}
                    width={300}
                    height={200}
                    alt="image"
                  ></Image>
                </div>
                <div className="flex flex-col w-2/6">
                  <h3>{dataProduct.name}</h3>
                  <h3>{dataProduct.price}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailProduct;

// export async function getServerSideProps(){

//   const detailProduct = useSelector(state => state.productsData.data)

//   const dispatch = useDispatch()

//   dispatch(getProductById(1))

// }
