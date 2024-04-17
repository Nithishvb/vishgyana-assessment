import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-6 bg-gray-300 px-10">
        <div>
            <h2 className="text-red-500 font-bold text-xl">LOGO</h2>
        </div>
        <div>
            <div className="cursor-pointer relative">
                <FaShoppingCart className="text-gray-700" size={25} />
                <span className="absolute top-[-10px] left-[7px] bg-pink-300 text-black text-center rounded-full text-xs w-[18px] h-[17px] ">2</span>
            </div>
        </div>
    </div>
  )
}

export default Header;