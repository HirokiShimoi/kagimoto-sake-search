import React from "react";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';
import SakeList from "./pages/Sakelist";
import SearchResult from "./pages/SearchResult";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Router>
          <Routes>
            <Route path="/" element= {<HomePage />}/>
            <Route path="/search-sake" element= {<SearchPage />}/>
            <Route path="/sakelist" element={<SakeList />}/>
            <Route path="/sakeresult" element={<SearchResult />}/>
          </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;