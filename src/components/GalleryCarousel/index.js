const GalleryCarousel = () => {
  const setImage = () => {};

  return (
    <>
      <div className="flex flex-col w-full h-full gap-y-4">
        <div className="w-full">
          <img src="./images/products/product-1.jpg"></img>
        </div>
        <div className="w-full h-28">
          <ul className="flex gap-x-2 hover:cursor-pointer">
            <li className="w-60" onClick={setImage}>
              <img src="./images/products/product-1.jpg"></img>
            </li>
            <li className="w-60">
              <img src="./images/products/product-2.jpg"></img>
            </li>
            <li className="w-60">
              <img src="./images/products/product-1.jpg"></img>
            </li>
            <li className="w-60">
              <img src="./images/products/product-2.jpg"></img>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GalleryCarousel;
