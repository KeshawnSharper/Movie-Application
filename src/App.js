import React from "react";
import "./styles.css";
import Facebook from "./components/Facebook";
import Google from "./components/GoogleAuth/Google";
import Home from "./components/Home/Home";
export default function App() {
  return (
    <div className="App">
      <Home />
      <Google />
      <Facebook />
    </div>
  );
}
