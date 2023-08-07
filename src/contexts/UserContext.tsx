import React, { createContext, useState, ReactNode } from 'react';

interface UserContextProps {
    isLoggedIn:boolean;
    setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>;

}

export const UserContext = createContext<UserContextProps>({
    isLoggedIn : false,
    setIsLoggedIn: () => {},

});

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider:React.FC<UserProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <UserContext.Provider value = {{ isLoggedIn, setIsLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
};