import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upcoming from "./pages/Upcoming";
import Follow from "./pages/Follow";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/upcoming-events" element={<Upcoming/>} />
            <Route path="/follow-up" element={<Follow/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
