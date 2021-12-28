import React from "react";
import Router from "./pages";
import { Global } from "@emotion/react";
import { globalStyle } from "./static/style/global";

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <div className="App">
        <Router />
      </div>
    </>
  );
}

export default App;
