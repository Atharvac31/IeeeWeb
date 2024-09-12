import React from "react";
import "./home.css";
import NavigationBar from "../Components/NavigationBar";
import MainDiv from "../Components/MainDiv";
const Home = () => {
  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div>
        <MainDiv />
      </div>
    </>
  );
};

export default Home;
