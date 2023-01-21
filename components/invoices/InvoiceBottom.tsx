import TableRow from "./TableRow";
interface Products {
  id: number;
  productType: string;
  product: string;
  description: string;
  price: number;
}
export default function InvoiceBottom({
  data,
  handleProductsType,
  handleProducts,
  addRow,
  removeRow,
  handleSubmit,
  values,
}: {
  data: object;
  handleProductsType: (e: string, id: number) => void;
  handleProducts: (e: string, id: number) => void;
  handleSubmit: () => void;
  addRow: () => void;
  removeRow: (id: number) => void;
  values: {
    client: string;
    trip: string;
    invoiceDate: string;
    planeImages: any;
    productsLength: number;
    total: number;
    subTotal: number;
    products: Products[];
  };
}) {
  return (
    <div className="bg-white w-full rounded-xl pt-10 mb-10">
      <div className="relative w-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase border-b">
            <tr>
              <th scope="col" className="p-3">
                <div className="flex items-center">
                  Products Type
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="p-3">
                <div className="flex items-center">
                  Products
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="p-3">
                <div className="flex items-center">Description</div>
              </th>
              <th scope="col" className="p-3">
                <div className="flex items-center ml-20">Total</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {values.products.map((item) => (
              <TableRow
                handleProductsType={handleProductsType}
                handleProducts={handleProducts}
                data={data}
                removeRow={removeRow}
                value={item}
                key={item.id}
              />
            ))}
          </tbody>
        </table>
        <div className="w-full border-b text-start px-6 py-3">
          <button onClick={addRow} className="text-sky-500 font-semibold">
            + Add Product
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3 items-end justify-center px-6 py-4 border-b">
        <div className="flex">
          <p className="mr-5 w-40 text-end font-semibold text-black">
            Subtotal:
          </p>
          <p className="mr-5 w-40 text-end text-gray-500 font-semibold">
            {values.subTotal}
          </p>
        </div>
        <div className="flex">
          <p className="mr-5 w-40 text-end font-semibold text-black">PVA:</p>
          <p className="mr-5 w-40 text-end text-gray-500 font-semibold">0000</p>
        </div>
      </div>

      <div className="flex justify-between items-center p-6">
        <div className="flex justify-start items-center gap-4">
          <button
            onClick={handleSubmit}
            type="button"
            className="text-white bg-sky-300 hover:bg-sky-400 focus:outline-none focus:ring-4 focus:ring-blue-400 font-medium rounded-full text-sm px-6 py-3 text-center mr-2 mb-2"
          >
            Save
          </button>
          <button
            type="button"
            className="border hover:bg-gray-200 text-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-3 text-center mr-2 mb-2"
          >
            Cancel
          </button>
        </div>{" "}
        <div className="flex">
          <p className="mr-5 w-40 text-end font-semibold text-sky-300">
            Total:
          </p>
          <p className="mr-5 w-40 text-end text-primary-blue font-semibold">
            {values.total}
          </p>
        </div>
      </div>
    </div>
  );
}
