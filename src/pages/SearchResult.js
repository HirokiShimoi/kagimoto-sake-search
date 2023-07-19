import React from "react";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import axios from 'axios';


const SearchResult = () => {
    const {searchParams} = useContext(SearchContext);
    const [sakeData,setSakeData] = useState();

    console.log(searchParams)
    
    useEffect( () => {
        axios('http://localhost:5000/sake')
        .then((response) => {
            console.log(response.data);
            setSakeData(response.data)
        })
        .catch((error) => {
            console.error('There was an error!', error);
        }) 
    },[])


    let filteredData = [];

    if(sakeData) {
        console.log(sakeData)
        filteredData = sakeData.filter(sake => {
            return (
                sake.name.includes(searchParams.keyword)&&
                (searchParams.minPrice === '' || sake.price >= searchParams.minPrice)
            );
        });
        console.log(filteredData)
    }
    return(
        <> 
            <div>
                <h1>Sake List</h1>
                <div className="d-flex flex-wrap">
                    {filteredData.map(sake => (
                        <div key={sake._id} className="card " style={{width: '18rem'}}>
                            <img src={sake.ImageUrl} className="card-img-top" alt={sake.name} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{sake.name}</h5>
                                <button className="btn btn-primary sake-search-btn" >Go Search</button>              
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default SearchResult;

