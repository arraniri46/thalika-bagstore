import Button from "../Button";

const OrderSummary = () => {
  return (
    <>
      <div className="flex flex-col w-full md:w-80 h-max mt-8 sm:mt-0 p-4 rounded-xl shadow-md bg-secondary">
        <p className="text-lg text-textlight font-semibold">Order Summary</p>
        <div className="flex gap-x-12 text-textlight">
          <div className="flex flex-col text-sm font-light gap-y-2 mt-12">
            <p>Subtotal</p>
            <p>Estimated Shipping</p>
            <p className="text-lg font-semibold mt-8">Estimated Total</p>
          </div>
          <div className="flex flex-col text-sm font-light gap-y-2 mt-12">
            <p>Rp270.000</p>
            <p>Rp30.000</p>
          </div>
        </div>
        <div className="flex mt-4 justify-between">
          <p className="text-lg font-bold text-textlight">Rp300.000</p>
          <Button variant="fill" className="py-2">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
