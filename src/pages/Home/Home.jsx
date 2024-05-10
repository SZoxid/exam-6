import React from 'react'
import Sitebar from '../../components/Sitebar/Sitebar'
import Order from '../../components/Orders/Order'
import Product from '../../components/Products/Product'

const Home = () => {
  return (
    <div className="flex justify-between w-[100%] h-[900px] m-auto bg-[#2f323b]">
      <Sitebar />
      <Product />
      <Order />
    </div>
  );
}

export default Home
