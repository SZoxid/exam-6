import React from "react";
import data1 from "../../data.json";

const Menucomp = () => {
  const { data } = data1;
  return (
    <>
      <div className=" overflow-hidden">
        <div className="grid grid-cols-4 w-[100%] h-[640px] gap-[28px] mt-[22px] overflow-scroll">
          {data.map((product, index) => (
            <div className="flex flex-col items-center w-[190px] h-[240px] rounded-xl mt-[55px] bg-[#1F1D2B] gap-[5] hover:w-[195px] hover:h-[245px] hover:mb-[-5px]">
              <img
                src={product.image}
                alt="img"
                className="w-[130px] h-[130px] mt-[-40px] rounded-[50%]"
              />
              <h1 className="text-[15px] text-[#fff] w-[80%] font-medium text-center mt-[18px]">
                {product.name}
              </h1>
              <p className="text-[15px] text-[#3B5162] font-normal mt-[10px]">
                {product.price}
              </p>
              <p className="text-[15px] text-[#ABBBC2] font-normal mt-[10px]">
                {product.caterogy}
              </p>
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default Menucomp;
