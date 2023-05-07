import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import AI from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt4__header section__padding" id="home">
      <div className="gpt4__header-image">
        <img src={AI} alt="AI" />
      </div>
      <div className="gpt4__header-content">
        <h1 className="gradient__text">
          Welcome to the new age <br/>
          Here you are<br/>
          GPT-4 Open AI
        </h1>
        <p>
        The future of AI and humans is a topic of ongoing debate and speculation. While AI has the potential to revolutionize various industries and improve our daily lives, there are also concerns about the impact it may have on employment, privacy, and even our very existence.
        it's clear that the development of AI will continue to shape the future of humanity in profound ways, and it's important that we approach this technology with caution and foresight.
        </p>
        <div className="gpt4__header-content__input">
          <input type="email" placeholder="your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt4__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
