import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import kagimoto from "../images/kagimoto.png";
import kagimoto_logo from "../images/kagimoto_logo.png";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { AuthContext } from '../contexts/AuthContext';
import "../css/Header_Footer.css";


interface UserContextType {
    isLoggedIn: Boolean;
    setIsLoggedIn: (value:boolean) => void;
}

export const Header:React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const { user,setUser } = useContext(AuthContext)

    const login_btn = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/")
    }
    const logout_btn = () => {
        if (window.confirm('ログアウトしますか？')) {
            setIsLoggedIn(false);
            setUser?.(null);
            localStorage.removeItem('token')
        }
    };
    console.log(user)

    if (location.pathname=== '/toppage'){
        return (
            <header>
                <img src={kagimoto} alt="logo" className="headerlogo"/>
            </header>    
        );
    } else {
        return (
            <header className='other-headers'>
                <nav>
                    <div className='container-fluid d-flex justify-content-between'>
                        <img src={kagimoto_logo} alt="logo" width="250" className="d-inline-block align-text-top other-header-logo"/>
                        <div>
                        <span>ユーザー名: {user ? user.user : 'Loading...'}</span>
                            {isLoggedIn ?(
                                <button className="btn btn-primary m-2 edit-button" onClick={logout_btn}>ログアウト</button>
                            ) : (
                                <button className="btn btn-primary m-2 edit-button" onClick={login_btn}>ログイン</button>
                            )}
                            
                        </div>
                    </div>
                </nav>
            </header>  
        );
    }
  }
  
  export function Footer() {
    const location = useLocation();
    // フッターコンポーネントの内容を記述します。
    if (location.pathname === "/") {
        // HomePage用のフッター
        return (
        <footer>
            <p className="text-white footer-copyrights d-flex justify-content-center">COPYRIGHT © SAKAYANOKAGIMOTO ALL RIGHTS RESERVED</p>
        </footer>
        );
    } else {
        // それ以外のページ用のフッター
        return (
        <footer className='other-footers'>
            <p className="footer-copyrights d-flex justify-content-center">COPYRIGHT © SAKAYANOKAGIMOTO ALL RIGHTS RESERVED</p>
        </footer>
        );
    }
};
