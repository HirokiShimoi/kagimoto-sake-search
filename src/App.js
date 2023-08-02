import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';
import SakeList from "./pages/Sakelist";
import SearchResult from "./pages/SearchResult";
import EditSake from "./pages/EditSake";
import { SearchProvider } from "./contexts/SearchContext";
import { AuthProvider } from "./contexts/AuthContext";
import { UserContext, UserProvider } from "./contexts/UserContext"; 
import SakeDetails from "./pages/SakeDetails";
import Login from "./pages/Logintop";


function App() {
  return (
    <AuthProvider>
        <SearchProvider>
            <UserProvider> 
                <Router>
                  <CheckLogin />
                    <Routes>
                            <Route path="/" element= {<Login />}/>
                            <Route path="/toppage" element= {<HomePage />}/>
                            <Route path="/search-sake" element= {<SearchPage />}/>
                            <Route path="/sakelist" element={<SakeList />}/>
                            <Route path="/sakeresult" element={<SearchResult />}/>
                            <Route path="/sake/:id" element={<SakeDetails />}/>
                            <Route path="/edit/:id" element={<EditSake/>}/>
                    </Routes>
                </Router>
            </UserProvider>
        </SearchProvider>
    </AuthProvider>
  );
}

const CheckLogin = () => {
  const { setIsLoggedIn } =useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  return null;

}

export default App;
