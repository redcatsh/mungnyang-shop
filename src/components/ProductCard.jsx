import React from "react";
import { PriceReg } from "../commons/util";

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <div>
      <img src={image} alt={title} />
      <h3 className="mt-4">{title}</h3>
      <p className="mt-2">₩{PriceReg(price)}</p>
    </div>
  );
}
