import { Carousel } from "flowbite-react";

const FeaturedItem = () => {
  return (
    <>
      <div className="md:mt-4">
        {/* <h2 className="text-lg font-bold text-secondary">Featured Items</h2> */}
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img src="./images/banners/banner-1.jpg" alt="..." />
            <img src="./images/banners/banner-2.jpg" alt="..." />
            <img src="./images/banners/banner-3.jpg" alt="..." />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default FeaturedItem;
