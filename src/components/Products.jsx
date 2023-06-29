import React from "react";
import { getProducts } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>error</p>}
      <div className="pt-[72px] pr-9 pl-9 grid grid-cols-[repeat(auto-fill,minmax(320px,_1fr))] gap-6 pb-10">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
