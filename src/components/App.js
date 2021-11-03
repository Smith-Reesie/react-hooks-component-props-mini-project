import React from "react";
import blogData from "../data/blog";
import Header from './Header'
//import ArticleList from './ArticleList'
import About from './About'
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About imgSrc={blogData.image} about={blogData.about} />
      <ArticleList postArry={blogData.posts} />

    </div>
  );
}

export default App;
