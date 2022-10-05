import React from "react";
import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import { AppRouting } from "./components/AppRouting";

function App() {
  return (
    <BrowserRouter>
      <AppRouting />
    </BrowserRouter>
  );
}

export default App;
