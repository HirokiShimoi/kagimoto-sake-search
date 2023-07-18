import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';
import SakeList from "./pages/Sakelist";
import SearchResult from "./pages/SearchResult";
import { SearchContext } from "./contexts/SearchContext";
function App() {
  const [searchParams, setSearchParams] = useState(null);
  return (
    <SearchContext.Provider value={{searchParams, setSearchParams}}>
      <Router>
          <Routes>
            <Route path="/" element= {<HomePage />}/>
            <Route path="/search-sake" element= {<SearchPage />}/>
            <Route path="/sakelist" element={<SakeList />}/>
            <Route path="/sakeresult" element={<SearchResult />}/>
          </Routes>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
