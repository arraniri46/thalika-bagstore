import Button from "@/components/Button";
import Input from "@/components/Input";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | Thalika Bagstore</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full justify-center">
        <div className="md:absolute text-lg md:text-3xl font-bold text-textdark top-32 self-center">
          <span className="font-bold text-textdark">
            <a href="/">Thalika</a>
          </span>
          <span className="font-light text-primary">
            <a href="/">Bagstore</a>
          </span>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row w-full max-w-6xl h-max md:mt-52 items-center gap-y-2 md:gap-x-12">
          <div className="flex w-full md:w-1/2 justify-center p-12 md:p-6 md:rounded-xl">
            <Image
              src="./login-illustration.svg"
              width={500}
              height={400}
              alt="register"
            ></Image>
          </div>
          <div className="md:border-r md:h-[380px] border-secondary"></div>
          <div className="flex flex-col w-full md:w-1/2 p-4 gap-y-8 text-secondary items-center">
            <p className="text-2xl font-semibold">Login</p>
            <div className="flex flex-col w-full px-12 md:px-20 gap-y-2">
              <Input>Username or Email</Input>
              <Input type="password">Password</Input>
              <div className="flex w-full mt-6 justify-between items-center">
                <Link
                  href="/register"
                  className="hover:underline text-sm md:text-base"
                >
                  Register
                </Link>
                <Button variant="filldark" className="py-2 w-1/2">
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Register Footer */}
        <div className="flex w-full justify-center mt-24 mb-2">
          <p className="font-light text-sm">
            @ 2023. arranworks.com | All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;