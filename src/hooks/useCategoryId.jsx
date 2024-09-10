import { useEffect, useState } from "react";
import { categoryProduct } from "../services/products";

export const useCategoryId = ({ id }) => {
  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //setDataProducts(resp.products)
  useEffect(() => {
    categoryProduct({ id })
      .then((resp) => setDataProducts(resp.products))
      .catch(console.error)
      .finally(setLoading(false));
  }, [id]);

  return { dataProducts, loading };
};
