import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { login } from "../api/firebase";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-6 items-center">
      <Link to="/" className="flex items-center justify-center">
        <div>
          <MdOutlinePets className="text-2xl mr-1" />
        </div>
        <div className="font-['Cherry_Bomb_One'] text-2xl">MungNyang</div>
      </Link>
      <div>
        <nav>
          <ul className="flex gap-7 font-['Poppins'] uppercase font-light">
            <Link to="/products">Products</Link>
            <Link to="/cart">
              <BiShoppingBag />
            </Link>
            <Link to="products/new">
              <BsPencil />
            </Link>
            <button onClick={login}>Login</button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
