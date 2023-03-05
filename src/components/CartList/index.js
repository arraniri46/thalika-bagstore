const CartList = () => {
  return (
    <>
      <div className="flex w-full justify-between text-left">
        <div className="w-5/8 ">
          <p>Items</p>
          <div>
            <img src="./images/banner-2.jpg" className="w-80 h-max" alt="" />
          </div>
        </div>
        <div className="w-1/8">
          <p>Quantity</p>
        </div>
        <div className="w-1/8">
          <p>Price</p>
        </div>
        <div className="w-1/8">
          <p>Total</p>
        </div>
      </div>
    </>
  );
};

export default CartList;
