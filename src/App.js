import logo from "./logo.svg";
import "./App.css";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Events from "./routes/Events";
import WorkShop from "./routes/WorkShop";
import { useState } from "react";
import bgContext from "./contexts/bgContext";
import TeamPage from "./Components/TeamPage";
function App() {
  const [isLightTheme, setisLightTheme] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <bgContext.Provider value={{ isLightTheme, setisLightTheme }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/workshop" element={<WorkShop />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </bgContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
