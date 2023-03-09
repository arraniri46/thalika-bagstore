import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex bg-secondary w-full h-72 text-textlight">
        <div className="container max-w-6xl mx-auto h-full self-center relative">
          <div className="flex justify-between py-6">
            <div className="flex flex-col text-center md:text-left">
              <p className="text-xl">Thalika Bagstore</p>
              <p className="text-sm font-light">
                From Work to Weekend: Find Your Perfect Bag
              </p>
            </div>
            {/* <div className="flex flex-col">
              <p className="text-sm md:text-base">Payments</p>
              <ul className="flex flex-col gap-y-2 md:gap-y-4 mt-4">
                <li>
                  <Image
                    src="/images/bca-logo.png"
                    width={80}
                    height={40}
                    alt="icon"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/images/bni-logo.png"
                    width={80}
                    height={40}
                    alt="icon"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/images/mandiri-logo.png"
                    width={80}
                    height={40}
                    alt="icon"
                  ></Image>
                </li>
              </ul>
            </div> */}
            {/* <div className="flex flex-col">
              <p className="text-sm md:text-base">Shipments</p>
              <ul className="flex flex-col gap-y-2 md:gap-y-4 mt-4">
                <li>
                  <Image
                    src="/images/jne-logo.png"
                    width={80}
                    height={40}
                    alt="icon"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/images/jnt-logo.png"
                    width={80}
                    height={40}
                    alt="icon"
                  ></Image>
                </li>
              </ul>
            </div> */}
            <div>
              <ul className="flex flex-col gap-y-2 md:gap-y-3 text-sm md:text-base">
                <li className="text-semibold hover:underline">
                  <a href="#">About</a>
                </li>
                <li className="text-semibold hover:underline">
                  <a href="#">Help</a>
                </li>
                <li className="text-semibold hover:underline">
                  <a href="#">Frequently Questions</a>
                </li>
                <li className="text-semibold hover:underline">
                  <a href="#">Terms & Condition</a>
                </li>
                <li className="text-semibold hover:underline">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container flex justify-between absolute bottom-4">
            <p className="text-center font-light text-sm">
              @ Copyright 2023 Garda Arraniri. All rights reserved.
            </p>
            <p className="text-center font-light text-sm">Media:</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
