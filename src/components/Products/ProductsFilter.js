import Link from "next/link";

const ProductsFilter = () => {
  return (
    <>
      <div className="flex md:flex-col md:w-2/12 justify-around md:justify-start gap-y-4 bg-secondary py-2 ">
        <div className="flex flex-col bg-secondary p-4">
          <p className="text-lg font-semibold text-textlight">Relevance</p>
          <ul className="text-sm text-slate-200 mt-2 flex flex-col gap-y-2">
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
        <div className="flex flex-col bg-secondary p-4">
          <p className="text-lg font-semibold text-textlight">Categories</p>
          <ul className="text-sm text-slate-200 mt-2 flex flex-col gap-y-2">
            <li className="hover:text-textlight">
              <Link href="/new-arrivals">New Arrivals</Link>
            </li>
            <li className="hover:text-textlight">
              <Link href="/featured">Featured Items</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col bg-secondary p-4">
          <p className="text-lg font-semibold text-textlight">
            Filter by brands
          </p>
          <ul className="text-sm font-light text-slate-200 mt-2 flex flex-col gap-y-2">
            <li className="flex hover:text-textlight items-center gap-x-1">
              <input type="checkbox" />
              <label>Prada (2)</label>
            </li>
            <li className="flex hover:text-textlight items-center gap-x-1">
              <input type="checkbox" />
              <label>Hermes (12)</label>
            </li>
            <li className="flex hover:text-textlight items-center gap-x-1">
              <input type="checkbox" />
              <label>Charles & Keith (6)</label>
            </li>
            <li className="flex hover:text-textlight items-center gap-x-1">
              <input type="checkbox" />
              <label>Louis Vuitton (7)</label>
            </li>
            <li className="flex hover:text-textlight items-center gap-x-1">
              <input type="checkbox" />
              <label>Gucci (4)</label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductsFilter;
