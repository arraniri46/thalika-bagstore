const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="row-span-2 w-full relative group overflow-hidden">
          <img
            src="/images/header-image.jpg"
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
            className="w-full h-52 object-cover group-hover:scale-125 duration-500"
          ></img>
        </div>
        <div className="w-full group overflow-hidden">
          <img
            src="/images/banner-3.jpg"
            className="h-52 w-full object-cover group-hover:scale-125 duration-500"
          ></img>
        </div>
      </div>
      <div className="flex w-full justify-center items-center bg-primary shadow-lg h-20 my-4">
        <p className="text-2xl font-normal text-textlight">
          'Tas Wanita untuk Setiap Moment dan Kegiatan'
        </p>
      </div>
    </>
  );
};

export default Hero;
