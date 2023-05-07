import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className=" gpt4__possibility section__padding" id="possibility">
      <div className="gpt4__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt4__possibility-content">
        <h4>Request Early Access to Get Started </h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Indeed, the possibilities of AI are vast and constantly expanding.
          With the advances in AI technology, we can expect to see significant
          improvements in areas such as healthcare, education, transportation,
          and more. AI has the potential to revolutionize the way we live, work
          and interact with the world around us. From self-driving cars to
          personalized medical treatments, AI can help us solve complex problems
          and make our lives easier and more efficient. The possibilities of AI
          are limited only by our imagination, and it's exciting to think about
          what the future holds for this rapidly evolving field.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
