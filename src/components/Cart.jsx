import React from "react";
import p1t from "../assets/image-product-1-thumbnail.jpg";
import del from "../assets/icon-delete.svg";

function Cart({ show, added, setadded, count }) {
  return show ? (
    <div className="absolute top-[40px] -right-[84px] w-360 h-64 rounded-lg shadow shadow-[#1d2026] bg-white">
      <p className="p-6 text-[#1D2026] font-bold text-base">Cart</p>
      <hr />
      <div className="flex justify-center items-center h-44">
        {added ? (
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <img
                src={p1t}
                alt="product pic"
                className="w-14 h-14 rounded-lg"
              />
              <div className="text-[#69707D] text-base leading-6 font-normal">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {count}
                  <span className="text-[#1D2026] font-bold">
                    {" "}
                    ${125 * count}
                  </span>
                </p>
              </div>
              <span>
                <img src={del} alt="delete" onClick={() => setadded(false)} />
              </span>
            </div>
            <button className="w-80 h-14 bg-[#FF7E1B] rounded-lg text-[#FFF] font-bold font-base hover:cursor:pointer">
              Checkout
            </button>
          </div>
        ) : (
          <p className="text-[#69707D] text-base font-bold leading-6">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Cart;
