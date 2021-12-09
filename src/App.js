import React, { useEffect } from "react";
import Intro from "./component/Intro";
import MainContent from "./component/Main";
import Menu from "./component/Menu";
function App(props) {
  return (
    <div className="App">
      <Intro />
      <Menu />
      {/* <MainContent /> */}
    </div>
  );
}

export default App;
