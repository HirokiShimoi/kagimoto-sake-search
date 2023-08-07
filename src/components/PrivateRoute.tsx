import React, {ReactElement, ReactNode,useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate,Route } from "react-router-dom";

interface PrivateRouteProps {
    path: string;
    element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path,element }) => {

    const{isLoggedIn} = useContext(UserContext);
    const navigate = useNavigate();

    if (!isLoggedIn) {
        navigate('/');
        return null;
    }
    return <Route path={path} element={element} />;
 };

 export default PrivateRoute;