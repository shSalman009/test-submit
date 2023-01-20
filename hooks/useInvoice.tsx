import { data } from "@/utils/Data";
import { useEffect, useState } from "react";

export default function useInvoice() {
  // Invoice Data
  const { products, productsType } = data;

  // Invoice States
  const [nextId, setNextId] = useState(2);
  const [values, setValues] = useState({
    client: "",
    trip: "",
    invoiceDate: "",
    planeImages: "",
    total: 0,
    subTotal: 0,
    productsLength: 1,
    products: [
      {
        id: 1,
        productType: productsType[0].name,
        product: products[0].name,
        description: "No Description",
        price: products[0].price,
      },
    ],
  });

  // Calculate Total and SubTotal
  useEffect(() => {
    let total = 0;
    let subTotal = 0;
    values.products.forEach((product) => {
      total += product.price;
      subTotal += product.price;
    });
    setValues({ ...values, total, subTotal });
  }, [values.products]);

  // Add Row to TableW
  const addRow = () => {
    setValues({
      ...values,

      productsLength: values.productsLength + 1,
      products: [
        ...values.products,
        {
          id: nextId,
          productType: productsType[0].name,
          product: products[0].name,
          description: "",
          price: products[0].price,
        },
      ],
    });
    setNextId(nextId + 1);
  };

  // Remove Row from Table
  const removeRow = (id: number) => {
    if (values.productsLength > 1) {
      const newProducts = values.products.filter(
        (product) => product.id !== id
      );

      setValues((prev) => ({
        ...prev,
        products: newProducts,
        productsLength: prev.productsLength - 1,
      }));
    }
  };

  // Handle Client, Trip, Invoice Date, Plane Images
  const handleClient = (e: string) => {
    setValues((prevState) => {
      return {
        ...prevState,
        client: e,
      };
    });
  };
  const handleTrip = (e: string) => {
    setValues({ ...values, trip: e });
  };
  const handleInvoiceDate = (e: string) => {
    setValues({ ...values, invoiceDate: e });
  };
  const handlePlaneImages = (e: any) => {
    setValues({ ...values, planeImages: e });
  };

  // Handle Products Type and Products
  const handleProductsType = (e: string, id: number) => {
    const newProducts = values.products.map((product) => {
      if (product.id === id) {
        return { ...product, productType: e };
      }
      return product;
    });
    setValues({ ...values, products: newProducts });
  };

  const handleProducts = (e: string, id: number) => {
    const newProducts = values.products.map((product) => {
      if (product.id === id) {
        const productPrice = products.find(
          (product) => product.name === e
        )?.price;

        return {
          ...product,
          product: e,
          price: productPrice ? productPrice : 0,
        };
      }
      return product;
    });

    setValues({ ...values, products: newProducts });
  };

  //  Handle Submit Form
  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/api/submit-form", {
      method: "POST",
      body: JSON.stringify(values),
    });

    const result = await response.json();

    alert("Invoice Created Successfully" + result.data);

    setValues({
      client: "",
      trip: "",
      invoiceDate: "",
      planeImages: "",
      total: 0,
      subTotal: 0,
      productsLength: 1,
      products: [
        {
          id: 1,
          productType: productsType[0].name,
          product: products[0].name,
          description: "",
          price: products[0].price,
        },
      ],
    });
  };

  return {
    values,
    handleClient,
    handleTrip,
    handleInvoiceDate,
    handlePlaneImages,
    handleProductsType,
    handleProducts,
    addRow,
    removeRow,
    handleSubmit,
  };
}
