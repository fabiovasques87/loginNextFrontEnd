// UserContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { User } from '../types';

// export interface User {
//   id?: number;
//   username: string;
//   role: string;
//   // Outras informações do usuário, se necessário
// }

interface UserContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      const decodedToken: any = jwt.decode(storedToken);

      setUser({
        id: decodedToken?.userId,
        username: decodedToken?.username,
        role: decodedToken?.role,
        // ... outras informações do usuário
      });
    }
  }, []); // Executar este efeito apenas uma vez durante a inicialização

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
