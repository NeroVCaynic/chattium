'use client';

import React, {useState, createContext, useContext} from 'react';
import { userType } from '../types';

const UserContext = createContext<any>(undefined);

export function useUserContext() {
  const context = useContext(UserContext);

  if (context == undefined) {
    throw new Error("context is undefined")
  }

  return [...context];
}

export default function UserContextProvider(
    {children,}: Readonly<{children?: React.ReactNode;}>
) {
    const [userState, setUserState] = useState<userType | null>(null);

    return (
        <UserContext.Provider value={[userState, setUserState]}>
            {children}
        </UserContext.Provider>
    );
};