import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CssBaseline } from "@mui/material";
import Blogpage from "./pages/Blogpage";

function App() {
  return (
    <>
      <CssBaseline>
        <Blogpage />
      </CssBaseline>
    </>
  );
}

export default App;
