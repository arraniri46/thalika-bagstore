import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex bg-secondary w-full h-72 text-textlight">
        <div className="container mx-auto h-full self-center max-w-6xl relative">
          <div className="flex justify-around py-6">
            <div className="flex flex-col">
              <p>Pembayaran</p>
              <ul className="flex flex-col gap-y-4 mt-4">
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
            </div>
            <div className="flex flex-col">
              <p>Pengiriman</p>
              <ul className="flex flex-col gap-y-4 mt-4">
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
            </div>
            <div>
              <ul className="flex flex-col gap-y-3">
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
                  <a href="#">Kebijakan Privasi</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute bottom-4 w-full">
            <p className="text-center font-light text-sm">
              @ Copyright 2023 Garda Arraniri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
