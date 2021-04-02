import Link from "next/link";
import { IoIosHome, IoIosCalendar } from "react-icons/io";
// import { GiRingBox, GiDiamondRing } from "react-icons/gi";

export function DesktopNavbar() {
  return (
    <nav className="bg-white opacity-75 shadow fixed w-full hidden lg:flex z-50">
      <div className="w-full px-2 lg:px-8">
        <div className="relative flex items-center justify-end h-16">
          <div className="flex space-x-4">
            <Link href="/">
              <a className="text-gray-500 hover:bg-template-red hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500">
                <div className="flex flex-row items-center space-x-4">
                  <IoIosHome className="mx-auto m-1"/>
                  <p>Home</p>
                </div>
              </a>
            </Link>
            <Link href="/invitation">
              <a className="text-gray-500 hover:bg-template-red hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500">
                <div className="flex flex-row items-center space-x-4">
                  <IoIosCalendar className="mx-auto m-1" />
                  <p>Invitation</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function MobileNavbar() {
  return (
    <section
      id="bottom-navigation"
      className="lg:hidden block fixed inset-x-0 bottom-0 z-50 bg-white shadow"
    >
      <div id="tabs" className="flex justify-between">
        <Link href="/">
          <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <IoIosHome className="mx-auto m-1 sm:mx-auto sm:m-2" />
            <span className="tab tab-home block text-xs">Home</span>
          </a>
        </Link>
        <Link href="/invitation">
          <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <IoIosCalendar className="mx-auto m-1 sm:mx-auto sm:m-2" />
            <span className="tab tab-kategori block text-xs">Invitation</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
