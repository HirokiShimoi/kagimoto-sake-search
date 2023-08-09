import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes ,Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SakeList from "./pages/Sakelist";
import SearchResult from "./pages/SearchResult";
import EditSake from "./pages/EditSake";
import UserSearchPage from "./pages/UserSakeSearch"
import { SearchProvider } from "./contexts/SearchContext";
import PrivateRoute from "./components/PrivateRoute";
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
                    <Routes>
                            <Route path="/" element= {<Login />}/>
                            <Route path="/toppage" element= {<HomePage />}/>
                            <Route path="/search-sake" element= {<UserSearchPage />}/>
                            <Route path="/sakelist" element={<SakeList />}/>
                            <Route path="/sakeresult" element={<SearchResult />}/>
                            <Route path="/sake/:id" element={<SakeDetails />}/>
                            {/*<Route path="/edit/:id" element={<PrivateRoute><EditSake/></PrivateRoute>}/>*/}
                            {/*<PrivateRoute path="/edit/:id" element={<EditSake />} />*/}
                            <Route path="/edit/:id" element={
                              <PrivateRoute>
                                <EditSake />
                              </PrivateRoute>
                            } />
                            <Route path="*" element={<CheckLogin />} />  {/* このように最後に追加 */}
                    </Routes>
                </Router>
            </UserProvider>
        </SearchProvider>
    </AuthProvider>
  );
}

const CheckLogin = () => {
  const { setIsLoggedIn } =useContext(UserContext);
  const navigate  =useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      if (window.location.pathname !== '/') {
        sessionStorage.setItem('preLoginRoute',window.location.pathname);
        navigate('/')
      }
    }
  }, [setIsLoggedIn,navigate]);

  return null;

}

export default App;
