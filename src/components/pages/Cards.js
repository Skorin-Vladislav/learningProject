import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Go anywhere you want</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../../imagesSrc/dubai2.jpg")}
              text="Lorem ipsum Lorem ipsum Lorem ipsum"
              label="United Arab Emirates"
              path="/blog/UAE"
            />
            <CardItem
              src={require("../../imagesSrc/china.jpg")}
              text="Lorem ipsum Lorem ipsum Lorem ipsum"
              label="China"
              path="/blog/china"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../../imagesSrc/argentina2.jpg")}
              text="Lorem ipsum Lorem ipsum Lorem ipsum"
              label="Argentina"
              path="/blog/argentina"
            />
            <CardItem
              src={require("../../imagesSrc/vietnam.jpg")}
              text="Lorem ipsum Lorem ipsum Lorem ipsum"
              label="Vietnam"
              path="/blog/vietnam"
            />
            <CardItem
              src={require("../../imagesSrc/somalia.jpg")}
              text="Lorem ipsum Lorem ipsum Lorem ipsum"
              label="Somalia"
              path="/blog/somalia"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
