'use client';

import React from 'react';
import { login as log } from '@/lib/utils/clientActions';

export default function login() {
    return (
        <main
        id='login-page'
        className='grid grid-cols-1 place-items-center'
        >
            <fieldset className="fieldset rounded-box w-full max-w-xl border p-4 space-y-4">
                <legend className="fieldset-legend text-lg font-bold">Login</legend>
                <form className='max-w-xs container mx-auto grid grid-cols-1 place-items-center py-4'>
                    <label className="floating-label w-full" htmlFor="email">
                        <span>Your Email</span>
                        <input 
                        id="email" 
                        name="email" 
                        type="email"
                        placeholder="mail@site.com" 
                        className="input validator w-full" 
                        required
                        />
                        <div className="validator-hint">Enter valid email address</div>
                    </label>
                    <label className="floating-label w-full" htmlFor="password">
                        <span>Password</span>
                        <input 
                        id="password" 
                        name="password"
                        type="password" 
                        className="input validator w-full" 
                        placeholder="Password" 
                        minLength={8}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        required 
                        />
                        <div className="validator-hint">Must be more than 8 characters, including number, lowercase letter, uppercase letter</div>
                    </label>
                    <button className="btn btn-neutral mt-4 w-full" formAction={log}>Submit</button>
                </form>
            </fieldset>
        </main>
    );
};