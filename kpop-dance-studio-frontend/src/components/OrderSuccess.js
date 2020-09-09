import styled from "@emotion/styled";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import React from "react"
import '../css/orderSuccess.css'

const OrderSuccess = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });
  return (
    <div className='success-container'>
    <Confetti width={width} height={height} numberOfPieces={450} />
      <h2><span>❤️</span>Congrats! Your order has completed!<span>❤️</span></h2>
      <h3><span>❤️</span>Thanks For Your Order!<span>❤️</span></h3>
      <span>❤️</span>
    </div>
  )
}

export default OrderSuccess