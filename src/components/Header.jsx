import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { BsPencil } from "react-icons/bs";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-4">
      <div className="flex items-center justify-center">
        <div>
          <MdOutlinePets />
        </div>
        <div>MungNyang</div>
      </div>
      <div>
        <nav>
          <ul className="flex gap-4">
            <li>Products</li>
            <li>Cart</li>
            <li>
              <BsPencil />
            </li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
