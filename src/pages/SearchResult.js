import React from "react";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Header, Footer } from '../components/Header_Footer';


const SearchResult = () => {
    const {searchParams} = useContext(SearchContext);
    const [sakeData,setSakeData] = useState();
    const apiUrl = process.env.REACT_APP_API_ENDPOINT;

    console.log(searchParams)
    
    useEffect( () => {
        axios(`${apiUrl}/sake`)
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
        filteredData = sakeData.filter(sake => {
            {/*const isNameMatch = sake.productName.includes(searchParams.keyword);
            const minPrice = parseFloat(searchParams.minprice);
            const maxPrice = parseFloat(searchParams.maxprice);
            const isMinPriceMatch = !searchParams.minprice || sake.variations.some(variation => variation.price >= minPrice);
            const isMaxPriceMatch = !searchParams.maxprice || sake.variations.some(variation => variation.price <= maxPrice);
            const spicyMatch = !searchParams.spicy.length || searchParams.spicy.some(sp => sake.spicy.includes(sp));
            const smellMatch = !searchParams.smell.length || searchParams.smell.some(smell => sake.smell.includes(smell));
            const specMatch = !searchParams.spec.length || searchParams.spec.some(spec => sake.spec.includes(spec));
            const giftMatch = searchParams.gift ==='' || sake.gift.toString() === searchParams.gift;
            const stockMatch = searchParams.stock ==='' || sake.variations.some(variation => variation.stock.toString() === searchParams.stock);*/}

            const isNameMatch = !searchParams.keyword || sake.productName.includes(searchParams.keyword);
            const minPrice = parseFloat(searchParams.minprice || 0);
            const maxPrice = parseFloat(searchParams.maxprice || Infinity);
            const isMinPriceMatch = !searchParams.minprice || sake.variations.some(variation => variation.price >= minPrice);
            const isMaxPriceMatch = !searchParams.maxprice || sake.variations.some(variation => variation.price <= maxPrice);
            const spicyMatch = !searchParams.spicy?.length || searchParams.spicy.some(sp => sake.spicy?.includes(sp));
            const smellMatch = !searchParams.smell?.length || searchParams.smell.some(smell => sake.smell?.includes(smell));
            const specMatch = !searchParams.spec?.length || searchParams.spec.includes(sake.spec);
            const giftMatch = !searchParams.gift || sake.gift.toString() === searchParams.gift;
            const stockMatch = !searchParams.stock || sake.variations.some(variation => variation.stock.toString() === searchParams.stock);


            return isNameMatch && isMinPriceMatch && isMaxPriceMatch&&spicyMatch&&smellMatch&&specMatch&&giftMatch&&stockMatch;
        });
        console.log(filteredData)
        console.log(sakeData)
    }
    return(
        <> 
            <Header/>
            <div>
                <h1>Sake List</h1>
                <div className="d-flex flex-wrap">
                    {filteredData.length > 0 ? (
                        filteredData.map(sake => (
                            <div key={sake._id} className="card " style={{width: '18rem'}}>
                                <img src={sake.imageUrl} className="card-img-top" alt={sake.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{sake.productName}</h5>
                                    <Link to={`/sake/${sake._id}`}className="btn btn-primary sake-search-btn">詳しく見る</Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>お探しの条件に一致するお酒は見つかりませんでした。</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )    
};

export default SearchResult;

