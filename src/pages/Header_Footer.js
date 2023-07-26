import { useLocation } from 'react-router-dom';
import kagimoto from "../images/kagimoto.png";
import kagimoto_logo from "../images/kagimoto_logo.png";
import "./Header_Footer.css";
import { useNavigate } from 'react-router-dom';
 
export function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const login_btn = (e) => {
        e.preventDefault();
        navigate("/login")
    }

    if (location.pathname=== '/'){
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
                            <button className="btn btn-primary m-2" onClick={login_btn}>LOGIN</button>
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
