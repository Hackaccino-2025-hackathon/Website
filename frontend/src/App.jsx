import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/LandingPage/hero/hero.jsx";
import Auth from "./pages/auth/Authpage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import MenuPage from "./components/LandingPage/Navbar/MenuPage";
import RoadmapDisplay from "./components/Dashboard/RoadmapDisplay.jsx";

import TopicContent from "./components/Dashboard/TopicContent.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/menu" element={<MenuPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/roadmapdisplay" element={<RoadmapDisplay />} />
        <Route
          path="/topic/:courseName/:chapterNumber/:topicName"
          element={<TopicContent />}
        />
      </Routes>
    </>
  );
}

export default App;
