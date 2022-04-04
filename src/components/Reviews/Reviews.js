import React, { useEffect, useState } from "react";
import useReviews from "../../hooks/useReviews";
import ReviewDetail from "../ReviewDetail/ReviewDetail";

const Reviews = () => {
  const [cart, setCart] = useReviews();
  return (
    <div>
      <h2>This is reviews.</h2>
      {cart.map((product) => (
        <ReviewDetail key={product.id} product={product}></ReviewDetail>
      ))}
    </div>
  );
};

export default Reviews;
