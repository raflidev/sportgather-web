import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Venue from "./pages/Venue";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venue/:id" element={<Venue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
