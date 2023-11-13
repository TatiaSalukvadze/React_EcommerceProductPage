import React, { useState } from "react";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import cart from "../assets/icon-cart.svg";

function Text({ count, setCount, setadded }) {
  function sub() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function add() {
    setCount(count + 1);
  }

  function addtocart() {
    if (count > 0) {
      setadded(true);
    } else {
      alert("choose more than 0!");
    }
  }
  // min-[1175px]:w-445 min-[175px]:w-96
  return (
    <div className="md:mt-36 mt-12 xl:w-445 lg:w-96 sm:w-445 w-[327px]">
      <p className="text-sm font-bold tracking-widest text-orange-500 pb-5">
        Sneaker Company
      </p>
      <h1 className="text-4xl font-bold leading-10 text-[#1D2026] pb-6">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-base font-normal leading-7 text-[#69707D] pb-6">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div>
        <div className="flex gap-4 items-center mb-2.5">
          <p className="text-2xl font-bold text-[#1D2026]">$125.00</p>
          <div className="w-12 h-6 bg-[#FFEEE2] flex justify-center items-center text-base font-bold text-[#FF7E1B]">
            50%
          </div>
        </div>
        <p className="text-base font-bold text-[#B6BCC8] leading-6 line-through pb-6">
          $250.00
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-4">
        <div className="xl:w-36 lg:w-32 md:w-28 w-[327px] h-12 bg-[#F6F8FD] flex justify-between items-center p-4 rounded-lg">
          <img
            src={minus}
            className="w-3 h-1 hover:cursor-pointer"
            onClick={() => sub()}
          />
          <p className="text-base font-bold text-[#1D2026]">{count}</p>
          <img
            src={plus}
            className="w-3 h-3 hover:cursor-pointer"
            onClick={() => add()}
          />
        </div>

        <div
          className="xl:w-64 lg:w-52 md:w-44 w-[327px] h-12 flex items-center justify-center bg-[#FF7E1B] text-white text-base font-bold rounded-lg shadow shadow-[#FF7E1B] hover:cursor-pointer hover:bg-[#FFAB6A]"
          onClick={() => addtocart()}
        >
          <img src={cart} alt="cart" className="w-4 h-4 fill-white pr-1" />
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
}

export default Text;
