import React from "react";
import "./styles.css";
import Facebook from "./components/Facebook";
import Google from "./components/GoogleAuth/Google";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Google />
      <Facebook />
    </div>
  );
}
