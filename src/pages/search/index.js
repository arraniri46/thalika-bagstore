import NewArrivals from "@/components/NewArrivals";
import Layout from "@/layouts/Layout";
import Link from "next/link";

const Search = () => {
  return (
    <>
      <Layout title="Search | Thalika Bagstore">
        <div className="container max-w-6xl items-center bg-textlight h-screen p-4">
          <div className="flex flex-col gap-y-5">
            <p className="text-lg font-semibold text-secondary">
              Showing results
            </p>
            <div className="flex ">
              <div className="flex w-10/12 bg-red-700">
                <NewArrivals />
              </div>
              <div className="flex flex-col w-2/12 bg-secondary p-6">
                <p className="text-lg font-bold text-textlight">Relevance</p>
                <ul className="text-base text-slate-300 mt-2 flex flex-col gap-y-1 active:underline">
                  <li className="hover:text-textlight">
                    <Link href="/trending">Trending</Link>
                  </li>
                  <li className="hover:text-textlight">
                    <Link href="/most-buyed">Best Seller</Link>
                  </li>
                  <li className="hover:text-textlight">
                    <Link href="/lowest">Price: Low to high</Link>
                  </li>
                  <li className="hover:text-textlight">
                    <Link href="/highest">Price: High to low</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;
