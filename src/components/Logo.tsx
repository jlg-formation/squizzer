import React from "react";
import "./Logo.css";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Composant Logo SVG de l'application Squizzer avec effet de bulles animées
 */
const Logo: React.FC<LogoProps> = ({
  width = 240,
  height = 60,
  className = "",
}) => (
  <div className={`logo-container ${className}`}>
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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

      {/* Bulles de champagne avec animations */}
      <circle
        cx="30"
        cy="45"
        r="1.5"
        fill="none"
        stroke="#111"
        strokeWidth="0.8"
        opacity="0.7"
        className="bubble bubble-1"
      />
      <circle
        cx="35"
        cy="25"
        r="1"
        fill="none"
        stroke="#111"
        strokeWidth="0.6"
        opacity="0.6"
        className="bubble bubble-2"
      />
      <circle
        cx="25"
        cy="35"
        r="2"
        fill="none"
        stroke="#111"
        strokeWidth="0.8"
        opacity="0.8"
        className="bubble bubble-3"
      />
      <circle
        cx="40"
        cy="50"
        r="1.2"
        fill="none"
        stroke="#111"
        strokeWidth="0.7"
        opacity="0.5"
        className="bubble bubble-4"
      />

      <circle
        cx="210"
        cy="15"
        r="1.8"
        fill="none"
        stroke="#111"
        strokeWidth="0.8"
        opacity="0.7"
        className="bubble bubble-5"
      />
      <circle
        cx="215"
        cy="45"
        r="1"
        fill="none"
        stroke="#111"
        strokeWidth="0.6"
        opacity="0.6"
        className="bubble bubble-6"
      />
      <circle
        cx="220"
        cy="25"
        r="1.5"
        fill="none"
        stroke="#111"
        strokeWidth="0.7"
        opacity="0.8"
        className="bubble bubble-7"
      />
      <circle
        cx="225"
        cy="50"
        r="1.2"
        fill="none"
        stroke="#111"
        strokeWidth="0.6"
        opacity="0.5"
        className="bubble bubble-8"
      />

      <circle
        cx="50"
        cy="15"
        r="1.3"
        fill="none"
        stroke="#111"
        strokeWidth="0.7"
        opacity="0.6"
        className="bubble bubble-9"
      />
      <circle
        cx="190"
        cy="50"
        r="1.4"
        fill="none"
        stroke="#111"
        strokeWidth="0.8"
        opacity="0.7"
        className="bubble bubble-10"
      />
      <circle
        cx="45"
        cy="8"
        r="1"
        fill="none"
        stroke="#111"
        strokeWidth="0.6"
        opacity="0.5"
        className="bubble bubble-11"
      />
      <circle
        cx="200"
        cy="8"
        r="1.1"
        fill="none"
        stroke="#111"
        strokeWidth="0.7"
        opacity="0.6"
        className="bubble bubble-12"
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
        className="bubble bubble-13"
      />
      <circle
        cx="180"
        cy="12"
        r="0.9"
        fill="none"
        stroke="#111"
        strokeWidth="0.6"
        opacity="0.5"
        className="bubble bubble-14"
      />
      <circle
        cx="55"
        cy="40"
        r="0.7"
        fill="none"
        stroke="#111"
        strokeWidth="0.5"
        opacity="0.4"
        className="bubble bubble-15"
      />
      <circle
        cx="185"
        cy="35"
        r="0.8"
        fill="none"
        stroke="#111"
        strokeWidth="0.5"
        opacity="0.4"
        className="bubble bubble-16"
      />
    </svg>
  </div>
);

export default Logo;
