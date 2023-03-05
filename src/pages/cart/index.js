import CartList from "@/components/CartList";
import Layout from "@/layouts/Layout";

const Cart = () => {
  return (
    <>
      <Layout title="Cart">
        <div className="container max-w-6xl h-screen p-6">
          <h2 className="text-2xl font-semibold text-textdark">
            Shopping Cart
          </h2>
          <div className="flex w-full h-screen border">
            <CartList />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
