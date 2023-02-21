import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-y-4 bg-secondary text-textlight">
        <Image src="/warning.svg" width={100} height={100}></Image>
        <p className="text-4xl">Oooops...</p>
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="text-xl mt-2">Page under development. Stay tuned.</p>
        <p className="text-lg mt-2">
          Back to:{" "}
          <Link href="/" className="text-blue-500">
            Homepage
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
