import React from "react";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import { Header, Footer } from './pages/Header_Footer';

import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element= {<HomePage />}/>
          <Route path="/search-sake" element= {<SearchPage />}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
