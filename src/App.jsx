import Home from "./components/page/Home/Home";
import LayoutPopOS from "./components/pop-os/LayoutPopOS";
import { Routes, Route } from "react-router-dom";
import MyAnime from "./components/page/MyAnime/MyAnime";

function App() {
  return (
    <LayoutPopOS>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-anime" element={<MyAnime />} />
      </Routes>
    </LayoutPopOS>
  );
}

export default App;
