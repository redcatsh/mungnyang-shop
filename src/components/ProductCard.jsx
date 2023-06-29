import React from "react";
import { PriceReg } from "../commons/util";
import { useNavigate } from "react-router-dom";
import "../styles/Card.css";

export default function ProductCard({ product: { id, image, title, price } }) {
  const navigate = useNavigate();
  return (
    <li
      className="card cursor-pointer overflow-hidden"
      onClick={() => {
        navigate(`/products/${id}`);
      }}
    >
      <div className="overflow-hidden">
        <img src={image} alt={title} />
      </div>
      <div>
        <h3 className="mt-4">{title}</h3>
        <p className="mt-2">₩{PriceReg(price)}</p>
      </div>
    </li>
  );
}
