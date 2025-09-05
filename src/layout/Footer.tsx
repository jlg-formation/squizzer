import React from "react";

/**
 * Global footer for the application
 */
const Footer: React.FC = () => (
  <footer className="w-full border-t border-black bg-white p-4 text-center text-black">
    <span className="font-mono">
      © 2025{" "}
      <a
        href="https://www.jlg-consulting.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-600"
      >
        JLG Consulting
      </a>
    </span>
  </footer>
);

export default Footer;
