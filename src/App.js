import React, { useEffect } from "react";
import Intro from "./component/Intro";
import MainContent from "./component/Main";

function App(props) {
  return (
    <div className="App">
      <Intro />
      <MainContent />
    </div>
  );
}

export default App;
