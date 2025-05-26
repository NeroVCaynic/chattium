'use client';

import React from 'react';
import { login as log } from '@/utils/auth';

export default function login() {
    return (
        <main
        id='login-page'
        className=''
        >
            <form>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <button formAction={log}>Log in</button>
            </form>
        </main>
    );
};