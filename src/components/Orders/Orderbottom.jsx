import { useState } from "react";

const Orderbottom = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="overflow-hidden">
      <div className="w-[360px] ml-auto mr-auto">
        <hr />
        <div className="flex justify-between mt-[25px]">
          <p className=" font-normal text-[15px] text-[#ABBBC2]">Discount</p>
          <p className=" font-medium text-[16px] text-[#fff]">$0</p>
        </div>
        <div className="flex justify-between mt-[18px]">
          <p className=" font-normal text-[15px] text-[#ABBBC2]">Sub total</p>
          <p className="font-medium text-[16px] text-[#fff]"> $ 21,03</p>
        </div>
        <div className="flex mt-[45px]">
          <button
            className="w-[360px] h-[55px] bg-[#EA7C69] rounded-lg text-[15px] text-[#fff] font-semibold"
            onClick={() => setActive(true)}
          >
            Continue to Payment
          </button>
        </div>
        <div></div>
      </div>
      <div
        style={
          active
            ? { transform: "translateX(0)", height: "100%" }
            : { transform: "translateX(130%)", display: "none" }
        }
        className={
          " absolute rigth-0 top-0 z-[10] w-[410px] h-[900px] border bg-[#1F1D2B]"
        }
      >
        <div className=" mt-[65px] ml-[25px]">
          <h1 className="text-[29px] text-[#fff] font-semibold">Payment</h1>
          <p className="text-[17px] text-[#fff] font-normal">
            3 payment method available
          </p>
        </div>
        <div className=" mt-[25px] ml-[25px]">
          <h2 className="text-[20px] text-[#fff]">Payment Method</h2>
          <div className="flex mt-[15px] gap-[15px] w-[290px] border text-[#fff]">
            <button className="w-[110px] h-[55px] border rounded-[8px] ">
              Credit Card
            </button>
            <button className="w-[110px] h-[55px] border rounded-[8px]">
              Paypal
            </button>
            <button className="w-[110px] h-[55px] border rounded-[8px]">
              Cash
            </button>
          </div>
        </div>
        <div className=" mt-[25px] ml-[25px] w-[360px]">
          <p className="text-[14px] text-[#fff] font-medium">Cardholder Name</p>
          <input
            type="text"
            placeholder="Levi Ackerman"
            className="w-[100%] h-[50px] rounded-[8px] bg-[#393C49] p-5 mt-2"
          />
          <p className="text-[14px] text-[#fff] font-medium mt-5">
            Card Number
          </p>
          <input
            type="number"
            placeholder="2564 1421 0897 1244"
            className="w-[100%] h-[50px] rounded-[8px] bg-[#393C49] p-5 mt-2"
          />
          <div className=" flex mt-[25px] items-center justify-between">
            <div>
              <p className="text-[14px] text-[#fff] font-medium mt-5">
                Expiration Date
              </p>
              <input
                type="date"
                placeholder="02/2022"
                className="w-[45%] h-[50px] rounded-[8px] bg-[#393C49] p-5 mt-2"
              />
            </div>
            <div>
              <p className="text-[14px] text-[#fff] font-medium">CVV</p>
              <input
                type="password"
                placeholder="..."
                className="w-[48%] h-[50px] rounded-[8px] bg-[#393C49] p-5 mt-2"
              />
            </div>
          </div>
          <hr />
          <div>
            <div>
              <p className="text-[14px] text-[#fff] font-medium">Order Type</p>
              <button></button>
            </div>
            <div>
              <p className="text-[14px] text-[#fff] font-medium">Table no.</p>
              <p className="text-[14px] text-[#fff] font-medium">140</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Orderbottom;
