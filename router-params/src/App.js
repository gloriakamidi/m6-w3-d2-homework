import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  //Insert router, links here
  return (
    <Router>
      <h2>TV APPS</h2>

      <span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
          width="150"
          alt="Netflix"
          className="nf"
          // onClick={() => handleShow(product)}
        />
      </span>
      <span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
          width="150"
          alt="HBO MAX"
          className="hb"
          // onClick={() => handleShow(product)}
        />
      </span>
      <span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
          width="150"
          alt="Hulu"
          className="hu"
          // onClick={() => handleShow(product)}
        />
      </span>
      <span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
          width="150"
          alt="Prime Video"
          className="pr"
          // onClick={() => handleShow(product)}
        />
      </span>

      <Routes>
        <Route path="/" element={<Child />}>
          <Route path="/" element={<Child />} />
          <Route path=":slug" element={<Child />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Child() {
  // Below this comment, there's one major key script missing
  // const { slug } = useParams();
  // const child = Tv[slug];
  // const { id } = child;
  return (
    <div>
       <h3>
           {/* You Selected:<span>{id}</span> */}
        </h3> 
    </div>
  );
}

const Tv = {
  1:  {
    id: "Netflix"},

  2: {
    id: "HBO Max"},

  3: {
    id: "Hulu"},

  4: {
    id: "Prime Video"},
};

// function ChildList() {
//   return(
//     {Object.entries(Tv).map(([slug,{id}]) =>( 
//         <h3 key={slug}>
//           <Link to={`/${slug}`}>
//           You Selected:<span>{id}</span>
//           </Link>
//         </h3> 
//      ))}
    
//   )
// }