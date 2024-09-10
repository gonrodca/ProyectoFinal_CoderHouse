import React from "react";
import { ItemListContainer } from "../components";
import { useProducts } from "../hooks/useProducts";

export const Home = () => {
  const { dataProducts, loading } = useProducts();
  return <ItemListContainer products={dataProducts}>Home</ItemListContainer>;
};
