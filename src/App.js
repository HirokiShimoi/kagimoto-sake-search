import React from "react";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';
import SakeList from "./pages/Sakelist";
import SearchResult from "./pages/SearchResult";
import { SearchProvider } from "./contexts/SearchContext";
import SakeDetails from "./pages/SakeDetails";
import Login from "./pages/Logintop";


function App() {
  return (
    <SearchProvider>
      <Router>
          <Routes>
            <Route path="/" element= {<HomePage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/search-sake" element= {<SearchPage />}/>
            <Route path="/sakelist" element={<SakeList />}/>
            <Route path="/sakeresult" element={<SearchResult />}/>
            <Route path="/sake/:id" element={<SakeDetails />}/>
          </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;