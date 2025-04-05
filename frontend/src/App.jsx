import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from './components/LandingPage/hero/hero.jsx';
import Auth from './pages/auth/Authpage.jsx';
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/auth' element={<Auth />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
