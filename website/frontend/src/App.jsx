import { Routes, Route } from "react-router-dom";
import Landingpage from "../src/pages/Landingpage/Landingpage.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </>
  );
}

export default App;
