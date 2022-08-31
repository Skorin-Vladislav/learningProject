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
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="United Arab Emirates"
              path="/gallery"
            />
            <CardItem
              src={require("../../imagesSrc/china.jpg")}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="China"
              path="/gallery"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../../imagesSrc/argentina2.jpg")}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Argentina"
              path="/gallery"
            />
            <CardItem
              src={require("../../imagesSrc/vietnam.jpg")}
              text="Why you should travel with us"
              label="Vietnam"
              path="/about"
            />
            <CardItem
              src={require("../../imagesSrc/somalia.jpg")}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Somalia"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
