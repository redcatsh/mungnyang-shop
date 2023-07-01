import React from "react";
import { useLocation } from "react-router-dom";
import { PriceReg } from "../commons/util";
import { ScrollRestoration } from "react-router-dom";
import "../styles/Detail.css";

export default function ProductDetail() {
  const {
    state: {
      product: { image, title, description, category, price, option },
    },
  } = useLocation();
  return (
    <section className="pt-[100px] pb-24 max-w-[1200px] mx-auto pr-16 pl-16">
      <ScrollRestoration />
      <div className="flex flex-row flex-wrap">
        <div className="basis-[100%] sm:basis-[55%]">
          <img src={image} alt={title} />
        </div>
        <div className="ml-10 flex-1">
          <p className="text-gray-500 text-sm mb-1">{category}</p>
          <h5 className="text-2xl font-medium mb-2">{title}</h5>
          <p className="text-xl font-medium mb-5">₩{PriceReg(price)}</p>

          <p className="text-lg pt-4 desc mb-5">{description}</p>
          <div>
            <select
              name="size"
              id="size-select"
              className="uppercase text-lg mb-7 p-1 w-full outline-none optionBox"
            >
              <option value="small">{option[0]}</option>
              <option value="medium">{option[1]}</option>
              {option[2] ? <option value="large">{option[2]}</option> : ""}
            </select>
          </div>

          <button className="font-medium text-lg w-full uppercase bg-brand text-white py-3 px-4 rounded-sm hover:brightness-110">
            장바구니에 추가
          </button>
        </div>
      </div>
    </section>
  );
}
