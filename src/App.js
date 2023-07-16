import React from "react";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';
import SakeList from "./pages/Sakelist";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element= {<HomePage />}/>
          <Route path="/search-sake" element= {<SearchPage />}/>
          <Route path="/sakelist" element={<SakeList />}/>
        </Routes>
    </Router>
  );
}

export default App;
