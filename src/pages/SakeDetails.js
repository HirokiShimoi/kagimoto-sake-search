import React, { useEffect, useState, useContext} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Header,Footer } from './Header_Footer';
import { UserContext } from '../contexts/UserContext';
import './css/SakeDetails.css'


function SakeDetails (){
    const [sake,setSake] = useState(null);
    const { id } = useParams();
    const { isLoggedIn } = useContext(UserContext);
    const navigate =useNavigate(); 

    const editProduct = () => {
        navigate(`/edit/${id}`)
    };

    useEffect(() => {
        const fetchdata = async () => {
            const result = await axios(`http://localhost:5000/sake/${id}`);
            setSake(result.data);
            console.log(id);
        };

        fetchdata();
    },[id]);

    if (!sake) return <p>Loading...</p>;
    
    return (
        <div>
            <Header/>
            <div className='sakedetail-container container'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={sake.imageUrl} alt={sake.imageUrl}/>
                    </div>
                    <div className='col-6'>
                        <h2 className='m-3'>{sake.productName}</h2>
                        <h5 className='m-3'>{sake.description}</h5>
                        <p className='m-3'>{sake.content}</p>
                        <div className='mt-5'>
                            <table className='table table-striped'>
                                <tbody>
                                    {sake.variations.map((variation, index) => {
                                        console.log(sake.variations);
                                        return (
                                            <tr key={index}>
                                                <td>{variation.products}</td>
                                                <td>¥{variation.price}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            {isLoggedIn && <button className="btn btn-primary m-2 edit-button" onClick={editProduct}>編集</button>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default SakeDetails;