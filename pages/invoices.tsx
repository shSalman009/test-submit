import Bottom from "@/components/invoices/InvoiceBottom";
import Top from "@/components/invoices/InvoiceTop";
import useInvoice from "@/hooks/useInvoice";
import { data } from "@/utils/Data.js";

export default function Invoices() {
  const {
    handleProductsType,
    handleProducts,
    addRow,
    removeRow,
    values,
    handleClient,
    handleTrip,
    handleInvoiceDate,
    handlePlaneImages,
    handleSubmit,
  } = useInvoice();
  return (
    <div className="w-full">
      <div className="my-6">
        <h4 className="text-2xl font-semibold mb-2">Invoices</h4>
        <p className="text-gray-500">Invoices / New Invoice</p>
      </div>
      <Top
        data={data}
        handleClient={handleClient}
        handleTrip={handleTrip}
        handleInvoiceDate={handleInvoiceDate}
        handlePlaneImages={handlePlaneImages}
        values={values}
      />
      <Bottom
        data={data}
        handleProductsType={handleProductsType}
        handleProducts={handleProducts}
        addRow={addRow}
        removeRow={removeRow}
        values={values}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
