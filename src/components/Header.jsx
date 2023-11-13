import React, { useRef } from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart copy.svg";
import man from "../assets/image-avatar.png";
import Cart from "./Cart";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";

function Header({ show, setshow, added, setadded, count }) {
  const items = ["Collections", "Men", "Women", "About", "Contact"];
  const list = useRef(null);
  const wrap = useRef(null);

  function toggle() {
    let temp = wrap.current.classList;
    temp.remove("hidden");
    temp.add("block");
    list.current.classList.add("w-[250px]");
  }
  function closemenu() {
    let temp = wrap.current.classList;
    temp.remove("block");
    temp.add("hidden");
    list.current.classList.remove("w-[250px]");
  }

  return (
    <div className="lg:mx-40 md:mx-20 sm:mx-16 mx-10 h-20 flex justify-between border-b border-gray-300 border-solid">
      <div className="flex">
        <span>
          <img
            src={menu}
            alt="menu"
            className="mt-3 pr-9 md:hidden"
            onClick={() => toggle()}
          />
        </span>
        <span>
          <img src={logo} className="mt-2  lg:pr-14 md:pr-11 pr-9" />
        </span>
        <span
          ref={wrap}
          className="z-20 hidden md:inline-flex md:w-0 w-screen bg-black  h-[987px] absolute left-0 top-0 md:static md:h-full bg-opacity-50"
        >
          <ul
            ref={list}
            className="md:inline-flex pt-2 flex md:flex-row flex-col lg:gap-8 md:gap-4 gap-3 text-base text-gray-500 font-normal bg-white md:bg-transparent h-[987px] md:h-auto  pl-[25px] md:pl-0 opacity-1"
          >
            <span>
              <img
                src={close}
                className="pb-[53px] pt-[10px] md:hidden"
                onClick={() => closemenu()}
              />
            </span>
            {items.map((el) => (
              <li className="hover:border-b-4 border-orange-500 border-solid hover:text-slate-900 hover:cursor-pointer">
                {el}
              </li>
            ))}
          </ul>
        </span>
      </div>
      <div className="flex items-center lg:gap-11 gap-9 h-12 w-[114px]">
        <span className="relative">
          {added && count > 0 ? (
            <div className="absolute -top-1.5 -right-2.5 w-5 h-3.5 bg-[#FF7E1B] rounded-md flex items-center justify-center text-[#FFF] text-xs foont-bold">
              {count}
            </div>
          ) : (
            <></>
          )}
          <img
            src={cart}
            className=" hover:cursor-pointer"
            onClick={() => {
              setshow(!show);
            }}
          />
          <Cart show={show} added={added} setadded={setadded} count={count} />
        </span>
        <img src={man} className="w-12 h-12 hover:cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
