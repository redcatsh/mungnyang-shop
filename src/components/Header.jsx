import React, { useEffect, useState } from "react";
import { MdOutlinePets } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";
import Button from "./ui/Button";

export default function Header() {
  const [user, setUser] = useState();

  // 이전에 로그인한 세션 저장
  useEffect(() => {
    // onUserStateChange((user) => {
    //   setUser(user);
    // });

    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    }); // 인자값이 같으면 참조값만 전달해도 됨!
  }, []);

  return (
    <header className="flex justify-between py-4 px-6 items-center">
      <Link to="/" className="flex items-center justify-center text-brand">
        <div>
          <MdOutlinePets className="text-2xl mr-1" />
        </div>
        <div className="font-['Cherry_Bomb_One'] text-2xl">MungNyang</div>
      </Link>
      <div>
        <nav>
          <ul className="flex gap-7 font-['Poppins'] font-light items-center">
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
