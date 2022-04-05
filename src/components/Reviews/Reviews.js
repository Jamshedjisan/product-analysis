import React, { useEffect, useState } from "react";
import useReviews from "../../hooks/useReviews";
import ReviewDetail from "../ReviewDetail/ReviewDetail";

const Reviews = () => {
  const [cart, setCart] = useReviews();
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 items-center bg-gray-100">
      {cart.map((product) => (
        <ReviewDetail key={product.id} product={product}></ReviewDetail>
      ))}
    </div>
  );
};

export default Reviews;
