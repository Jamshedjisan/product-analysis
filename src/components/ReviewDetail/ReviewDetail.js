import React from "react";

const ReviewDetail = (props) => {
  const { Name, Rating, image, Comment } = props.product;
  return (
    <div>
      <div className="border">
        <div className="w-1/4 ml-32">
          <img src={image} alt="" />
        </div>
        <div className="w-2/3">
          <h3 className="text-2xl font-bold ">Name: {Name}</h3>
          <h4 className="text-xl font-semibold">Ratings: {Rating}</h4>
          <p className="text-xl">Comment: {Comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
