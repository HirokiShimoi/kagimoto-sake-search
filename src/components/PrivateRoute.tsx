import React, {ReactElement, ReactNode,useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate,Route,Outlet } from "react-router-dom";

//interface PrivateRouteProps {
//    path: string;
//    element: React.ReactElement;
//}
//
//const PrivateRoute: React.FC<PrivateRouteProps> = ({ path,element }) => {
//
//    const{isLoggedIn} = useContext(UserContext);
//    const navigate = useNavigate();
//
//    if (!isLoggedIn) {
//        navigate('/');
//        return null;
//    }
//    return <Outlet />;
// };
//

type PrivateRouteProps = {
    children?: ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
    const { isLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();
  
    if (!isLoggedIn) {
        navigate('/');
        return null;
    }
  
    return children || <Outlet />;
  }
  
  export default PrivateRoute;
