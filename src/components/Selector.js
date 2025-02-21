import React from 'react';

export default function Selector({ postType, setPostType }) {

  const handleChange = (event) => {
    setPostType(event.target.value);
  };

  return (
    <div className="second">
      <span>Select Post type: </span>
      <input className="radio1" type="radio" id="question" name="postType" value="Question" checked={postType === "Question"} onChange={handleChange}/>
      <label htmlFor="question">Question</label>
      
      <input className="radio1" type="radio" id="article" name="postType" value="Article" checked={postType === "Article"} onChange={handleChange}/>
      <label htmlFor="article">Article</label>
    </div>
  );
}
