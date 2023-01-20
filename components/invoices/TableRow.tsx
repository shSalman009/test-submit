import Image from "next/image";
import BottomDropdown from "./BottomDropdown";
interface Data {
  productsType: [];
  products: [];
}

interface Value {
  id: number;
  productType: string;
  product: string;
  description: string;
  price: string;
}

export default function TableRow({
  removeRow,
  data,
  handleProductsType,
  handleProducts,
  value,
}: {
  removeRow: (id: number) => void;
  data: object;
  handleProductsType: (e: string, id: number) => void;
  handleProducts: (e: string, id: number) => void;
  value: object;
}) {
  const { id, product, productType, description, price } = value as Value;

  const { products, productsType } = data as Data;
  return (
    <tr className="bg-white">
      <td className="w-2/12 px-3 py-4">
        <div className="w-full">
          <BottomDropdown
            handleClick={handleProductsType}
            data={productsType}
            id={id}
            value={productType}
          />
        </div>
      </td>
      <td className="w-3/12 px-3 py-4">
        <div className="w-full">
          <BottomDropdown
            handleClick={handleProducts}
            data={products}
            id={id}
            value={product}
          />
        </div>
      </td>
      <td className="w-4/12 px-3 py-4">
        <div>
          <input
            className="w-full border border-gray-300 outline-none px-4 py-3 text-gray-900 text-sm rounded-lg block"
            type="text"
            value={description}
            readOnly
          />
        </div>
      </td>
      <td className="w-3/12 px-3 py-4">
        <div className="flex justify-end items-center gap-2">
          <input
            type="text"
            className="w-full xl:ml-20 ml-10 border border-gray-300 outline-none px-4 py-3 text-gray-900 text-sm rounded-lg block"
            value={price}
            readOnly
          />
          <div
            onClick={() => {
              removeRow(id);
            }}
            className="bg-red-200 p-3 cursor-pointer select-none rounded-xl hover:bg-red-300"
          >
            <Image
              width={30}
              height={30}
              src="/images/delete.svg"
              alt="delete icon"
            />
          </div>
        </div>
      </td>
    </tr>
  );
}
