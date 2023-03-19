import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Venue from "./pages/Venue";

function App() {
  const [isLoad, setLoad] = useState(true)

  useEffect(() => {
    document.body.classList.add('fixBody')

      setTimeout(() => {
        setLoad(false)
        document.body.classList.remove('fixBody')
      }, 600)
  }, [])

  return (
    <BrowserRouter>
      <Loader isLoad={isLoad} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venue/:slug" element={<Venue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
