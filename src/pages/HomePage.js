import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import ohmine from "../images/ohmine.jpg"

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/search")
  };

  return (
    <div>
      <div className='toppage vh-100 d-flex align-items-center justify-content-center'>
          <div className="card sake-card m-3" style={{width: 18 + "rem"}}>
              <img src={ohmine} className="card-img-top" alt="大嶺"/>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">日本酒を探す</h5>
                  <button className="btn btn-primary sake-search-btn" onClick={handleButtonClick}>Go Search</button>              
              </div>
          </div>    
          <div className="card sake-card m-3" style={{width: 18 + "rem"}}>
              <img src={ohmine} className="card-img-top" alt="大嶺"/>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">焼酎を探す</h5>
                  <button className="btn btn-primary sake-search-btn" onClick={handleButtonClick}>Go Search</button>              
              </div>
          </div>    
          <div className="card sake-card m-3" style={{width: 18 + "rem"}}>
              <img src={ohmine} className="card-img-top" alt="大嶺"/>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">ワインを探す</h5>
                  <button className="btn btn-primary sake-search-btn" onClick={handleButtonClick}>Go Search</button>              
              </div>
          </div>    
      </div>
    </div>
  )
  
}

export default HomePage