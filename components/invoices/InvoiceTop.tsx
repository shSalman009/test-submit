import Image from "next/image";
import TopDropdown from "./topDropdown";

interface Data {
  trips: [];
  clients: [];
}

export default function InvoiceTop({
  data,
  handleClient,
  handleTrip,
  handleInvoiceDate,
  handlePlaneImages,
  values,
}: {
  data: object;
  handleClient: (e: string) => void;
  handleTrip: (e: string) => void;
  handleInvoiceDate: (e: string) => void;
  handlePlaneImages: (e: any) => void;
  values: any;
}) {
  const { clients, trips } = data as Data;

  // Handle Plane Images
  const handleChange = (event: any) => {
    if (!event) return;
    const url = URL.createObjectURL(event.target.files[0]);
    handlePlaneImages(url);
  };

  return (
    <div className="bg-white w-full rounded-xl px-8 py-10 flex mb-10">
      <div className="w-9/12 flex flex-wrap">
        <div className="xl:w-8/12 w-7/12 mb-4">
          <div className="mr-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Select
            </label>
            <div>
              <TopDropdown
                handleClick={handleClient}
                roundType="full"
                placeholder="Select Client"
                data={clients}
              />
            </div>
          </div>
        </div>
        <div className="xl:w-4/12 w-5/12 mb-4">
          <div className="mr-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Invoice Date
            </label>
            <input
              onChange={(e) => handleInvoiceDate(e.target.value)}
              type="date"
              placeholder="Invoice Date"
              className="border border-gray-300 outline-none px-4 py-3 text-gray-900 text-sm rounded-full block w-full"
            />
          </div>
        </div>
        <div className="xl:w-3/12 w-4/12">
          <div className="mr-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Trip
            </label>
            <div>
              <TopDropdown
                handleClick={handleTrip}
                roundType="full"
                placeholder="T2390"
                data={trips}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/12 mb-4">
        <div className="xl:w-48 w-36  float-right">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Plane Images
          </label>
          <label className="relative flex flex-col items-center justify-center border-2 border-gray-300 border-dashed cursor-pointer xl:w-48 w-36 xl:h-32 h-24">
            {values.planeImages && (
              <img
                className="w-full h-full object-cover absolute left-0 right-0 top-0 bottom-0 z-20"
                src={values.planeImages}
                alt=""
              />
            )}
            <div className="flex items-center gap-2 justify-center p-5 relative">
              <Image
                width={30}
                height={30}
                className="mb-3 text-gray-400"
                src="/images/upload.png"
                alt=""
              />
              <p className="mb-2 text-sm text-sky-300 font-semibold ">
                Upload Plane Image
              </p>
            </div>
            <input type="file" className="hidden" onChange={handleChange} />
          </label>
        </div>
      </div>
    </div>
  );
}
