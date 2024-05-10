import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className=" font-semibold font-sans text-[30px] text-[#fff]">
            Jaegar Resto
          </h1>
          <p className=" font-normal font-sans text-[18px] text-[#fff]">
            Tuesday, 2 Feb 2021
          </p>
        </div>
        <div className="flex items-center w-[240px] h-[53px] rounded-lg bg-[#393C49] border border-[#4e515e] gap-2">
          <button>
            <FiSearch className="text-[#fff] ml-4" />
          </button>
          <input
            type="text"
            placeholder="Search for food, coffe, etc..."
            className=" outline-none bg-[#393C49] text-[#fff]"
          />
        </div>
      </div>
      <div className="mt-[25px]">
        <ul className=" flex items-center gap-[35px]">
          <li
            className={`${
              activeItem === 1
                ? "text-[#EA7C69] text-[15px] font-sans font-semibold border-bottom"
                : "text-[#fff] text-[15px] font-sans font-semibold"
            }`}
            onClick={() => setActiveItem(1)}
          >
            Hot Dishes
          </li>
          <li
            className={`${
              activeItem === 2
                ? "text-[#EA7C69] text-[15px] font-sans font-semibold border-bottom"
                : "text-[#fff] text-[15px] font-sans font-semibold"
            }`}
            onClick={() => setActiveItem(2)}
          >
            Cold Dishes
          </li>
          <li
            className={`${
              activeItem === 3
                ? "text-[#EA7C69] text-[15px] font-sans font-semibold border-bottom"
                : "text-[#fff] text-[15px] font-sans font-semibold"
            }`}
            onClick={() => setActiveItem(3)}
          >
            Soup
          </li>
          <li
            className={`${
              activeItem === 4
                ? "text-[#EA7C69] text-[15px] font-sans font-semibold border-bottom"
                : "text-[#fff] text-[15px] font-sans font-semibold"
            }`}
            onClick={() => setActiveItem(4)}
          >
            Grill
          </li>
          <li
            className={`${
              activeItem === 5
                ? "text-[#EA7C69] text-[15px] font-sans font-semibold border-bottom"
                : "text-[#fff] text-[15px] font-sans font-semibold"
            }`}
            onClick={() => setActiveItem(5)}
          >
            Appetizer
          </li>
          <li
            className={`${
              activeItem === 6
                ? "text-[#EA7C69] text-[15px] font-sans font-semibold border-bottom"
                : "text-[#fff] text-[15px] font-sans font-semibold"
            }`}
            onClick={() => setActiveItem(6)}
          >
            Dessert
          </li>
        </ul>
      </div>
      <div className="mt-[15px]">
        <hr className="" />
      </div>
      <div className="flex justify-between items-center mt-[25px] ">
        <h1 className="text-[20px] text-[#fff] font-semibold ">
          Choose Dishes
        </h1>
        <select
          name=""
          id=""
          className="w-[110px] h-[50px] bg-[#1F1D2B] text-[#fff] p-3 rounded-lg outline-none"
        >
          <option value="">Dine In</option>
          <option value="">To Go</option>
          <option value="">Delivery</option>
        </select>
      </div>
    </>
  );
};

export default Navbar;
