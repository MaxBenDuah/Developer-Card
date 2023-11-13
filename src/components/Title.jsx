import React from "react";

const Title = function ({myTitle}) {
  return (
    <>
      <h3>{myTitle} <span className="head">my name is</span></h3>
      <h1>Zoé Miller</h1>
      <p><span className="iam-text">I am a</span> <span className="developer-text">web developer</span></p>
    </>
  );
}

export default Title;