import React from "react";

const ReviewDetail = (props) => {
  const { Name, Rating, image, Comment } = props.product;
  return (
    <div className="grid grid-cols-3">
      <div>
        <div className="w-1/4">
          <img src={image} alt="" />
        </div>
        <div className="w-2/3">
          <h3>Name: {Name}</h3>
          <h4>Ratings: {Rating}</h4>
          <p>Comment: {Comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
