'use client';

import React, {useState, useEffect, createContext, useContext} from 'react';
import supabaseClient from '../utils/client';
import { userType } from '../types';

const UserContext = createContext<userType | undefined>(undefined);

export default function UserContextProvider(
    {children,}: Readonly<{children?: React.ReactNode;}>
) {
    const [userState, setUserState] = useState<userType>(null);

    function switchUserSession(data: userType): void {
      setUserState(data);
    };

    useEffect(()=>{
      console.log('enter effect')

      const { 
        data: { subscription }, 
      } = supabaseClient.auth.onAuthStateChange((event, session) => {
        if (event == 'SIGNED_OUT') {
          switchUserSession(null);
        } else if (session) {
          switchUserSession(session);
        }

        console.log('session update trigger')
      });

      return () => {
        subscription.unsubscribe();
      };
    }, []);

    console.log(userState)

    return (
        <UserContext.Provider value={userState}>
            {children}
        </UserContext.Provider>
    );
};

export function useUserContext() {
  const context = useContext(UserContext);
  return context?.user;
}