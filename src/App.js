import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import aboutimage from "./images/about.png";
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";
import Problem from "./Components/Problem";
import Works from "./Components/Works";
import Results from "./Components/Results";
import Involved from "./Components/Involved";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Header />
      </section>
      <section id="problem">
        <Problem />
      </section>
      <section id="solution">
        <Feature />
      </section>
      <section id="results">
        <Results />
      </section>
      <section id="about">
        <About image={aboutimage} title="About Us" />
      </section>
      <section id="team">
        <Presentation />
      </section>

      <section id="involved">
        <Involved />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
