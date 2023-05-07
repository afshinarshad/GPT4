import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
  return (
    <div className="gpt4__blog section__padding" id="blog">
      <div className="gpt4__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt4__blog-container">
        <div className="gpt4__blog-container_groupA">
          <Article imgUrl={blog01} date='Sep 26, 2021' title=' "Exploring the Future of Language: What GPT-4 Means for AI and Human Communication"'/>
        </div>
        <div className="gpt4__blog-container_groupB">
          <Article imgUrl={blog02} date='Jan 13, 2023' title=' "The Evolution of GPT: What We Know About the Improvements in GPT-4"'/>
          <Article imgUrl={blog03} date='Dec 04, 2023' title='"The Potential and Risks of GPT-4: A Look at the Capabilities and Limitations of the Latest AI Language Model"'/>
          <Article imgUrl={blog04} date='Sep 22, 2023' title='"Beyond Chatbots: How GPT-4 Could Impact Content Creation and Marketing"'/>
          <Article imgUrl={blog05} date='Aug 17, 2023' title='"The Ethics of GPT-4: Examining the Social Implications of AI Language Models"'/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
