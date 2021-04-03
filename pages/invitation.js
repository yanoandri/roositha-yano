import Layout from "../components/Layout";
import Image from "next/image";
import { mapUrl } from "../helper"

export default function Invitation() {

  return (
    <Layout>
      <div className="mx-4 lg:mx-0 animate__animated animate__fadeIn">
        <div className="flex flex-col">
          <div className="flex">
            <div className="m-auto block items-center justify-center text-center mt-8 lg:mt-32 max-w-2xl">
              <p className="handwriting mb-8 text-center text-4xl lg:text-6xl ">
                Bismillahirrahmanirrahim
              </p>
              <p className="mt-8 mb-2">
                Assalamu'alaikum Warahmatullahi Wabarakatuh
              </p>
              <p>
                Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
                menyelenggarakan pernikahan putra-putri kami:
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center my-8">
            <div className="flex flex-col mx-8 max-w-xs justify-center items-center text-center">
              <div>
                <Image
                  src="/image/roositha.jpg"
                  className="rounded-full"
                  width={128}
                  height={128}
                />
              </div>
              <div>
                <p className="handwriting my-4 text-4xl">
                  Roositha Ayuwigati
                </p>
                <p className="text-xl lg:mb-2">Putri dari</p>
                <p className="text-sm">Bapak Gatot Gito Haryanto</p>
                <p className="text-sm">Ibu Roosdrianti</p>
              </div>
            </div>
            <div className="flex flex-col mx-8 mt-8 md:mt-0 max-w-xs justify-center items-center text-center">
              <div>
                <Image
                  src="/image/yano.jpg"
                  className="rounded-full"
                  width={128}
                  height={128}
                />
              </div>
              <div>
                <p className="handwriting my-4 text-4xl">
                  Yano Andriyanto
                </p>
                <p className="text-xl lg:mb-2">Putra dari</p>
                <p className="text-sm">Bapak Jodi Prijanto</p>
                <p className="text-sm">Ibu Navy Andria</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-5xl mx-auto my-8">
          <hr className="shadow w-full justify-center items-center" />
        </div>
        <div className="flex flex-col justify-center items-center my-8 max-w-4xl mx-auto">
          <p className="handwriting my-8 text-center text-4xl lg:text-6xl ">
            Save the Date
          </p>
          <p className="mb-4 text-center">
            Pernikahan putra-putri kami Insya Allah akan dilaksanakan pada:
          </p>
          <div className="flex flex-col mb-8 p-8 border border-solid border-gray-300 shadow-md rounded-md justify-center text-center">
            <p>Sabtu, 14 Agustus 2021</p>
            <p>Akad: 10.00 - 10.30 WIB</p>
            <p>Resepsi: 11.00 - 12.00 WIB</p>
          </div>
          <p className="text-center my-8 md:my-4 md:max-w-xl lg:max-w-3xl">
            Mengingat situasi pandemi COVID-19, tamu yang dapat hadir ke lokasi
            pernikahan kami sangat terbatas hanya karena adanya pembatasan sosial,
            serta kami juga sangat memerhatikan protokol kesehatan yang berlaku.
            Oleh karena itu, kami mohon maaf yang sebesar-besarnya jika kami
            belum dapat mengundang Bapak/Ibu/Saudara/i semua secara fisik pada 
            acara kami.
          </p>
          <p className="text-center my-8 md:my-4 md:max-w-xl lg:max-w-3xl">
            Namun, Bapak/Ibu/Saudara/i dapat ikut serta merayakan kebahagiaan
            kami dengan menyaksikan acara pernikahan kami yang akan disiarkan
            langsung melalui Instagram Live di profil berikut:
          </p>
          <div className="flex flex-col mb-8 p-8 border border-solid border-gray-300 shadow-md rounded-md justify-center text-center">
            <p>
              <b>
                <a
                  href="https://www.instagram.com/roosithaayuwigati"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @roosithaayuwigati
                </a>
              </b>
            </p>
            <p>atau</p>
            <p>
              <b>
                <a
                  href="https://www.instagram.com/yanoandri"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @yanoandri
                </a>
              </b>
            </p>
          </div>
          <p className="text-center mb-8 md:max-w-xl lg:max-w-3xl">
            Doa restu Bapak/Ibu/Saudara/i merupakan suatu kehormatan dan
            kebahagiaan bagi kami.
          </p>
        </div>
        <div className="flex max-w-5xl mx-auto my-8">
          <hr className="shadow w-full justify-center items-center" />
        </div>
        <div className="flex flex-col text-center justify-center items-center">
          <div className="flex flex-col">
            <h1 className="handwriting text-6xl">Lokasi</h1>
          </div>
          <div className="flex flex-col">
            <iframe 
            src={mapUrl}
            width="600" 
            height="450" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" />
          </div>
        </div>
        <div className="flex max-w-5xl mx-auto my-8">
          <hr className="shadow w-full justify-center items-center" />
        </div>
        <div className="flex flex-col text-center max-w-5xl mx-auto my-8">
          <p>Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
          <p className="mt-4">Kami yang berbahagia,</p>
          <p>Kel. Bapak Gatot & Ibu Roosdrianti</p>
          <p>dan</p>
          <p>Kel. Bapak Jodi Prijanto & Ibu Yano Andriyanto</p>
          <p className="handwriting my-8 text-center text-4xl lg:text-6xl ">
            Roositha & Yano
          </p>
        </div>
      </div>
    </Layout>
  );
}
