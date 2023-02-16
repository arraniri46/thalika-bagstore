import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Image from "next/image";

const MainPage = () => {
  return (
    <>
      <div className="container mx-auto h-screen self-center mt-4 max-w-6xl">
        <Hero />
        <NewArrivals />
        <Brands />
      </div>
    </>
  );
};

export default MainPage;
