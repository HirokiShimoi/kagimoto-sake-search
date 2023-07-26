import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Header,Footer } from './Header_Footer';


function SakeDetails (){
    const [sake,setSake] = useState(null);
    const { id } = useParams();

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
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default SakeDetails;