import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Sidebar() {
  // Dropdown States
  const [tripsMenu, setTripsMenu] = useState(false);
  const [planes, setPlanes] = useState(false);
  const [amenities, setAmenities] = useState(false);

  // Active Page State
  const [activePage, setActivePage] = useState("");
  const router = useRouter();

  // for active according to page
  useEffect(() => {
    setActivePage(router.pathname);
  }, [router.pathname]);

  return (
    <div className="h-screen fixed top-0 left-0 bg-gray-800 w-64 pb-20 rounded-xl">
      <div className="text-center">
        <h4 className="text-slate-400 text-4xl inline-block font-semibold pt-5 pb-5 hover:text-white cursor-pointer transition-all duration-200 ">
          Logo
        </h4>
      </div>
      <div className="pl-10 py-4 overflow-y-auto h-full scrollbar-hidden">
        <ul className="space-y-1">
          <li>
            <Link
              href="dashboard"
              className={`group group flex items-center pl-6 py-4 rounded-l-full text-base font-normal hover:bg-gray-700 hover:text-white ${
                activePage === "/dashboard"
                  ? "bg-gray-700 text-white [&>img]:filter-none"
                  : "text-gray-400"
              }`}
            >
              <Image
                width={20}
                height={20}
                className="w-5 h-5 transition duration-75 gray-filter group-hover:filter-none"
                src="/images/Dashboard.svg"
                alt="logo"
              />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="reservations"
              className={`group group flex items-center pl-6 py-4 rounded-l-full text-base font-normal hover:bg-gray-700 hover:text-white ${
                activePage === "/reservations"
                  ? "bg-gray-700 text-white [&>img]:filter-none"
                  : "text-gray-400"
              }`}
            >
              <Image
                width={20}
                height={20}
                className="w-5 h-5 transition duration-75 gray-filter group-hover:filter-none"
                src="/images/Reservations.svg"
                alt="logo"
              />
              <span className="ml-3">Reservations</span>
            </Link>
          </li>{" "}
          <li>
            <button
              onClick={() => setTripsMenu(!tripsMenu)}
              type="button"
              className="group flex items-center w-full pl-6 py-4 text-base font-normal transition duration-75 rounded-l-full  text-white hover:bg-gray-700"
            >
              <Image
                width={20}
                height={20}
                className="h-5 transition duration-75 gray-filter group-hover:filter-none"
                src="/images/Trips.svg"
                alt="logo"
              />
              <span className="flex-1 ml-3 text-left whitespace-nowrap transition-all duration-75 text-gray-400 group-hover:text-white">
                Trips
              </span>
              <div
                className={`transition-transform duration-500 mr-4 ${
                  tripsMenu && "rotate-180"
                }`}
              >
                <Image
                  width={20}
                  height={20}
                  className="w-5 h-5transition-all duration-75 gray-filter group-hover:filter-none"
                  src="/images/arrow.svg"
                  alt=""
                />
              </div>
            </button>
            <ul
              className={`${
                !tripsMenu ? "max-h-0" : "max-h-60"
              } space-y-2 transition-[max-height] duration-500 ease-in-out overflow-hidden pl-12`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center w-full py-3 pl-6 text-base font-normal transition duration-75 rounded-l-full group text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full py-3 pl-6 text-base font-normal transition duration-75 rounded-l-full group text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Billing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full py-3 pl-6 text-base font-normal transition duration-75 rounded-l-full group text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Invoice
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="invoices"
              className={`group group flex items-center pl-6 py-4 rounded-l-full text-base font-normal hover:bg-gray-700 hover:text-white ${
                activePage === "/invoices"
                  ? "bg-gray-700 text-white [&>img]:filter-none"
                  : "text-gray-400"
              }`}
            >
              <Image
                width={20}
                height={20}
                className="w-4 transition duration-75 gray-filter group-hover:filter-none"
                src="/images/Invoices.svg"
                alt="logo"
              />
              <span className="ml-3">Invoices</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => setPlanes(!planes)}
              type="button"
              className="group flex items-center w-full pl-6 py-4 text-base font-normal transition duration-75 rounded-l-full  text-white hover:bg-gray-700"
            >
              <Image
                width={20}
                height={20}
                className="w-5 transition duration-75 gray-filter group-hover:filter-none"
                src="images/Planes.svg"
                alt=""
              />
              <span className="flex-1 ml-3 text-left whitespace-nowrap transition-all duration-75 text-gray-400 group-hover:text-white">
                Planes
              </span>
              <div
                className={`transition-transform duration-500 mr-4 ${
                  planes && "rotate-180"
                }`}
              >
                <Image
                  width={20}
                  height={20}
                  src="images/arrow.svg"
                  className="w-5 h-5 transition-all duration-75 gray-filter group-hover:filter-none "
                  alt=""
                />
              </div>
            </button>
            <ul
              className={`${
                !planes ? "max-h-0" : "max-h-60"
              } space-y-2 transition-[max-height] duration-500 ease-in-out overflow-hidden pl-12`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center w-full py-3 pl-6 text-base font-normal transition duration-75 rounded-l-full group text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full py-3 pl-6 text-base font-normal transition duration-75 rounded-l-full group text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Billing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full py-3 pl-6 text-base font-normal transition duration-75 rounded-l-full group text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Invoice
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button
              onClick={() => setAmenities(!amenities)}
              type="button"
              className="group flex items-center w-full pl-6 py-4 text-base font-normal transition duration-75 rounded-l-full  text-white hover:bg-gray-700"
            >
              <Image
                width={20}
                height={20}
                className="w-5 transition duration-75 gray-filter group-hover:filter-none"
                src="images/Amenities.svg"
                alt=""
              />
              <span className="flex-1 ml-3 text-left whitespace-nowrap transition-all duration-75 text-gray-400 group-hover:text-white">
                Amenities
              </span>
              <div
                className={`transition-transform duration-500 mr-4 ${
                  amenities && "rotate-180"
                }`}
              >
                <Image
                  width={20}
                  height={20}
                  src="images/arrow.svg"
                  className="w-5 h-5 transition-all duration-75 gray-filter group-hover:filter-none"
                  alt=""
                />
              </div>
            </button>
            <ul
              className={`${
                !amenities ? "max-h-0" : "max-h-60"
              } space-y-2 transition-[max-height] duration-500 ease-in-out overflow-hidden pl-12`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center w-full py-3 pl-6 text-base font-normal transition duration-75 rounded-l-full group text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full py-3 pl-6 text-base font-normal transition duration-75 rounded-l-full group text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Billing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full py-3 pl-6 text-base font-normal transition duration-75 rounded-l-full group text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Invoice
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="contacts"
              className={`group group flex items-center pl-6 py-4 rounded-l-full text-base font-normal hover:bg-gray-700 hover:text-white ${
                activePage === "/contacts"
                  ? "bg-gray-700 text-white [&>img]:filter-none"
                  : "text-gray-400"
              }`}
            >
              <Image
                width={20}
                height={20}
                className="w-5  transition duration-75 gray-filter group-hover:filter-none"
                src="/images/Contacts.svg"
                alt="logo"
              />
              <span className="transition-all duration-75 text-gray-400 group-hover:text-white ml-3">
                Contacts
              </span>
            </Link>
          </li>{" "}
          <li>
            <Link
              href="#"
              className="group flex items-center pl-6 py-4 rounded-l-full text-base font-normal text-white hover:bg-gray-700"
            >
              <Image
                width={20}
                height={20}
                className="w-6 transition duration-75 gray-filter group-hover:filter-none"
                src="/images/Team.svg"
                alt="logo"
              />
              <span className="transition-all duration-75 text-gray-400 group-hover:text-white ml-3">
                Team
              </span>
            </Link>
          </li>{" "}
          <li>
            <Link
              href="#"
              className="group flex items-center pl-6 py-4 rounded-l-full text-base font-normal text-white hover:bg-gray-700"
            >
              <Image
                width={20}
                height={20}
                className="w-5 h-5 transition duration-75 gray-filter group-hover:filter-none"
                src="/images/CrewMembers.svg"
                alt="logo"
              />
              <span className="transition-all duration-75 text-gray-400 group-hover:text-white ml-3">
                Crew Members
              </span>
            </Link>
          </li>{" "}
          <li>
            <Link
              href="#"
              className="group flex items-center pl-6 py-4 rounded-l-full text-base font-normal text-white hover:bg-gray-700"
            >
              <Image
                width={20}
                height={20}
                className="w-5 h-5 transition duration-75 gray-filter group-hover:filter-none"
                src="/images/Files.svg"
                alt="logo"
              />
              <span className="transition-all duration-75 text-gray-400 group-hover:text-white ml-3">
                Files
              </span>
            </Link>
          </li>{" "}
          <li>
            <Link
              href="#"
              className="group flex items-center pl-6 py-4 rounded-l-full text-base font-normal text-white hover:bg-gray-700"
            >
              <Image
                width={20}
                height={20}
                className="w-5 h-5 transition duration-75 gray-filter group-hover:filter-none"
                src="/images/Messages.svg"
                alt="logo"
              />
              <span className="transition-all duration-75 text-gray-400 group-hover:text-white ml-3">
                Messages
              </span>
            </Link>
          </li>{" "}
          <li>
            <a
              href="#"
              className="group flex items-center pl-6 py-4 rounded-l-full text-base font-normal text-white hover:bg-gray-700"
            >
              <Image
                width={20}
                height={20}
                className="w-5 h-5 transition duration-75 gray-filter group-hover:filter-none"
                src="/images/Calendar.svg"
                alt="logo"
              />
              <span className="transition-all duration-75 text-gray-400 group-hover:text-white ml-3">
                Calendar
              </span>
            </a>
          </li>{" "}
          <li>
            <a
              href="#"
              className="group flex items-center pl-6 py-4 rounded-l-full text-base font-normal text-white hover:bg-gray-700"
            >
              <Image
                width={20}
                height={20}
                className="w-5 h-5 transition duration-75 gray-filter group-hover:filter-none"
                src="/images/Setting.svg"
                alt="logo"
              />
              <span className="transition-all duration-75 text-gray-400 group-hover:text-white ml-3">
                Setting
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group flex items-center pl-6 py-4 rounded-l-full text-base font-normal text-white hover:bg-gray-700"
            >
              <Image
                width={20}
                height={20}
                className="w-5 h-5 ttransition duration-75 gray-filter group-hover:filter-none"
                src="/images/Logout.svg"
                alt="logo"
              />
              <span className="transition-all duration-75 text-gray-400 group-hover:text-white ml-3">
                Logout
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
