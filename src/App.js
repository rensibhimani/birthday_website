// import React from 'react';
// import Navbar from "./components/navbar/Navbar";
// import Homepage from "./pages/homepage/Homepage";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Setting from "./pages/setting/Setting";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Homepage />

//       <Single />
//        <div>
//         <Register />
//         <Login />
//       </div>
//        <Setting />

//       <Write /> 
//     </>

//   );
// }

// export default App;



// import Navbar from "./components/navbar/Navbar";
// import Homepage from "./pages/homepage/Homepage";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Setting from "./pages/setting/Setting";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   const currentUser = true;
//   return (
//     <Router>
//       <Navbar />
//       <Routes>

//         <Route>
//           <Route exact path="/" component={Homepage} />
//         </Route>

//          <Route exact path="/">
//           <Homepage />
//         </Route> 
//          <Route path="/posts">
//           <Homepage />
//         </Route> 
//         <Route path="/register">
//          {currentUser ? <Homepage /> : <Register />} 
          
//         </Route>
//         <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
//         <Login />
//         <Route path="/post/:id">
//           <Single />
//         </Route>
//         <Route path="/write">
//           {currentUser ? <Write /> : <Login />}
//           <Write />
//         </Route>

//         <Route path="/setting">
//           {currentUser ? <Setting /> : <Login />}
//           <Setting />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// code with chatJPT
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/posts" element={<Homepage />} />

        <Route
          path="/register"
          element={currentUser ? <Homepage /> : <Register />}
        />

        <Route
          path="/login"
          element={currentUser ? <Homepage /> : <Login />}
        />

        <Route path="/post/:id" element={<Single />} />

        <Route
          path="/write"
          element={currentUser ? <Write /> : <Login />}
        />

        <Route
          path="/setting"
          element={currentUser ? <Setting /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
