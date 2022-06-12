import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tracker from "./Tracker";
import MyNav from "./MyNav";

function App() {
  return (
    <main className="bg-gray-900 w-screen lg:overflow-x-hidden">
      <Router>
      <MyNav />
     <Tracker />
     <Routes>
      <Route exact path="/cryptotracker" element={<Home />} />
     
    </Routes>
    </Router>
    </main>
  );
}

export default App;
