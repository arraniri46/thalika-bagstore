import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center gap-x-2 relative">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value != "") {
              console.log(e.target.value);
              router.push(`/explore/?q=${e.target.value}`);
            }
          }}
          type="text"
          placeholder="Search for bag..."
          className="w-80 h-10 pl-12 pr-4 py-2 bg-textlight/80 rounded-md focus:placeholder:text-transparent"
        ></input>
        <span className="flex items-center absolute left-2">
          <button type="submit" className="bg-secondary/20 rounded-full p-1.5">
            <img
              src="/images/search-icon.png"
              alt="search-icon"
              width={20}
              height={20}
            />
          </button>
        </span>
      </div>
    </>
  );
};

export default SearchBar;
