const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="row-span-2 w-full relative group overflow-hidden">
          <img
            src="/images/header-image.jpg"
            alt="hero"
            className="w-full h-full object-cover object-center group-hover:scale-125 duration-500"
          ></img>
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-gray-800 to-transparent p-8">
            <p className="text-4xl text-textlight mt-6 font-bold ">
              Jelajahi Koleksi <br />
              Tas Wanita <br /> Terbaru
            </p>
          </div>
        </div>
        <div className="w-full group overflow-hidden">
          <img
            src="/images/banner-2.jpg"
            alt="hero"
            className="w-full h-52 object-cover group-hover:scale-125 duration-500"
          ></img>
        </div>
        <div className="w-full group overflow-hidden">
          <img
            src="/images/banner-3.jpg"
            alt="hero"
            className="h-52 w-full object-cover group-hover:scale-125 duration-500"
          ></img>
        </div>
      </div>
      <div className="flex w-full justify-center items-center bg-secondary shadow-lg h-12 md:h-20 my-4">
        <p className="text-base md:text-2xl font-normal text-textlight text-center">
          'Tas Wanita untuk Setiap Moment dan Kegiatan'
        </p>
      </div>
    </>
  );
};

export default Hero;
