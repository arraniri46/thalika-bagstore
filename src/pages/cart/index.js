import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import Layout from "@/layouts/Layout";

const Cart = () => {
  return (
    <>
      <Layout title="Cart | Thalika Bagstore">
        <div className="flex flex-col container max-w-6xl h-screen p-6">
          <h2 className="text-xl font-semibold text-secondary">
            Shopping Cart
          </h2>
          <div className="flex flex-col md:flex-row w-full p-4 mt-4 gap-x-16 justify-between">
            <div className="w-full md:w-5/8 h-max relative">
              <CartItem />
            </div>
            <div className="w-full md:w-3/8">
              <OrderSummary />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
