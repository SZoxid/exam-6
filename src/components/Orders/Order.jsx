import React from 'react'
import Ordertop from './Ordertop'
import Orders from './Orders'
import Orderbottom from './Orderbottom'

const Order = () => {
  return (
    <div className=" relative flex flex-col justify-between w-[420px] h-[900px] bg-[#1F1D2B]">
      <Ordertop />
      <Orders />
      <Orderbottom />

    </div>
  );
}

export default Order
