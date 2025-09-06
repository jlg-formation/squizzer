import { Link } from "react-router-dom";
import Logo from "../components/Logo";

/**
 * Global header for the application
 */
const Header: React.FC = () => (
  <header className="w-full border-b border-black bg-white p-4 text-black shadow-none">
    <div className="flex justify-center">
      <Link to="/" className="inline-block" aria-label="Accueil Squizzer">
        <span className="sr-only">Squizzer</span>
        <Logo />
      </Link>
    </div>
  </header>
);

export default Header;
