import { Link } from "react-router-dom";

/**
 * Global header for the application
 */
const Header: React.FC = () => (
  <header className="w-full border-b border-black bg-white p-4 text-black shadow-none">
    <div className="flex justify-center">
      <Link to="/" className="inline-block" aria-label="Accueil Squizzer">
        <span className="sr-only">Squizzer</span>
        <svg
          width="240"
          height="60"
          viewBox="0 0 240 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-opacity hover:opacity-80"
        >
          {/* Texte principal élégant */}
          <text
            x="120"
            y="35"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="serif"
            fontWeight="300"
            fontSize="32"
            fill="#111"
            letterSpacing="3"
          >
            Squizzer !!!
          </text>

          {/* Bulles de champagne fines et élégantes */}
          <circle
            cx="30"
            cy="45"
            r="1.5"
            fill="none"
            stroke="#111"
            strokeWidth="0.8"
            opacity="0.7"
          />
          <circle
            cx="35"
            cy="25"
            r="1"
            fill="none"
            stroke="#111"
            strokeWidth="0.6"
            opacity="0.6"
          />
          <circle
            cx="25"
            cy="35"
            r="2"
            fill="none"
            stroke="#111"
            strokeWidth="0.8"
            opacity="0.8"
          />
          <circle
            cx="40"
            cy="50"
            r="1.2"
            fill="none"
            stroke="#111"
            strokeWidth="0.7"
            opacity="0.5"
          />

          <circle
            cx="210"
            cy="15"
            r="1.8"
            fill="none"
            stroke="#111"
            strokeWidth="0.8"
            opacity="0.7"
          />
          <circle
            cx="215"
            cy="45"
            r="1"
            fill="none"
            stroke="#111"
            strokeWidth="0.6"
            opacity="0.6"
          />
          <circle
            cx="220"
            cy="25"
            r="1.5"
            fill="none"
            stroke="#111"
            strokeWidth="0.7"
            opacity="0.8"
          />
          <circle
            cx="225"
            cy="50"
            r="1.2"
            fill="none"
            stroke="#111"
            strokeWidth="0.6"
            opacity="0.5"
          />

          <circle
            cx="50"
            cy="15"
            r="1.3"
            fill="none"
            stroke="#111"
            strokeWidth="0.7"
            opacity="0.6"
          />
          <circle
            cx="190"
            cy="50"
            r="1.4"
            fill="none"
            stroke="#111"
            strokeWidth="0.8"
            opacity="0.7"
          />
          <circle
            cx="45"
            cy="8"
            r="1"
            fill="none"
            stroke="#111"
            strokeWidth="0.6"
            opacity="0.5"
          />
          <circle
            cx="200"
            cy="8"
            r="1.1"
            fill="none"
            stroke="#111"
            strokeWidth="0.7"
            opacity="0.6"
          />

          {/* Bulles supplémentaires pour l'effet pétillant */}
          <circle
            cx="60"
            cy="52"
            r="0.8"
            fill="none"
            stroke="#111"
            strokeWidth="0.5"
            opacity="0.4"
          />
          <circle
            cx="180"
            cy="12"
            r="0.9"
            fill="none"
            stroke="#111"
            strokeWidth="0.6"
            opacity="0.5"
          />
          <circle
            cx="55"
            cy="40"
            r="0.7"
            fill="none"
            stroke="#111"
            strokeWidth="0.5"
            opacity="0.4"
          />
          <circle
            cx="185"
            cy="35"
            r="0.8"
            fill="none"
            stroke="#111"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>
      </Link>
    </div>
  </header>
);

export default Header;
