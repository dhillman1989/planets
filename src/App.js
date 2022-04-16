// import DesignSystem from "./DesignSystem";
import "./styles.scss";
import { Routes, Route, Link } from "react-router-dom";

import planetData from "./data/data.json";
import BackgroundImage from "./assets/background-stars.svg";
import Planet from "./components/Planet";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${BackgroundImage}`,
        backgroundSize: "cover"
      }}
    >
      <nav className="topnav">
        <h1>The Planets</h1>
        <ul>
          {planetData.map((planet) => (
            <li key={planet.name}>
              <Link to={`./${planet.name}`} className={planet.name}>
                {planet.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Planet planet={planetData[0]} />} />
        {planetData.map((planet) => (
          <Route
            key={planet.name}
            path={`/${planet.name}`}
            element={<Planet planet={planet} />}
          />
        ))}
      </Routes>

      {/* <DesignSystem /> */}
    </div>
  );
}
