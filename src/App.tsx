import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default App;
