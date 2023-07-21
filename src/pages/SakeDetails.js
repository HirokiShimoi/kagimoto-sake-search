import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function SakeDetails (){
    const [sake,setSake] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchdata = async () => {
            const result = await axios(`http://localhost:5000/sake/${id}`);
            setSake(result.data);
        };

        fetchdata();
    },[id]);

    if (!sake) return <p>Loading...</p>;
    
    return (
        <div>
            <h2>{sake.name}</h2>
        </div>
    )
};

export default SakeDetails;