import React, { createContext, useState } from 'react';

interface User {
    username: string;
    password: string;
  }
  

interface AuthContextProps {
    user: string | null;
    setUser: React.Dispatch<React.SetStateAction<string | null>> | null;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    setUser: () => {},
});

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider:React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    return (
        <AuthContext.Provider value= {{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
