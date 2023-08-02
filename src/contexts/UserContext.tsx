import React, { createContext, useState, ReactNode } from 'react';

interface UserContextProps {
    isLoggedIn:boolean;
    setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>;
    username:string | null;
    setUsername: React.Dispatch<React.SetStateAction<string | null>>;
}

export const UserContext = createContext<UserContextProps>({
    isLoggedIn : false,
    setIsLoggedIn: () => {},
    username:null,
    setUsername: () => {},
});

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider:React.FC<UserProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState<string | null>(null);

    return(
        <UserContext.Provider value = {{ isLoggedIn, setIsLoggedIn, username, setUsername}}>
            {children}
        </UserContext.Provider>
    )
};