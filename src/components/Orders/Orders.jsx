import React from "react";
import data1 from "../../data.json";
import { AiOutlineDelete } from "react-icons/ai";

const Orders = () => {
  const { data } = data1;
  return (
    <>
      <div className="w-[360px] h-[53%] m-auto mt-7 overflow-scroll ">
        {data.map((product, index) => (
          <div className="w-[100%] h-[125px] mt-5">
            <div>
              <div className="flex items-center">
                <div className="flex items-center w-[235px]">
                  <img
                    src={product.image}
                    alt="img"
                    className="w-[45px] h-[45px] rounded-[50%]"
                  />
                  <div className="ml-2">
                    <h3 className="text-[14px] text-[#fff] font-sans font-medium">
                      {product.name}
                    </h3>
                    <p className="text-[13px] text-[#ABBBC2] font-sans font-medium">
                      {product.price}
                    </p>
                  </div>
                </div>
                <div className="w-[120px] flex items-center justify-between ">
                  <button className="flex justify-center items-center w-[50px] h-[50px] border border-[#393C49] bg-[#393C49] rounded-lg text-[16px] text-[#fff]">
                    2
                  </button>
                  <h3 className="text-[16px] text-[#fff] font-sans font-medium">
                    {product.price}
                  </h3>
                </div>
              </div>
              <div className="flex justify-between mt-[8px]">
                <input
                  type="text"
                  placeholder="Order Note..."
                  className="w-[285px] h-[50px] rounded-lg bg-[#393C49] outline-none p-[15px] text-[#E0E6E9]"
                />
                <button className="flex justify-center items-center w-[50px] h-[50px] border border-[#EA7C69] rounded-lg">
                  <AiOutlineDelete className="w-[25px] h-[23px] text-[#EA7C69]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;
