const SearchBar = () => {
  return (
    <>
      <div className="flex items-center gap-x-2 relative">
        <input
          type="text"
          placeholder="Search for bag..."
          className="w-80 h-10 pl-12 pr-4 py-2 bg-textlight/80 rounded-md focus:placeholder:text-transparent"
        ></input>
        <span className="flex items-center absolute left-2">
          <button type="submit" className="bg-terniary/20 rounded-full p-1.5">
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
