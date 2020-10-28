import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Logo } from "./components/Logo/Logo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Logo />
      <main className="app-content" />
      <Footer />
    </div>
  );
}

export default App;
