import { useEffect, useRef, useState } from "react";

export default function TopDropdown({
  placeholder,
  data,
  handleClick,
}: {
  roundType: string;
  placeholder: string;
  data?: [];
  handleClick?: (e: string) => void | any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Dropdown Button Ref
  const btnRef = useRef(null);

  // Toggle Dropdown
  const handleToggle = (e: any) => {
    if (e.target === btnRef.current) {
      setIsOpen(!isOpen);
    }
  };

  // Handle Search dropdown item
  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };
  // Initial PlaceholderText
  useEffect(() => {
    setPlaceholderText(placeholder);
  }, [placeholder]);

  return (
    <>
      <div
        ref={btnRef}
        onClick={handleToggle}
        className="cursor-pointer relative text-sm border text-center inline-flex items-center border-gray-300 outline-none px-4 py-3 text-gray-900 w-full rounded-full"
      >
        <input
          readOnly
          type="text"
          className="w-full h-full outline-none pointer-events-none"
          value={placeholderText}
        />

        <div className="h-full absolute right-0 inset-y-0 flex justify-center items-center mr-4 pointer-events-none">
          <svg
            className={`w-4 h-4 ml-2 ${isOpen ? "rotate-180" : "rotate-0"}`}
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <div
          className={`absolute top-full mt-3 left-0 z-10 bg-white rounded-lg border border-gray-300 w-60  ${
            !isOpen && "hidden"
          }`}
        >
          <div className="p-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-full outline-none"
                placeholder="Search user"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          <ul className="px-3 pb-3 text-gray-500 space-y-3 text-start">
            {data
              ?.filter((item: any) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item: any) => (
                <li
                  key={item.id}
                  onClick={() => {
                    handleClick && handleClick(item.name);
                    setIsOpen(false);
                    setPlaceholderText(item.name);
                  }}
                  className="cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
