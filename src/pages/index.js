import FeaturedItem from "@/components/FeaturedItems";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Layout from "@/layouts/Layout";

export default function Home() {
  return (
    <>
      <Layout title="Thalika Bagstore | Dapatkan Koleksi Tas Impian Anda">
        <div className="container mx-auto h-full self-center mt-4 max-w-6xl">
          <Hero />
          <NewArrivals />
          <FeaturedItem />
          {/* <Brands /> */}
        </div>
      </Layout>
    </>
  );
}
