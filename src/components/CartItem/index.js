import Button from "../Button";

const CartItem = () => {
  return (
    <>
      <div className="flex flex-col text-gray-500">
        <div className="flex h-10 text-sm text-secondary uppercase justify-between gap-x-4 md:gap-x-40">
          <h4 className="w-3/8">Item</h4>
          <h4 className="w-1/8">Quantity</h4>
          <h4 className="w-2/8">Price</h4>
          <h4 className="w-2/8">Total</h4>
        </div>
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="flex flex-col border-b pb-4 pt-2">
            <div className="flex items-center justify-between text-sm md:text-base ">
              <div className="flex gap-x-2 items-center">
                <img
                  src="./images/banner-2.jpg"
                  className="w-24 md:w-48 h-max"
                  alt=""
                />
                <div>
                  <p className="font-semibold">Louis Vuitton</p>
                  <p className="font-light text-sm">Model :</p>
                </div>
              </div>
              <div>
                <div>1</div>
              </div>
              <div>Rp{Number(10000).toLocaleString("ID-id")}</div>
              <div className="font-semibold">
                Rp{Number(10000).toLocaleString("ID-id")}
              </div>
            </div>
            <div className="flex w-full justify-end gap-x-4">
              <p className="text-xs md:text-sm font-light hover:underline hover:cursor-pointer">
                Add to whislist
              </p>
              <Button variant="outline" className="px-1">
                <img src="./bin.svg" alt="delete" className="w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItem;
