import FeaturedItem from "@/components/FeaturedItems";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Layout from "@/layouts/Layout";

export default function Home() {
  return (
    <>
      <Layout title="Thalika Bagstore | Dapatkan Koleksi Tas Impian Anda">
        <div className="container mx-auto h-full self-center mt-1 md:mt-2 max-w-6xl">
          <div className="flex w-full justify-center items-center bg-secondary shadow-lg h-8 md:h-12 my-2 md:my-4">
            <p className="text-base md:text-xl font-semibold text-textlight text-center">
              'From Work to Weekend: Find Your Perfect Bag'
            </p>
          </div>
          <FeaturedItem />
          <Hero />
          <NewArrivals />
          {/* <Brands /> */}
        </div>
      </Layout>
    </>
  );
}
