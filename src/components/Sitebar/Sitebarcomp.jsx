import React from "react";
import Logo from "../../imgs/Logo.svg";
import Home from "../../imgs/Home.png";
import Divide from "../../imgs/divide.png";
import Graphick from "../../imgs/Graph.png";
import Message from "../../imgs/Message.png";
import Kalakol from "../../imgs/Notification.png";
import Setting from "../../imgs/Setting.png";
import Logout from "../../imgs/Logout.png";

const Sitebarcomp = () => {
  return (
    <>
      <div className="flex flex-col justify-around items-center w-[100%] h-[100%] bg-[#1F1D2B]">
        <img src={Logo} alt="img" className="w-[58px] h-[58px]" />
        <div className="flex justify-center items-center w-[58px] h-[58px] border border-[#EA7C69] bg-[#EA7C69] rounded-[8px] ">
          <img src={Home} alt="img" className="w-[25px] h-[25px]" />
        </div>
        <img src={Divide} alt="img" className="w-[30px] h-[30px]" />
        <img src={Graphick} alt="img" className="w-[25px] h-[25px]" />
        <img src={Message} alt="img" className="w-[25px] h-[25px]" />
        <img src={Kalakol} alt="img" className="w-[25px] h-[25px]" />
        <img src={Setting} alt="img" className="w-[25px] h-[25px]" />
        <img src={Logout} alt="img" className="w-[25px] h-[25px]" />
      </div>
    </>
  );
};

export default Sitebarcomp;
