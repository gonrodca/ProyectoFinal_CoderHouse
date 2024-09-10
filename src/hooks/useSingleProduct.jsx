import { useEffect, useState } from "react";
import { singleProduct } from "../services/singleProduct";

export const useSingleProduct = ({ id }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  // setProduct(res)
  useEffect(() => {
    singleProduct({ id })
      .then((res) => {
        setProduct(res);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { product, loading };
};
