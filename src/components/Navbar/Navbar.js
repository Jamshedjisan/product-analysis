import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-2xl">
      <Link to="/" className="mx-4">
        Home
      </Link>
      <Link to="reviews" className="mx-4">
        Reviews
      </Link>
      <Link to="dashboard" className="mx-4">
        Dashboard
      </Link>
      <Link to="blogs" className="mx-4">
        Blogs
      </Link>
      <Link to="about" className="mx-4">
        About
      </Link>
    </div>
  );
};

export default Navbar;
