import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

/**
 * Global layout with header, body, and footer
 * @param children React children
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <Body>{children}</Body>
    <Footer />
  </div>
);

export default Layout;
