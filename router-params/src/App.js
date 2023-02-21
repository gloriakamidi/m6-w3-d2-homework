import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  //Insert router, links here
  return (
    <Router>
      <h2>TV APPS</h2>
      <Link to="/netflix">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
          alt=" "
          className="nf"
        />
      </Link>
      <Link to="/hbomax">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
          alt=" "
          className="hb"
        />
      </Link>
      <Link to="/hulu">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
          alt=" "
          className="hu"
        />
      </Link>
      <Link to="/PrimeVideo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
          alt=" "
          className="pr"
        />
      </Link>
      <Routes>
        <Route path="/:id" element={<Child />} />
      </Routes>
    </Router>
  );
}

function Child() {
  // Below this comment, there's one major key script missing
  const {id} = useParams();

  return (
    <div>
      <h3>
        You Selected:<span>{id}</span>
      </h3>
    </div>
  );
}

const Tvs = {
  netflix: {
    name: "Netflix",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
    alt: " Netflix",
  },
  hbomax: {
    name: "HBO Max",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
    alt: "HBO Max",
  },
  hulu: {
    name: "Hulu",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg",
    alt: "Hulu",
  },
  PrimeVideo: {
    name: "Prime Video",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
    alt: "Prime Video",
  },
};
