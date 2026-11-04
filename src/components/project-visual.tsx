import type { Project } from "@/content/portfolio";

function RestaurantVisual() {
  return (
    <div className="workflow-visual">
      <div className="visual-topline">
        <span>THE CONNECTED RESTAURANT</span>
        <span>01—04</span>
      </div>
      <div className="workflow-main">
        <div className="workflow-hub">
          <span className="hub-ring" />
          <span className="hub-symbol">↗</span>
          <small>ORDER LIFECYCLE</small>
        </div>
        <div className="workflow-stages">
          {["Order", "Prepare", "Serve"].map((stage, i) => (
            <div className="workflow-stage" key={stage}>
              <span className="stage-index">0{i + 1}</span>
              <strong>{stage}</strong>
              <span className="stage-sub">
                {["Kiosk + cashier", "Kitchen display", "Order collection"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="visual-bottomline">
        <span>INTERFACES ↔ SERVICES ↔ DATA</span>
        <span>ILLUSTRATIVE WORKFLOW</span>
      </div>
    </div>
  );
}

function LearningVisual({ academy = false }: { academy?: boolean }) {
  return (
    <div className="learning-visual">
      <div className="visual-topline">
        <span>A STRUCTURE FOR LEARNING</span>
        <span>{academy ? "03" : "02"}</span>
      </div>
      <div className="book-composition">
        <div className="book-sheet sheet-back" />
        <div className="book-sheet sheet-mid" />
        <div className="book-sheet sheet-front">
          <span className="book-mark">ل</span>
          <div className="book-lines">
            <span />
            <span />
            <span />
          </div>
          <span className="book-caption">
            A place to learn.
            <br />A foundation to grow.
          </span>
        </div>
        <span className="book-orbit" />
      </div>
      <div className="visual-bottomline">
        <span>COURSES / CONTENT / LEARNING</span>
        <span>CONCEPTUAL ILLUSTRATION</span>
      </div>
    </div>
  );
}

function GeoVisual() {
  return (
    <div className="geo-visual">
      <div className="visual-topline">
        <span>ENVIRONMENT, IN CONTEXT</span>
        <span>04</span>
      </div>
      <svg
        className="topo-art"
        viewBox="0 0 600 330"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="map-wash">
            <stop stopColor="#aac1a3" stopOpacity=".12" />
            <stop offset="1" stopColor="#aac1a3" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="330" cy="165" rx="240" ry="160" fill="url(#map-wash)" />
        {Array.from({ length: 17 }, (_, i) => (
          <path
            key={i}
            d={`M${-100 + i * 8} ${290 - i * 13} C${80 + i * 5} ${390 - i * 17}, ${140 + i * 4} ${-80 + i * 8}, ${330 + i * 3} ${60 + i * 7} S${480 + i * 9} ${300 - i * 6}, ${720} ${-10 + i * 13}`}
            stroke="#bdd0b0"
            strokeOpacity={0.15 + i * 0.025}
            strokeWidth=".8"
          />
        ))}
        <circle cx="331" cy="158" r="37" stroke="#c1d0b7" strokeOpacity=".3" />
        <circle cx="331" cy="158" r="9" fill="#c1d0b7" />
        <path
          d="M331 107v-13m0 128v-13m-51-51h-13m128 0h-13"
          stroke="#c1d0b7"
        />
        <text
          x="364"
          y="143"
          fill="#d3dec9"
          fontSize="11"
          fontFamily="monospace"
        >
          GeoBasira
        </text>
      </svg>
      <div className="visual-bottomline">
        <span>DATA → GEOGRAPHY → INSIGHT</span>
        <span>CONCEPTUAL TERRAIN / NO LIVE DATA</span>
      </div>
    </div>
  );
}

function ErpVisual() {
  return (
    <div className="erp-visual">
      <span className="erp-center">
        A connected
        <br />
        <em>business.</em>
      </span>
      {["Inventory", "Sales", "Finance", "People"].map((text, i) => (
        <span className={`erp-node erp-node-${i}`} key={text}>
          {text}
        </span>
      ))}
      <span className="erp-circle" />
      <span className="erp-line line-one" />
      <span className="erp-line line-two" />
      <span className="erp-caption">PROPOSED DOMAINS · PLANNING STUDY</span>
    </div>
  );
}

export function ProjectVisual({ theme }: { theme: Project["theme"] }) {
  return (
    <div
      className={`project-visual visual-${theme}`}
      role="img"
      aria-label={
        {
          restaurant:
            "Illustrative restaurant workflow connecting ordering, preparation, and collection. Not a product screenshot.",
          learning:
            "Conceptual book illustration for a learning management platform.",
          academy: "Conceptual book illustration for Al Malik Academy.",
          geo: "Conceptual topographic illustration, not measured environmental data.",
          erp: "Proposed ERP domains: inventory, sales, finance, and people. Planning only.",
        }[theme]
      }
    >
      {theme === "restaurant" ? (
        <RestaurantVisual />
      ) : theme === "learning" || theme === "academy" ? (
        <LearningVisual academy={theme === "academy"} />
      ) : theme === "geo" ? (
        <GeoVisual />
      ) : (
        <ErpVisual />
      )}
    </div>
  );
}
