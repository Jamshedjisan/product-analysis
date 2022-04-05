import React, { useEffect, useState } from "react";
import useReviews from "../../hooks/useReviews";
import ReviewDetail from "../ReviewDetail/ReviewDetail";

const Reviews = () => {
  const [cart, setCart] = useReviews();
  return (
    <div className="grid grid-cols-3 gap-4 items-center bg-gray-100">
      {cart.map((product) => (
        <ReviewDetail key={product.id} product={product}></ReviewDetail>
      ))}
    </div>
  );
};

export default Reviews;
