import React from "react";
import Filter from "../../components/filter";
import "./styles.css";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__filter">
        <Filter />
      </div>
      <div className="home__list">LISTA</div>
    </div>
  );
};

export default Home;
