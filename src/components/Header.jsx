import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-4">
      <Link to="/" className="flex items-center justify-center">
        <div>
          <MdOutlinePets />
        </div>
        <div className="font-['Cherry_Bomb_One']">MungNyang</div>
      </Link>
      <div>
        <nav>
          <ul className="flex gap-4 font-['Poppins']">
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="products/new">
              <BsPencil />
            </Link>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
