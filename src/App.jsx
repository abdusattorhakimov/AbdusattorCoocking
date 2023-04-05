import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import Recipe from "./pages/recipe/recipe";
import Search from "./pages/Search/Search";
import Navbar from "./components/Navbar";
import ColorList from "./components/ColorList";
import createContext from "./hooks/createContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const { mode } = createContext();
  console.log(mode);
  return (
    <div className={`App font-Inter ${mode}`}>
      <div className="dark:bg-slate-900">
        <Router>
          <Navbar />
          <ColorList />
          <div className="max-w-screen-lg mx-auto px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe/:id" element={<Recipe />} />
              <Route path="/create" element={<Create />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
