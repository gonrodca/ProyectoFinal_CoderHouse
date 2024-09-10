import React from "react";
import { useSingleProduct } from "../hooks";
import { useParams } from "react-router";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";

export const Item = () => {
  const { id } = useParams();
  const { product, loading } = useSingleProduct({ id });
  return <ItemDetailContainer product={product}></ItemDetailContainer>;
};
