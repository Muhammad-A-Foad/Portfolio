export function Orbit() {
  return (
    <div className="orbit-art" aria-hidden="true">
      <div className="orbit-coordinate coordinate-top">01 / INTERFACE</div>
      <svg viewBox="0 0 600 600" fill="none" className="orbit-svg">
        <defs>
          <radialGradient id="orb-light" cx=".34" cy=".26" r=".76">
            <stop stopColor="#e4b08c" />
            <stop offset=".4" stopColor="#b56e49" />
            <stop offset=".78" stopColor="#55311f" />
            <stop offset="1" stopColor="#211c18" />
          </radialGradient>
          <linearGradient
            id="orbit-stroke"
            x1="80"
            y1="100"
            x2="500"
            y2="500"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e0a881" />
            <stop offset=".5" stopColor="#b57d5a" stopOpacity=".4" />
            <stop offset="1" stopColor="#dfb598" />
          </linearGradient>
          <clipPath id="orb-clip">
            <circle cx="300" cy="300" r="138" />
          </clipPath>
        </defs>
        <circle
          cx="300"
          cy="300"
          r="235"
          stroke="#c6a68a"
          strokeOpacity=".10"
          strokeDasharray="2 7"
        />
        <path d="M48 300h504M300 48v504" stroke="#c6a68a" strokeOpacity=".1" />
        <ellipse
          cx="300"
          cy="300"
          rx="260"
          ry="104"
          transform="rotate(-36 300 300)"
          stroke="url(#orbit-stroke)"
          strokeOpacity=".6"
        />
        <circle cx="300" cy="300" r="138" fill="url(#orb-light)" />
        <g
          clipPath="url(#orb-clip)"
          stroke="#f0c5a0"
          strokeWidth=".65"
          opacity=".45"
        >
          {Array.from({ length: 17 }, (_, i) => (
            <ellipse
              key={`v${i}`}
              cx="300"
              cy="300"
              rx={10 + i * 8}
              ry="138"
              transform="rotate(-24 300 300)"
            />
          ))}
          {Array.from({ length: 15 }, (_, i) => (
            <ellipse
              key={`h${i}`}
              cx="300"
              cy={171 + i * 18.4}
              rx={Math.sqrt(Math.max(0, 138 ** 2 - (129 - i * 18.4) ** 2))}
              ry="20"
              transform="rotate(-24 300 300)"
            />
          ))}
        </g>
        <path
          d="M91 433C8 389 132 234 331 164c159-56 268-43 232 23"
          stroke="url(#orbit-stroke)"
          strokeWidth="1.2"
        />
        <ellipse
          cx="300"
          cy="300"
          rx="211"
          ry="185"
          transform="rotate(46 300 300)"
          stroke="#d9aa86"
          strokeOpacity=".17"
        />
        <circle cx="111" cy="413" r="6" fill="#e6ba98" />
        <circle cx="489" cy="186" r="4" fill="#e6ba98" />
        <path
          d="m105 407 12 12m-12 0 12-12"
          stroke="#141413"
          strokeWidth=".7"
        />
        <circle cx="300" cy="65" r="3" fill="#b18c71" />
        <circle cx="535" cy="300" r="3" fill="#b18c71" />
      </svg>
      <div className="orbit-coordinate coordinate-bottom">
        02 / LOGIC <span>03 / DATA</span>
      </div>
      <div className="orbit-caption">
        Different layers. One considered system.
      </div>
    </div>
  );
}
