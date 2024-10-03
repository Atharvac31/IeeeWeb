import logo from "./logo.svg";
import "./App.css";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./routes/Events";
import WorkShop from "./routes/WorkShop";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/workshop" element={<WorkShop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
