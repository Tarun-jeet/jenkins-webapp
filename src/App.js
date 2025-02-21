import React, { useState } from 'react';
import './App.css';
import Label from './components/Label';
import Selector from './components/Selector';
import VerticalBox from './components/VerticalBox';
import HorizontalBox from './components/HorizontalBox';
import Button from './components/Button';

function App() {
  const [postType, setPostType] = useState("Question");

  return (
    <>
      <Label title="New Post" />
      <Selector postType={postType} setPostType={setPostType} />
      <Label title="What do you want to ask or share" />
      <VerticalBox head="Title" row={1} column={100} place="Start your question with how, what, why etc." />

      {postType === "Question" ? (<HorizontalBox head1="Describe Your Problem" row1={40} column1={110} />) : (
        <>
          <HorizontalBox head1="Abstract" row1={6} column1={110} place1="Enter a 1-paragraph Abstract" />
          <HorizontalBox head1="Article Text" row1={20} column1={110} place1="Enter a 2-paragraph article text" />
        </>
      )}
      
      <VerticalBox head="Tags" row={1} column={100} place="Please add up to 3 tags to describe what your question is about e.g. java," />
      <Button />
    </>
  );
}

export default App;
