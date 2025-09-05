import React from "react";

/**
 * Main body layout wrapper
 * @param children React children
 */
const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main className="flex w-full flex-1 items-center justify-center bg-white px-4 py-6">
    {children}
  </main>
);

export default Body;
