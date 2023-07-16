import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function SakeDetails (){
    const [sake,setSake] = useState(null);
    const { sakeId } = useParams();

    useEffect(() => {
        const fetchdata = async () => {
            const result = await axios(`http://localhost:5000/sake/${sakeId}`);
            setSake(result.data);
        };

        fetchdata();
    },[sakeId]);

    if (!sake) return <p>Loading...</p>;
    
    return (
        <div>
            <h2>{sake.name}</h2>
        </div>
    )
};

export default SakeDetails;