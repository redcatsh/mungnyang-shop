import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "./context/AuthContext";

export default function Header() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between py-4 px-6 items-center fixed top-0 w-full z-50 bg-white">
      <Link to="/" className="flex items-center justify-center text-black">
        <div>
          <MdOutlinePets className="text-2xl mr-1" />
        </div>
        <div className="font-['Raleway'] text-2xl font-light">MungNyang</div>
      </Link>
      <div>
        <nav>
          <ul className="flex gap-7 font-['Raleway'] font-light items-center">
            <Link to="/products" className="uppercase">
              Products
            </Link>
            {user ? (
              <Link to="/cart">
                <BiShoppingBag />
              </Link>
            ) : (
              ""
            )}
            {user && user.isAdmin ? (
              <Link to="products/new">
                <BsPencil />
              </Link>
            ) : (
              ""
            )}

            {user && <User user={user} />}
            {!user && <Button onClick={login} text={"Login"} />}
            {user && <Button onClick={logout} text={"Logout"} />}
          </ul>
        </nav>
      </div>
    </header>
  );
}
