import React from "react";
import Header from "./Header";
import About from "./About";
import FacultyList from "./FacultyList";
import Contact from "./Contact";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <About />
      <FacultyList />
      <Contact />
    </div>
  );
}

export default App;