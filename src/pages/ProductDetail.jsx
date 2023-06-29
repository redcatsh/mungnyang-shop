import React from "react";
import { useLocation } from "react-router-dom";
import { PriceReg } from "../commons/util";
import Button from "../components/ui/Button";

export default function ProductDetail() {
  const {
    state: {
      product: { image, title, description, category, price, option },
    },
  } = useLocation();
  return (
    <section className="pt-[72px]">
      <div className="flex flex-row">
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
          <p>{category}</p>
          <h5>{title}</h5>
          <p>₩{PriceReg(price)}</p>

          <p>{description}</p>
          <div>
            <select name="size" id="size-select">
              <option value="small">{option[0]}</option>
              <option value="medium">{option[1]}</option>
              {option[2] ? <option value="large">{option[2]}</option> : ""}
            </select>
          </div>

          <Button text="장바구니에 추가" />
        </div>
      </div>
    </section>
  );
}
