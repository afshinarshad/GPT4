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
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
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
