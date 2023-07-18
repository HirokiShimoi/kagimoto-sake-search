import React from 'react';
import { useState,useContext } from 'react';

export const SearchContext = React.createContext();

export function SearchProvider({children}) {
    const [searchParams,setSearchParams] = useState({});
    return(
        <SearchContext.Provider value={{ searchParams, setSearchParams }}>
            {children}
        </SearchContext.Provider>
    );
}
