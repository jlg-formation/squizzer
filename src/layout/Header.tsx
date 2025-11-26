import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import Logo from "../components/Logo";
import useThemeStore from "../store/themeStore";

/**
 * Global header for the application
 */
const Header: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="w-full border-b border-gray-200 bg-white p-4 text-gray-900 shadow-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link to="/" className="inline-block" aria-label="Accueil Squizzer">
          <span className="sr-only">Squizzer</span>
          <Logo />
        </Link>
        <button
          type="button"
          onClick={toggleTheme}
          className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors duration-150 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          aria-label="Basculer le thème"
        >
          {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          <span className="hidden sm:inline">{theme === "dark" ? "Mode sombre" : "Mode clair"}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
