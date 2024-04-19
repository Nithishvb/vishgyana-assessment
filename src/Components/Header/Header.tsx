import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useCart } from "../../context/context";
import { Link } from "react-router-dom";

const Header = () => {
  const { state } = useCart();

  return (
    <div className="flex items-center justify-between py-6 bg-gray-300 lg:px-10 px-4">
      <div>
        <h2 className="text-red-500 font-bold text-xl">LOGO</h2>
      </div>
      <div>
        <div className="cursor-pointer relative flex gap-6">
          <Link to={"/cart"}>
            <FaShoppingCart className="text-gray-700" size={25} />
            {state.cart.length > 0 && (
              <span className="absolute top-[-10px] left-[7px] bg-pink-300 text-black text-center rounded-full text-xs w-[18px] h-[17px] ">
                {state.cart.length}
              </span>
            )}
          </Link>
          <div>
            <IoSettingsSharp className="text-gray-700" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
