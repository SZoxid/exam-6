import { useState } from "react";

const Ordertop = () => {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <>
      <div className="w-[360px] m-auto mt-[25px]">
        <div>
          <p className="font-semibold font-sans text-[22px] text-[#fff]">
            Orders #34562{" "}
          </p>
        </div>
        <div className="flex gap-[8px] mt-[25px]">
          <ul className=" flex items-center gap-[8px]">
            <li
              className={`${
                activeItem === 1
                  ? "flex items-center justify-center w-[80px] h-[43px] text-white text-[14px] font-sans font-semibold rounded-[8px] bg-[#EA7C69]"
                  : "flex items-center justify-center w-[80px] h-[43px] text-[#ABBBC2] text-[14px] font-sans font-semibold rounded-[8px] border border-[#ABBBC2]"
              }`}
              onClick={() => setActiveItem(1)}
            >
              Dine In
            </li>
            <li
              className={`${
                activeItem === 2
                  ? "flex items-center justify-center w-[80px] h-[43px] text-white text-[14px] font-sans font-semibold rounded-[8px] bg-[#EA7C69]"
                  : "flex items-center justify-center w-[80px] h-[43px] text-[#ABBBC2] text-[14px] font-sans font-semibold rounded-[8px] border border-[#ABBBC2]"
              }`}
              onClick={() => setActiveItem(2)}
            >
              To Go
            </li>
            <li
              className={`${
                activeItem === 3
                  ? "flex items-center justify-center w-[80px] h-[43px] text-white text-[14px] font-sans font-semibold rounded-[8px] bg-[#EA7C69]"
                  : "flex items-center justify-center w-[80px] h-[43px] text-[#ABBBC2] text-[14px] font-sans font-semibold rounded-[8px] border border-[#ABBBC2]"
              }`}
              onClick={() => setActiveItem(3)}
            >
              Delivery
            </li>
          </ul>
        </div>
        <div className="flex justify-between text-[18px] text-[#fff] font-semibold font-sans mt-[25px]">
          <p>Item</p>
          <div className="flex gap-[50px]">
            <p>Qty</p>
            <p>Price</p>
          </div>
        </div>
        <hr className="mt-[25px]" />
      </div>
    </>
  );
};

export default Ordertop;
