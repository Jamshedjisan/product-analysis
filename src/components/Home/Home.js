import React from "react";
// import Photo from "../../../public/tv-photo.jpg";

const Home = () => {
  return (
    <div className="main-container">
      <div className="home-container">
        <div className="text-container">
          <h1 className="text-6xl font-bold">Television is a media of</h1>
          <h1 className="text-6xl font-bold text-blue-600 ">
            Mass communication and learning.
          </h1>
          <p>
            Television not only provides many types of programs with interesting
            and broad content, but it also serves to fulfill our needs in terms
            of entertainment and knowledge. Everything has its merits and
            demerits. But it is the most up-to-date means of communication
          </p>
        </div>

        {/* <div className="img-container">
        <img src={Image} alt="" />
      </div> */}
      </div>
      <div className="review-container">
        <h1 className="text-4xl font-semibold">Customer Reviews</h1>

        <button className="">Reviews All</button>
      </div>
    </div>
  );
};

export default Home;
