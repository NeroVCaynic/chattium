'use client';

import React from 'react';
import { useUserContext } from '@/lib/hooks';
import { logout } from '@/lib/utils/clientActions';
import { User } from '@supabase/supabase-js';

function Navbar() {
    const user: User | undefined = useUserContext();

    return (
        <header
        id='navbar-header'
        className=''
        >
            <span 
            id='app-title'
            className=''
            >
                Navbar
            </span>

            <nav>
                <button onClick={logout}>{user? 'logged' : null}</button>
            </nav>
        </header>
    );
};

function Sidebar() {
    const user: User | undefined = useUserContext();

    return (
        <header
        id='sidebar-header'
        className=''
        >
            <span 
            id='app-title'
            className=''
            >
                Navbar
            </span>

            <nav>
                <button  onClick={logout}>{user? 'logged' : null}</button>
            </nav>
        </header>
    );
};

export {
    Navbar,
    Sidebar,
};