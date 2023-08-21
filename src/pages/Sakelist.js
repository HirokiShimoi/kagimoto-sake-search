import React, { useEffect, useState } from 'react';
import { Header, Footer } from '../components/Header_Footer';


function SakeList() {
    const [sakes, setSakes] = useState([]);
    const apiUrl = process.env.REACT_APP_API_ENDPOINT;
  
    useEffect(() => {
      fetch('${apiUrl}/sake')
        .then(response => response.json())
        .then(data => {
            console.log(data); // 追加
            setSakes(data)
          })
        .catch((error) => console.error('Error:', error));
    }, []);
  
    return (
      <div>
        <Header/>
        <h1>Sake List</h1>
        <div className="d-flex flex-wrap">
        {sakes.map(sake => (
          <div key={sake._id} className="card " style={{width: '18rem'}}>
            <img src={sake.ImageUrl} className="card-img-top" alt={sake.name} />
            <div className="card-body text-center">
              <h5 className="card-title">{sake.name}</h5>
              <button className="btn btn-primary sake-search-btn" >Go Search</button>              
            </div>
          </div>
        ))}
        </div>
        <Footer/>
      </div>
    );    
  }
  
  export default SakeList;
  