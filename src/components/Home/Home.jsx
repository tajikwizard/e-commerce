import React from "react";
import me from "../../assets/me.png";

const Home = () => {
  return (
    <div className="flex justify-center items-center  text-2xl flex-col">
      <h2 className="mb-20">Welcome To Andoz Shop</h2>
      <div className="img-container ">
        <img src={me} />
      </div>
    </div>
  );
};

export default Home;
