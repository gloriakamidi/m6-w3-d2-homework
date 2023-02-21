// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   useParams,
// } from "react-router-dom";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Apps = {
//     'netflix': {
//         name: 'Netflix',
//         image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
//         alt:" Netflix"
//     }
// }

// export default function App() {
//   //Insert router, links here
//   return (
//     <Router>
//       <Link to="/netflix">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
//           alt=" "
//         />
//       </Link>
//       <Routes>
//         <Route path="/:id" element={<Child />} />
//       </Routes>
//     </Router>
//   );
// }

// function Child() {
//   // Below this comment, there's one major key script missing
//   const {id} = useParams();
//   // const child = Tv[slug];
//   // const { id } = child;
//   return (
//     <div>
//       <h3>
//         You Selected:<span>{id}</span>
//       </h3>
//     </div>
//   );
// }

// // const Tv = {
// //   1: {
// //     id: "Netflix",
// //   },

// //   2: {
// //     id: "HBO Max",
// //   },

// //   3: {
// //     id: "Hulu",
// //   },

// //   4: {
// //     id: "Prime Video",
// //   },
// // };

// // function ChildList() {
// //   return(
// //     {Object.entries(Tv).map(([slug,{id}]) =>(
// //         <h3 key={slug}>
// //           <Link to={`/${slug}`}>
// //           You Selected:<span>{id}</span>
// //           </Link>
// //         </h3>
// //      ))}

// //   )
// // }
