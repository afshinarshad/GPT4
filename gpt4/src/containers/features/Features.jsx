import React from "react";
import "./features.css";
import { Feature } from "../../components";
import Gpt4side from "../../assets/gpt4-side.png";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: " Fake news has already fanned the flames of distrust towards media, politics and established institutions around the world. And while new technologies like artificial intelligence (AI) might make things even worse,&nbsp;it can also be used to combat misinformation.",
  },
  {
    title: "Become the tended active    ",
    text: "Companies capturing lasting value from artificial intelligence think differently, from the C-suite to the front line. Here's how to make the shift from opportunistic efforts to a truly AI-enabled organization.",
  },
  {
    title: "Message or am nothing",
    text: "AI is a tool that can be programmed to perform specific tasks, and its actions are determined by the algorithms it follows. While AI systems can operate autonomously, they are designed to work within predefined boundaries and limitations set by their creators.",
  },
  {
    title: "Really boy law county    ",
    text: "AI and law is an emerging field that explores the intersection of artificial intelligence and legal systems. AI has the potential to revolutionize the legal industry by automating routine tasks such as document review, contract analysis, and legal research.",
  },
];

const Features = () => {
  return (
    <div className="gpt4__features section__padding " id="features">
      <div className="gpt4__features-leftside">
        <div className="gpt4__features-heading">
          <h1 className="gradient__text">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt4__features-image">
          <img src={Gpt4side} alt="gpt4side" />
        </div>
      </div>
      <div className="gpt4__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
            style={{ flexDirection: "row" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
