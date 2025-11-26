import React from "react";

/**
 * Global footer for the application
 */
const Footer: React.FC = () => (
  <footer className="w-full border-t border-gray-200 bg-white p-4 text-center text-gray-900 transition-colors duration-150 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
    <span className="font-mono">
      © 2025{" "}
      <a
        href="https://www.jlg-consulting.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-600 dark:hover:text-blue-400"
      >
        JLG Consulting
      </a>
    </span>
  </footer>
);

export default Footer;
