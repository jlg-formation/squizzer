import React from "react";

/**
 * Global header for the application
 */
const Header: React.FC = () => (
  <header className="w-full border-b border-black bg-white p-4 text-black shadow-none">
    <h1
      className="font-mono text-3xl font-extrabold tracking-wide"
      style={{ fontFamily: "Oswald, Montserrat, Inter, monospace" }}
    >
      Squizzer !!!
    </h1>
  </header>
);

export default Header;
