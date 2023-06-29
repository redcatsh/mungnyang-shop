import React from "react";

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}
