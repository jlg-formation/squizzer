import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import useThemeStore from "../store/themeStore";

/**
 * Global layout with header, body, and footer
 * @param children React children
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900 transition-colors duration-150 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

export default Layout;
