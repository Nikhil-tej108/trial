import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white p-6 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">AIML Department - DSCE</h1>
        <nav className="space-x-6 text-lg">
          <a href="#about" className="hover:underline">About</a>
          <a href="#faculty" className="hover:underline">Faculty</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;