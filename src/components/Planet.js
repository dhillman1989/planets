import "./Planet.scss";

import { useEffect, useState } from "react";

export default function Planet(props) {
  const { planet } = props;

  const [view, setView] = useState("overview");

  return (
    <div>
      <div class="grid">
        <div class="x8 planet-image">
          {view === "overview" && (
            <img src={planet.images.planet} alt={planet.name} />
          )}
          {view === "structure" && (
            <img src={planet.images.internal} alt={planet.name} />
          )}
          {view === "geology" && (
            <>
              <img src={planet.images.planet} alt={planet.name} />
              <img
                className="geology"
                src={planet.images.geology}
                alt={planet.name}
              />
            </>
          )}
        </div>
        <div class="x4 col">
          <h1>{planet.name}</h1>
          <p>
            {view === "overview" && planet.overview.content}
            {view === "structure" && planet.structure.content}
            {view === "geology" && planet.geology.content}
          </p>

          <button className={planet.name} onClick={() => setView("overview")}>
            <span>01</span>Overview
          </button>
          <button className={planet.name} onClick={() => setView("structure")}>
            <span>02</span>Internal Structure
          </button>
          <button className={planet.name} onClick={() => setView("geology")}>
            <span>03</span>Surface Geology
          </button>
        </div>
      </div>
      <div class="grid">
        <div class="x3 stats">
          <h4>Rotation Time</h4>
          <h2>{planet.rotation}</h2>
        </div>
        <div class="x3 stats">
          <h4>Revolution Time</h4>
          <h2>{planet.revolution}</h2>
        </div>
        <div class="x3 stats">
          <h4>Radius</h4>
          <h2>{planet.radius}</h2>
        </div>
        <div class="x3 stats">
          <h4>Average Temp.</h4>
          <h2>{planet.temperature}</h2>
        </div>
      </div>
    </div>
  );
}
