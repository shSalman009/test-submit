import Image from "next/image";
import { useState } from "react";

export default function Topbar() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white rounded-xl px-6 py-4 flex justify-between items-center">
      {/* Search Bar */}

      <div className="w-1/3">
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              className="block w-full font-semibold px-4 py-3 pl-10 text-base  rounded-full placeholder-gray-700 text-gray-700 border border-gray-300 outline-none"
              placeholder="Search..."
              required
            />
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div>
          <Image
            className="cursor-pointer"
            width={30}
            height={30}
            src="/images/MessagesBadge.svg"
            alt=""
          />
        </div>
        <div>
          <Image
            className="cursor-pointer"
            width={30}
            height={30}
            src="/images/NotficationsBadge.svg"
            alt=""
          />
        </div>{" "}
        <div>
          <Image
            className="cursor-pointer"
            width={40}
            height={40}
            src="/images/profilePicture.svg"
            alt=""
          />
        </div>
        <div>
          <Image
            className="black-filter cursor-pointer"
            width={20}
            height={20}
            src="/images/arrow.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
