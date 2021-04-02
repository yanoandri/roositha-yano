import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Countdown from "react-countdown";
import renderer from "../components/Countdown"

export default function Home() {
  return (
    <Layout>
      <div id="landing" className="animate__animated animate__fadeIn">
        <Image
          className="w-full h-auto object-cover"
          layout="fill"
          src="/image/background.jpg"
          objectFit="cover"
          quality={100}
        />
        <div className="bg-white opacity-50 absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex">
            <h1 className="handwriting mb-8 text-center text-4xl lg:text-6xl">
              The wedding of
            </h1>
          </div>
          <div className="flex mb-8">
            <h2 className="handwriting text-6xl justify-center xs:text-4xl xs:justify-center">
              <span className="flex">Roositha Ayuwigati</span>
              <span className="flex justify-center">&</span>
              <span className="flex">Yano Andriyanto</span>
            </h2>
          </div>
          <div className="flex m-3">
            <Countdown 
              className="text-6xl" 
              date={new Date("2021-08-14T10:00:00")}
              // date={Date.now() + 1000} for testing purposes
              renderer={renderer}
            />
          </div>
          <div className="flex">
            <h3 className="text-sm lg:text-xl mb-4">
              Sabtu, 14 Agustus 2021
            </h3>
          </div>
          <div className="flex flex-row space-x-8">
            <Link href="/invitation" target="_self">
              <div className="flex cursor-pointer bg-black text-white hover:bg-white hover:text-black border border-solid border-gray-500 shadow rounded-md p-2 px-4 transition-all duration-500 ">
                Lihat Undangan
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
