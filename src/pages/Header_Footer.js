import kagimoto from "../images/kagimoto.png";
import "./Header_Footer.css";
 
export function Header() {
    // ヘッダーコンポーネントの内容を記述します。
    return (
    <header>
        <img src={kagimoto} alt="logo" className="headerlogo"/>
    </header>    
    ) 
  };
  
  export function Footer() {
    // フッターコンポーネントの内容を記述します。
    return (
        <footer>
            <p className="text-white footer-copyrights d-flex justify-content-center">COPYRIGHT © SAKAYANOKAGIMOTO ALL RIGHTS RESERVED</p>
        </footer>
    )
  };
