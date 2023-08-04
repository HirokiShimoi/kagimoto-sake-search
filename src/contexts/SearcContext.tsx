import React, { createContext, useState } from 'react';

interface SearchParams{
    keyword?: String;
    minprice?: Number;
}

interface SearchContextValue {
    searchParams: SearchParams;
    setSearchParams: React.Dispatch<React.SetStateAction<SearchParams>>;
}

const defaultValue:SearchContextValue = {
    searchParams: {},
    setSearchParams: () => {},
}
export const SearchContext = createContext<SearchContextValue>(defaultValue);

export const SearchProvider = ({children}:{children: React.ReactNode}) => {
    const[searchParams, setSearchParams] = useState<SearchParams>({});
    return(
        <SearchContext.Provider value={{ searchParams, setSearchParams }}>
            {children}
        </SearchContext.Provider>
    )
}