import React, { createContext, useState, ReactNode } from 'react';

interface User {
  displayName?: string;
  name?: string;
  picture?: string;
  email?: string;
  // Add more properties as needed
}

export interface UserContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({});

  // User Structure
  // Display Name
  // Name
  // Picture link
  // POSSIBLY Length of session/session expiry date and time

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const UserCon = UserContext;
