import { Routes, Route } from "react-router-dom";
import Landingpage from "../src/pages/Landingpage/Landingpage.jsx";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
